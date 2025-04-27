# Role-Based Access Control (RBAC) Blog Platform

This project is a full-stack blog platform that implements **Role-Based Access Control (RBAC)** to ensure secure authentication and authorization for different types of users (Admin and User).  
The platform enables secure access management where admins have additional permissions like creating, editing, and deleting blog posts, while users can only view blogs.

---

## ✨ Features

- User authentication with **JWT (JSON Web Tokens)**
- Role-based authorization (**Admin** and **User** roles)
- Secure backend using **Node.js** and **Express.js**
- Responsive frontend built with **React.js**
- Admin dashboard to manage blog posts (Create, Edit, Delete)
- User-friendly interface to view blog posts
- Passwords securely hashed before storage
- Protected routes and role-specific permissions
- MongoDB integration for user and blog data storage
- **Bonus**: Structure ready for adding features like **Email Verification**

---

## 📂 Project Structure

```
rbac-blog-platform/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   └── vite.config.js
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/kesari99/Role-Based-Access-Control-Assignment.git

```

### 2. Setup Backend

```bash
cd backend
npm install
```

-I Have included my .env file for testing your database fllow below instructions

- Create a `.env` file inside the `backend` directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

- Start the backend server:

```bash
cd server
npm run dev
```

Backend will run on: `http://localhost:5000`

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **Authentication**: JWT
- **Routing**: React Router DOM
- **Icons**: Lucide React

---

## 🔒 Role Permissions

| Role  | Permissions                                     |
|-------|-------------------------------------------------|
| User  | View blog posts                                 |
| Admin | Create, Update, Delete blog posts,  |

---

## 🧩 Application Flow (Brief Architecture)

1. **Authentication**:  
   - Users sign up and login.
   - JWT token is issued and stored in the frontend securely.
   
2. **Authorization**:  
   - Middleware verifies the JWT and checks user role.
   - Access to protected routes (like create, edit, delete blogs) is restricted to admins only.

3. **Frontend**:  
   - Based on role, users are redirected to respective pages (Dashboard for Admin, Home page for Users).
   - Admin Dashboard has a tab system to **Create**, **Edit**, **Delete**, and **View** blogs.

4. **Backend**:  
   - All sensitive operations are protected by authentication.

---

## 📄 Deliverables

- ✅ Complete source code for both frontend and backend
- ✅ This README with installation instructions
- ✅ Proper architecture and code flow explained

---



## 📧 Contact

If you have any questions or suggestions, feel free to connect!

---

**Thank you! 🙌**
