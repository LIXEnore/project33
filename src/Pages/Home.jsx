// src/Pages/Home.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { setPreorder } from '../utils/auth';

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePreorder = () => {
    if (!user) {
      alert('Пожалуйста, войдите или зарегистрируйтесь, чтобы оформить предзаказ.');
      navigate('/login');
      return;
    }

    // Имитация оформления предзаказа
    setPreorder(user.email);
    alert('✅ Предзаказ успешно оформлен! Спасибо за поддержку проекта.');
  };

  return (
    <div className="text-center">
      {/* Логотип */}
      <div className="mb-10">
        <img src="/Logo.webp" alt="Far Home" className="mx-auto w-1/2 md:w-1/3" />
      </div>

      {/* Описание */}
      <div className="text-white text-xl mb-10 max-w-4xl mx-auto leading-relaxed">
        К вашему представлению игра, в которой вам предстоит быть человеком или, возможно, другим разумным существом:
        доставляющим груз в любое место, исследующим неизведанные места, куда никто и никогда не ступал,
        защищающим свои интересы и собственную жизнь, торгующим различными эксклюзивными вещами и артефактами,
        найденными в далёких уголках мира — всё это в большой вселенной...
      </div>

      {/* Галерея изображений */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        <img src="/planet1.webp" alt="Планета 1" className="border-white border-solid border-2 w-full h-auto" />
        <img src="/planet2.webp" alt="Планета 2" className="border-white border-solid border-2 w-full h-auto" />
        <img src="/ship11.webp" alt="Корабль 1" className="border-white border-solid border-2 w-full h-auto" />
        <img src="/ship12.webp" alt="Корабль 2" className="border-white border-solid border-2 w-full h-auto" />
      </div>

      {/* Призыв к действию */}
      <div className="mt-10">
        <button
          onClick={handlePreorder}
          className="bg-transparent border-white border-2 text-white px-8 py-3 rounded-lg hover:bg-gray-900 hover:border-yellow-700 transition"
        >
          Сделать предзаказ
        </button>
      </div>
    </div>
  );
};

export default Home;
