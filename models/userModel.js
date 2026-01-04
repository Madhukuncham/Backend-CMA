const db = require("../db/sqlite");

const UserModel = {
  // Create a new user
  createUser: (name, email, hashedPassword, callback) => {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
    `;
    db.run(query, [name, email, hashedPassword], callback);
  },

  // Find user by email
  findByEmail: (email, callback) => {
    const query = `
      SELECT * FROM users WHERE email = ?
    `;
    db.get(query, [email], callback);
  }
};

module.exports = UserModel;
