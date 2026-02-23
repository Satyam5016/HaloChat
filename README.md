# 🌌 HaloChat

**HaloChat** is a modern, real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and powered by Socket.io for instantaneous messaging. It features a sleek UI with Tailwind CSS v4, real-time online status indicators, and secure authentication.

---

## ✨ Features

- **Real-time Messaging**: Instant message delivery using Socket.io.
- **Online Presence**: Real-time indicators showing who's currently online.
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing.
- **Profile Management**: User profiles with image upload support (Cloudinary integration).
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS v4.
- **Global Search**: Find and chat with any registered user.
- **Toast Notifications**: Interactive feedback using `react-hot-toast`.

---

## 🚀 Tech Stack

### Frontend
- **React 19**: Modern UI library.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS v4**: Utility-first CSS framework with the latest features.
- **React Router 7**: Declarative routing for the application.
- **Socket.io-client**: Real-time communication on the client side.
- **Axios**: Promise-based HTTP client for API requests.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express 5**: Fast, unopinionated, minimalist web framework.
- **MongoDB & Mongoose**: Flexible NoSQL database and object modeling.
- **Socket.io**: Real-time, bidirectional, event-based communication.
- **Cloudinary**: Cloud-based image and video management.
- **JWT (JsonWebToken)**: Secure transmission of information between parties.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Cloudinary Account (for image uploads)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Satyam5016/HaloChat.git
   cd HaloChat
   ```

2. **Backend Setup**:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NODE_ENV=development
   ```

3. **Frontend Setup**:
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file in the `client` directory:
   ```env
   VITE_API_URL=http://localhost:8000/api
   ```

### Running Locally

1. **Start the Backend**:
   ```bash
   cd server
   npm run server
   ```

2. **Start the Frontend**:
   ```bash
   cd client
   npm run dev
   ```

The application should now be running at `http://localhost:5173`.

---

## 📁 Project Structure

```
HaloChat/
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── context/     # State management
│   │   └── pages/       # Page components
├── server/           # Node.js backend
│   ├── controllers/  # API route handlers
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API endpoints
│   └── lib/          # Utilities and database connection
└── README.md         # You are here!
```

---

## 🌐 Deployment

The project is configured for easy deployment on **Vercel**. 
- Backend: Uses `vercel.json` for serverless deployment.
- Frontend: Optimized Vite build targets.

---

## 📄 License

This project is licensed under the ISC License.

---

Developed with ❤️ by [Satyam Yadav](https://github.com/Satyam5016)
