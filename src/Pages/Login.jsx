// src/Pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../utils/auth'; // 👈 Импортируем функцию входа

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      alert(`Добро пожаловать, ${email}!`);
      navigate('/');
    } else {
      alert('Неверный email или пароль.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black border border-white rounded-xl">
      <h1 className="text-2xl mb-6 text-center">Вход</h1>
      <form onSubmit={handleSubmit}>
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
          Войти
        </button>
      </form>
      <p className="mt-4 text-center">
        Нет аккаунта? <Link to="/reg" className="text-teal-500 hover:underline">Зарегистрироваться</Link>
      </p>
      <p className="mt-2 text-center">
        Забыли пароль? <Link to="/forgot-password" className="text-teal-500 hover:underline">Восстановить</Link>
      </p>
    </div>
  );
};

export default Login;