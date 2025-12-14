// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // 👈 импорт
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Events from './Pages/Events';
import Developers from './Pages/Developers';
import Login from './Pages/Login';
import Reg from './Pages/Reg';
import ForgotPassword from './Pages/ForgotPassword';
import Profile from './Pages/Profile';

function App() {
  return (
    <AuthProvider> {/* 👈 обёртка */}
      <Router>
        <div className="min-h-screen">
          <Header />
          <main className="pt-28 pb-10 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reg" element={<Reg />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <footer className="bg-black border-t border-white pt-6 text-center">
            © 2025 NordLightin Studio — Все права защищены.
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;