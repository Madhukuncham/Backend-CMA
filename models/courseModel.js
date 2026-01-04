const db = require("../db/sqlite");

const CourseModel = {
  // Create course
  createCourse: (courseName, description, instructor, callback) => {
    const query = `
      INSERT INTO courses (courseName, description, instructor)
      VALUES (?, ?, ?)
    `;
    db.run(query, [courseName, description, instructor], callback);
  },

  // Get all courses
  getAllCourses: (callback) => {
    const query = `SELECT * FROM courses`;
    db.all(query, [], callback);
  },

  // Get course by ID
  getCourseById: (id, callback) => {
    const query = `SELECT * FROM courses WHERE id = ?`;
    db.get(query, [id], callback);
  },

  // Update course
  updateCourse: (id, courseName, description, instructor, callback) => {
    const query = `
      UPDATE courses
      SET courseName = ?, description = ?, instructor = ?
      WHERE id = ?
    `;
    db.run(query, [courseName, description, instructor, id], callback);
  },

  // Delete course
  deleteCourse: (id, callback) => {
    const query = `DELETE FROM courses WHERE id = ?`;
    db.run(query, [id], callback);
  }
};

module.exports = CourseModel;
