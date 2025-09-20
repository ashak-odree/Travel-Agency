# JourneyHub Admin Panel

A comprehensive full-stack admin dashboard for managing travel destinations and customer testimonials. Built with modern web technologies and featuring secure authentication, CRUD operations, and a professional user interface.

## 🚀 Features

- **Admin Authentication System** - Secure signup/login with JWT
- **Destinations Management** - Complete CRUD operations for travel destinations
- **Testimonials Management** - Full testimonial management with ratings
- **Professional Dashboard** - Clean, responsive admin interface
- **Real-time Validation** - Form validation with error handling
- **Secure API** - Protected routes with authentication middleware

## 🛠️ Full Stack Architecture

### Frontend Technologies
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite 5.4.19** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI component library
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and state management
- **Lucide React** - Beautiful icon library

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js 4.19.2** - Fast, unopinionated web framework
- **MongoDB** - NoSQL document database
- **Mongoose 8.6.3** - MongoDB object modeling
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Parse HTTP cookies
- **Zod** - Server-side validation

### Database Schema
- **Users Collection** - Admin accounts (name, email, password, role)
- **Destinations Collection** - Travel destinations (name, description, image, location, price)
- **Testimonials Collection** - Customer reviews (name, content, rating, avatar)

## 📡 API Endpoints

### Authentication Routes
```
POST   /api/auth/signup     - Create new admin account
POST   /api/auth/login      - Admin login
POST   /api/auth/logout     - Logout and clear session
GET    /api/auth/me         - Get current user info (protected)
```

### Destinations Routes
```
GET    /api/destinations        - Get all destinations
POST   /api/destinations        - Create destination (protected)
PUT    /api/destinations/:id    - Update destination (protected)
DELETE /api/destinations/:id    - Delete destination (protected)
```

### Testimonials Routes
```
GET    /api/testimonials        - Get all testimonials
POST   /api/testimonials        - Create testimonial (protected)
PUT    /api/testimonials/:id    - Update testimonial (protected)
DELETE /api/testimonials/:id    - Delete testimonial (protected)
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **httpOnly Cookies** - Secure cookie storage (XSS protection)
- **Password Hashing** - bcryptjs for secure password storage
- **Input Validation** - Zod schemas for request validation
- **Protected Routes** - Authentication middleware for admin operations
- **CORS Configuration** - Controlled cross-origin requests

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (version 14 or higher)
- **MongoDB Atlas account** or local MongoDB instance
- **Git** (optional)

### 1. Clone or Download Project
```bash
# If using Git
git clone <repository-url>
cd journeyhub-admin-main

# Or download and extract the project folder
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install

# Create environment file (optional)
# Create .env file in server folder with:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# PORT=4000

# Start backend server
node index.js
```

**Expected Output:**
```
Server listening on port 4000
MongoDB connected
```

### 3. Frontend Setup

Open a **new terminal** and run:

```bash
# Navigate to main project directory
cd journeyhub-admin-main

# Install frontend dependencies
npm install

# Start development server
npm run dev
```

**Expected Output:**
```
VITE v5.4.19  ready in 500 ms
➜  Local:   http://localhost:8080/
➜  Network: use --host to expose
```

## 🌐 Running the Application

### Start Both Servers

**Terminal 1 (Backend):**
```bash
cd server
node index.js
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

### Access the Application

- **Main Application**: http://localhost:8080/
- **Admin Login**: http://localhost:8080/login?admin=true
- **Admin Signup**: http://localhost:8080/signup?admin=true
- **Admin Dashboard**: http://localhost:8080/dashboard (after login)

### Demo Credentials
```
Email: test@example.com
Password: Test123!
```

## 📁 Project Structure

```
journeyhub-admin-main/
├── public/                     # Static assets
├── server/                     # Backend application
│   ├── models/                 # MongoDB models
│   │   ├── User.js            # User model
│   │   ├── Destination.js     # Destination model
│   │   └── Testimonial.js     # Testimonial model
│   ├── index.js               # Express server
│   ├── validators.js          # Zod validation schemas
│   └── package.json           # Backend dependencies
├── src/                       # Frontend application
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Landing page hero
│   │   └── ...               # Other components
│   ├── pages/                # Page components
│   │   ├── Dashboard.tsx     # Admin dashboard
│   │   ├── Login.tsx         # Login page
│   │   ├── Signup.tsx        # Signup page
│   │   ├── Destinations.tsx  # Destinations management
│   │   └── Testimonials.tsx  # Testimonials management
│   ├── contexts/             # React contexts
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Utility functions
│   └── main.tsx              # App entry point
├── index.html                # HTML template
├── package.json              # Frontend dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎯 Key Features Explained

### Admin Authentication
- Secure signup/login system with admin role
- JWT tokens stored in httpOnly cookies
- Protected routes requiring authentication
- Session management with automatic logout

### Destinations Management
- Create, read, update, delete destinations
- Image URL support with error fallbacks
- Form validation with error handling
- Modal-based editing interface

### Testimonials Management
- Full CRUD operations for customer testimonials
- Star rating system (1-5 stars)
- Avatar support for customer photos
- Professional card-based layout

### User Interface
- Modern, responsive design with Tailwind CSS
- Professional shadcn/ui components
- Form validation with real-time feedback
- Loading states and error handling
- Mobile-friendly responsive layout

## 🔧 Development Scripts

```bash
# Frontend scripts
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Backend scripts
node index.js        # Start server
npm start           # Start server (if npm start script exists)
```

## 🌟 Production Deployment

### Frontend Build
```bash
npm run build
# Dist folder will be generated for deployment
```

### Environment Variables
For production, set these environment variables in your backend:
```
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
PORT=4000
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Backend won't start:**
- Check MongoDB connection string
- Ensure Node.js is installed
- Verify port 4000 is not in use

**Frontend won't start:**
- Run `npm install` to install dependencies
- Check if backend is running on port 4000
- Ensure port 8080 is available

**Database connection issues:**
- Verify MongoDB Atlas connection string
- Check network connectivity
- Ensure database user has proper permissions

**Authentication not working:**
- Clear browser cookies
- Check JWT secret is set
- Verify backend and frontend are running

### Support

For support, please create an issue in the project repository or contact the development team.

---

**Built with ❤️ using modern web technologies**
