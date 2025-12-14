// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { getUser, removeUser } from '../utils/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const logout = () => {
    removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};