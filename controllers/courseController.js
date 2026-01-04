// const db = require("../db/sqlite");

// exports.createCourse = (req, res) => {
//   const { courseName, description, instructor } = req.body;

//   db.run(
//     `INSERT INTO courses (courseName, description, instructor)
//      VALUES (?, ?, ?)`,
//     [courseName, description, instructor],
//     function (err) {
//       if (err) return res.status(500).json({ message: "Error creating course" });
//       res.status(201).json({ message: "Course created" });
//     }
//   );
// };

// exports.getCourses = (req, res) => {
//   db.all("SELECT * FROM courses", [], (err, rows) => {
//     res.json(rows);
//   });
// };

// exports.getCourseById = (req, res) => {
//   db.get(
//     "SELECT * FROM courses WHERE id = ?",
//     [req.params.id],
//     (err, row) => {
//       res.json(row);
//     }
//   );
// };

// exports.updateCourse = (req, res) => {
//   const { courseName, description, instructor } = req.body;

//   db.run(
//     `UPDATE courses
//      SET courseName=?, description=?, instructor=?
//      WHERE id=?`,
//     [courseName, description, instructor, req.params.id],
//     () => res.json({ message: "Course updated" })
//   );
// };

// exports.deleteCourse = (req, res) => {
//   db.run(
//     "DELETE FROM courses WHERE id = ?",
//     [req.params.id],
//     () => res.json({ message: "Course deleted" })
//   );
// };
const db = require("../db/sqlite");

exports.createCourse = (req, res) => {
  const { courseName, description, instructor } = req.body;

  if (!courseName || !instructor) {
    return res.status(400).json({ message: "Course name and instructor are required" });
  }

  db.run(
    `INSERT INTO courses (courseName, description, instructor)
     VALUES (?, ?, ?)`,
    [courseName, description, instructor],
    function (err) {
      if (err) {
        return res.status(500).json({ message: "Error creating course" });
      }
      res.status(201).json({ message: "Course created successfully" });
    }
  );
};

exports.getCourses = (req, res) => {
  db.all("SELECT * FROM courses", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch courses" });
    }
    res.json(rows);
  });
};

exports.getCourseById = (req, res) => {
  db.get(
    "SELECT * FROM courses WHERE id = ?",
    [req.params.id],
    (err, row) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }
      if (!row) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(row);
    }
  );
};

exports.updateCourse = (req, res) => {
  const { courseName, description, instructor } = req.body;

  if (!courseName || !instructor) {
    return res.status(400).json({ message: "Course name and instructor are required" });
  }

  db.run(
    `UPDATE courses
     SET courseName=?, description=?, instructor=?
     WHERE id=?`,
    [courseName, description, instructor, req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json({ message: "Failed to update course" });
      }
      if (this.changes === 0) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json({ message: "Course updated successfully" });
    }
  );
};

exports.deleteCourse = (req, res) => {
  db.run(
    "DELETE FROM courses WHERE id = ?",
    [req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json({ message: "Failed to delete course" });
      }
      if (this.changes === 0) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json({ message: "Course deleted successfully" });
    }
  );
};
