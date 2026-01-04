const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/sqlite");
const { validationResult } = require("express-validator");

exports.register = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const query = `
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
  `;

  db.run(query, [name, email, hashedPassword], function (err) {
    if (err) {
      if (err.message.includes("UNIQUE"))
        return res.status(409).json({ message: "Email already exists" });
      return res.status(500).json({ message: "Server error" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, user) => {
      if (!user) return res.status(401).json({ message: "Invalid credentials" });

      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch)
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token });
    }
  );
};
