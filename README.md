# Travel Agency Admin Panel

A comprehensive full-stack travel agency admin dashboard for managing destinations and customer testimonials. Built with modern web technologies including React, TypeScript, Node.js, and MongoDB, featuring secure authentication, CRUD operations, and a professional user interface.

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
- **Vite 5.4.19** - Fast build tool and development server (runs on port 5173)
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
- **npm**, **yarn**, or **bun** (package manager)
- **MongoDB Atlas account** or local MongoDB instance
- **Git** (optional)

### 1. Clone or Download Project
```bash
# If using Git
git clone <repository-url>
cd "Travel Agency"

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
cd "Travel Agency"

# Install frontend dependencies (choose one)
npm install          # using npm
# yarn install       # using yarn  
# bun install        # using bun

# Start development server (choose one)
npm run dev          # using npm
# yarn dev           # using yarn
# bun run dev        # using bun
```

**Expected Output:**
```
VITE v5.4.19  ready in 500 ms
➜  Local:   http://localhost:5173/
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



### Demo Credentials
```
Email: test@example.com
Password: For password DM to me.
```

## 📁 Project Structure

```
Travel Agency/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── server/                     # Backend application
│   ├── models/                 # MongoDB models
│   │   ├── User.js            # User model
│   │   ├── Destination.js     # Destination model
│   │   └── Testimonial.js     # Testimonial model
│   ├── index.js               # Express server
│   ├── validators.js          # Zod validation schemas
│   └── package.json           # Backend dependencies
├── src/                       # Frontend application
│   ├── assets/                # Images and static files
│   │   ├── dubai-burj-khalifa.jpg
│   │   ├── hero-airplane-wing.jpg
│   │   ├── paris-eiffel-tower.jpg
│   │   └── taj-mahal-agra.jpg
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Landing page hero
│   │   ├── AboutSection.tsx  # About section
│   │   ├── DestinationsSection.tsx # Destinations showcase
│   │   ├── TestimonialsSection.tsx # Testimonials display
│   │   ├── PartnerLogos.tsx  # Partner logos
│   │   └── Footer.tsx        # Footer component
│   ├── pages/                # Page components
│   │   ├── Dashboard.tsx     # Admin dashboard
│   │   ├── Index.tsx         # Main landing page
│   │   ├── TravelLanding.tsx # Travel landing component
│   │   ├── Login.tsx         # Login page
│   │   ├── Signup.tsx        # Signup page
│   │   ├── Destinations.tsx  # Destinations management
│   │   ├── Destinations-new.tsx # New destinations page
│   │   ├── Testimonials.tsx  # Testimonials management
│   │   ├── Testimonials-new.tsx # New testimonials page
│   │   └── NotFound.tsx      # 404 page
│   ├── contexts/             # React contexts
│   │   └── AuthContext.tsx   # Authentication context
│   ├── hooks/                # Custom hooks
│   │   ├── use-mobile.tsx    # Mobile detection
│   │   └── use-toast.ts      # Toast notifications
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # Common utilities
│   └── main.tsx              # App entry point
├── index.html                # HTML template
├── package.json              # Frontend dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # App TypeScript config
├── tsconfig.node.json        # Node TypeScript config
├── eslint.config.js          # ESLint configuration
├── postcss.config.js         # PostCSS configuration
├── components.json           # shadcn/ui components config
├── bun.lockb                 # Bun lock file
├── test-auth.js              # Authentication test file
└── README.md                 # Project documentation
```

## 🎯 Key Features Explained

### Admin Authentication
- Secure signup/login system with admin role verification
- JWT tokens stored in httpOnly cookies for security
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

### Frontend Scripts
```bash
# Development
npm run dev          # Start development server (port 5173)
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run server       # Install and start backend server

# Alternative with yarn
yarn dev             # Start development server
yarn build           # Build for production
yarn lint            # Run ESLint

# Alternative with bun
bun run dev          # Start development server
bun run build        # Build for production
bun run lint         # Run ESLint
```

### Backend Scripts
```bash
# In the server directory
node index.js        # Start server (port 4000)
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



## **Demonstration video**: 

<a href="https://youtu.be/9et7klF9In0">Click me</a>





<br>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">


## <b>Connect with Me at</b>
<br>
<div align='center'>





<a href="https://www.facebook.com/ashak.odree/" target="blank">
<img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="ashakuzzaman odree" height="30" width="40" /></a>


<a href="https://www.instagram.com/ashak_odree/" target="blank">
<img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="ashak_odree" height="30" width="40" /></a>


<a href="https://www.linkedin.com/in/ashak-odree/" target="blank">
<img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ashakuzzaman odree" height="30" width="40" /></a>


<a href="https://twitter.com/ashak_odree" target="blank">
<img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="@ashak_odree" height="30" width="40" /></a>
	
<a href="https://www.youtube.com/channel/UC8_-lmRrTG990jkiQ7pFsUw" target="blank">
<img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="Ashak Odree" height="30" width="40" /></a>	
