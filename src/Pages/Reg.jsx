// src/Pages/Reg.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/auth'; // 👈 Импортируем функцию регистрации

const Reg = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(username, email, password)) {
      alert(`Регистрация прошла успешно! Добро пожаловать, ${username}!`);
      navigate('/'); // После регистрации переходим на главную
    } else {
      alert('Пользователь с таким email уже существует.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black border border-white rounded-xl">
      <h1 className="text-2xl mb-6 text-center">Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Имя пользователя</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 bg-gray-900 border border-white rounded text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-900 border border-white rounded text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-900 border border-white rounded text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-transparent border-white border-2 text-white py-2 rounded hover:bg-gray-900 hover:border-teal-700 transition"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="mt-4 text-center">
        Уже есть аккаунт? <Link to="/login" className="text-teal-500 hover:underline">Войти</Link>
      </p>
    </div>
  );
};

export default Reg;