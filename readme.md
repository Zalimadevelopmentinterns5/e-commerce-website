# Multi-Tenant E-Commerce Platform (SaaS)

A scalable Multi-Tenant E-Commerce Platform designed to allow multiple vendors to manage their stores independently within a shared application. The platform provides product management, order management, user management, authentication, and role-based access control.

---

## Project Overview

This project enables multiple vendors (tenants) to operate their online stores using a single application while maintaining data isolation and security.

### Key Objectives

- Multi-tenant architecture
- Vendor management
- Product management
- Order management
- Secure authentication
- Role-based access control
- Scalable SaaS platform design

---

## Current Development Status

### Backend Progress

- Express.js server setup
- MongoDB database integration
- User CRUD APIs
- Product CRUD APIs
- Order CRUD APIs
- File upload support using Multer
- Authentication middleware implementation
- Local image storage
- API testing using Postman

### Frontend Progress

- React + Vite setup
- Dashboard page
- Products page
- Analytics page
- Settings page
- Sidebar navigation
- Navbar component
- Routing using React Router
- Frontend testing and debugging

### In Progress

- Multi-Tenant implementation
- Role-based access control enhancement
- Vendor management
- Payment integration
- Super Admin dashboard
- Deployment

---

## Technology Stack

### Frontend

- React.js
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## API Endpoints

### User APIs

```http
GET    /api/user
GET    /api/user/:id
POST   /api/user
PUT    /api/user/:id
DELETE /api/user/:id
```

### Product APIs

```http
GET    /api/product
GET    /api/product/:id
POST   /api/product
PUT    /api/product/:id
DELETE /api/product/:id
```

### Order APIs

```http
GET    /api/order
GET    /api/order/:id
POST   /api/order
PUT    /api/order/:id
DELETE /api/order/:id
```

---

## Multi-Tenant Concept

A Tenant represents an individual vendor or store using the platform.

```text
Platform
│
├── Tenant A (Store A)
├── Tenant B (Store B)
└── Tenant C (Store C)
```

Each tenant manages:

- Products
- Orders
- Customers
- Store Settings

Future implementation will ensure complete tenant-level data isolation.

---

## Future Enhancements

- Complete Multi-Tenant Architecture
- Super Admin Dashboard
- Vendor Onboarding
- Payment Gateway Integration
- Analytics Dashboard Enhancement
- Deployment

---

## Team

Zaalima Development Interns

---

## Repository

https://github.com/Zalimadevelopmentinterns5/e-commerce-website
