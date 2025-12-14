// src/Pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Имитация отправки письма
    alert(`На адрес ${email} отправлена инструкция для восстановления пароля.`);
    navigate('/login'); // Перенаправляем обратно на вход
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black border border-white rounded-xl">
      <h1 className="text-2xl mb-6 text-center">Восстановление пароля</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-900 border border-white rounded text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-transparent border-white border-2 text-white py-2 rounded hover:bg-gray-900 hover:border-teal-700 transition"
        >
          Отправить инструкцию
        </button>
      </form>
      <p className="mt-4 text-center">
        Помните пароль? <Link to="/login" className="text-teal-500 hover:underline">Войти</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;