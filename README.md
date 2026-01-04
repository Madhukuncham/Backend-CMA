
# 📕 Backend 
# Course Management App – Backend

A secure RESTful API for managing users and their courses.  
Built with Node.js, Express, SQLite, and JWT authentication.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- SQLite3
- JWT (JSON Web Tokens)
- bcrypt
- REST API architecture

---

## ✨ Features

- User registration and login
- Password hashing with bcrypt
- JWT-based authentication middleware
- User-specific course management
- Secure CRUD operations
- SQLite database
- Proper error handling and status codes

---


## 🛠 How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Madhukuncham/Backend-CMA.git
cd Backend-CMA
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start the server
bash
Copy code
npm start
Server will run at:

arduino
Copy code
http://localhost:3001
🗄 Database
SQLite database file: db/database.sqlite

Tables:

users

courses (linked with user_id)

🔐 API Endpoints
Auth
POST /api/auth/register – Register user

POST /api/auth/login – Login user

Courses (Protected)
GET /api/courses – Get user-specific courses

POST /api/courses – Create course

GET /api/courses/:id – Get course by ID

PUT /api/courses/:id – Update course

DELETE /api/courses/:id – Delete course

📸 Screenshots
Optional (DB structure / Postman screenshots)

Example:

md
Copy code
![API Test](screenshots/postman.png)
📌 Security Notes
Passwords are hashed using bcrypt

JWT tokens are required for protected routes

Users cannot access or modify other users’ courses

👤 Author
Madhu Kuncham
Backend Developer | Software Engineer

