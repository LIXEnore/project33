// src/Pages/Profile.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { hasPreorder } from '../utils/auth';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [preorderStatus, setPreorderStatus] = useState(false);

  useEffect(() => {
    if (user) {
      setPreorderStatus(hasPreorder(user.email));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-center text-white">
        <h1 className="text-3xl mb-4">Профиль</h1>
        <p>Пожалуйста, <a href="/login" className="text-teal-500 hover:underline">войдите</a>, чтобы увидеть свой профиль.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-black border border-white rounded-xl text-white">
      <h1 className="text-3xl mb-6 text-center">Ваш профиль</h1>

      <div className="space-y-4">
        <div>
          <strong>Имя пользователя:</strong> {user.username}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Статус предзаказа:</strong>{' '}
          {preorderStatus ? (
            <span className="text-green-500 font-semibold">✅ Оформлен</span>
          ) : (
            <span className="text-yellow-500">⏳ Не оформлен</span>
          )}
        </div>
      </div>

      {!preorderStatus && (
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block bg-transparent border-yellow-500 border-2 text-yellow-500 px-6 py-2 rounded hover:bg-yellow-900 transition"
          >
            Перейти к предзаказу
          </a>
        </div>
      )}
    </div>
  );
};

export default Profile;