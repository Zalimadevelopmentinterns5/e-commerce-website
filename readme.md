# 🛒 Multi-Tenant E-Commerce Platform (SaaS)

A full-stack **Multi-Tenant E-Commerce Platform** built using the **MERN Stack** that enables multiple vendors (tenants) to manage their own online stores within a shared application. The platform provides secure authentication, product management, order processing, user management, role-based access control, and an intuitive admin dashboard, making it a scalable Software-as-a-Service (SaaS) solution.

---

# 📖 Project Overview

The Multi-Tenant E-Commerce Platform allows multiple vendors to independently manage their stores while sharing a common infrastructure. Each tenant has isolated access to products, orders, and customers, ensuring security and scalability.

The platform includes dedicated modules for authentication, product inventory, order processing, analytics, and store management.

---

# ✨ Features

## Authentication & Security

- Secure User Registration and Login
- JWT-based Authentication
- Password Encryption using bcrypt
- Protected Routes with Authentication Middleware
- Role-Based Access Control

## Product Management

- Add New Products
- Update Product Details
- Delete Products
- Product Image Upload
- Product Listing and Search

## Order Management

- Place Orders
- View Order History
- Update Order Status
- Manage Customer Orders

## User Management

- User Registration
- User Profile Management
- View and Manage Users

## Dashboard

- Admin Dashboard
- Product Overview
- Order Statistics
- Analytics Dashboard
- Responsive Navigation

## Multi-Tenant Architecture

- Independent Vendor (Tenant) Management
- Tenant-specific Products
- Tenant-specific Orders
- Tenant Data Isolation
- Shared SaaS Infrastructure

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- dotenv
- CORS

---

# 📂 Project Structure

```
e-commerce-website-main
│
├── backend
│   ├── controller
│   ├── middleware
│   ├── model
│   ├── route
│   ├── uploads
│   ├── index.js
│   └── package.json
│
├── frontend
│
├── public
├── src
│   ├── components
│   ├── pages
│   ├── context
│   └── assets
│
└── package.json
```

---

# 🔌 REST API Endpoints

## User APIs

```http
GET    /api/user
GET    /api/user/:id
POST   /api/user
PUT    /api/user/:id
DELETE /api/user/:id
```

## Product APIs

```http
GET    /api/product
GET    /api/product/:id
POST   /api/product
PUT    /api/product/:id
DELETE /api/product/:id
```

## Order APIs

```http
GET    /api/order
GET    /api/order/:id
POST   /api/order
PUT    /api/order/:id
DELETE /api/order/:id
```

---

# 🔐 Authentication

The application uses **JSON Web Tokens (JWT)** for secure authentication. Passwords are encrypted using **bcrypt**, and protected routes are secured through custom authentication middleware.

---

# 📷 Image Upload

Images are uploaded using **Multer** and stored locally inside the **uploads/** directory.

---

# 🗄️ Database

MongoDB is used as the primary database.

### Collections

- Users
- Products
- Orders
- Tenants

---

# 🏢 Multi-Tenant Architecture

```
                    Multi-Tenant Platform
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    Tenant A           Tenant B          Tenant C
        │                  │                  │
   Products           Products          Products
   Orders             Orders            Orders
   Customers          Customers         Customers
```

Each tenant operates independently while sharing the same application infrastructure. The platform ensures secure tenant-level data separation and efficient resource utilization.

---

# 📊 Project Highlights

- Full MERN Stack Application
- RESTful API Architecture
- Secure JWT Authentication
- Role-Based Authorization
- Multi-Tenant SaaS Design
- CRUD Operations for Users, Products, and Orders
- Local Image Upload using Multer
- Responsive Admin Dashboard
- Analytics and Reporting
- Modular Backend Architecture
- Clean and Scalable Code Structure

---

# 👥 Team

**Zaalima Development Interns**

- Backend Development
- Frontend Development
- Database Design
- API Development
- Authentication & Authorization
- UI/UX Development
- Testing & Debugging

---

# 📄 License

This project was developed as part of an internship and educational learning experience. It is intended for demonstration, learning, and portfolio purposes.


