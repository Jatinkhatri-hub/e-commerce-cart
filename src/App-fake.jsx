/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useNavigate, useParams } from "react-router";
// Create Authentication Context
const AuthContext = createContext(null);

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Login Component
const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <button 
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Log In
      </button>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Navigation Component
const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-blue-500">Home</Link></li>
        <li><Link to="/user/123" className="text-blue-500">User Profile</Link></li>
        <li><Link to="/dashboard" className="text-blue-500">Dashboard</Link></li>
        {!isAuthenticated ? (
          <li><Link to="/login" className="text-blue-500">Login</Link></li>
        ) : (
          <li>
            <button 
              onClick={handleLogout}
              className="text-blue-500"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

// Other components remain the same
const DashboardLayout = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li><Link to="/dashboard/profile" className="text-blue-500">Profile</Link></li>
          <li><Link to="/dashboard/settings" className="text-blue-500">Settings</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

const UserProfile = () => {
  const { userId } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">User Profile</h2>
      <p>Viewing user ID: {userId}</p>
    </div>
  );
};

const Profile = () => (
  <div>
    <h3 className="text-lg font-bold">Profile Page</h3>
    <p>Welcome to your profile!</p>
  </div>
);

const Settings = () => (
  <div>
    <h3 className="text-lg font-bold">Settings Page</h3>
    <p>Manage your settings here</p>
  </div>
);

// Main App Component
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<h1 className="p-4 text-2xl">Home Page</h1>} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<h2>Welcome to Dashboard</h2>} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;