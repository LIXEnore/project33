// src/Components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Перенаправляем на главную после выхода
  };

  return (
    <header className="bg-black rounded-xl m-3 border-white border-solid border-2 fixed w-full z-50">
      <div className="flex justify-between items-center p-4">
        <Link to="/">
          <img src="/Logo_mini.webp" alt="Logo" className="w-20" />
        </Link>

        <nav className="flex space-x-6">
          <Link to="/about">
            <button className="rounded border-white border-solid border-2 text-white text-xl text-center w-48 h-12 mt-2 hover:bg-gray-900 hover:border-teal-700 transition-colors duration-300">
              Об игре
            </button>
          </Link>
          <Link to="/news">
            <button className="rounded border-white border-solid border-2 text-white text-xl text-center w-48 h-12 mt-2 hover:bg-gray-900 hover:border-teal-700 transition-colors duration-300">
              Новости
            </button>
          </Link>
          <Link to="/events">
            <button className="rounded border-white border-solid border-2 text-white text-xl text-center w-48 h-12 mt-2 hover:bg-gray-900 hover:border-teal-700 transition-colors duration-300">
              События
            </button>
          </Link>
          <Link to="/developers">
            <button className="rounded border-white border-solid border-2 text-white text-xl text-center w-48 h-12 mt-2 hover:bg-gray-900 hover:border-teal-700 transition-colors duration-300">
              Разработчик
            </button>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/profile" className="text-white text-xl hover:text-teal-400 transition">
                    👤 {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="rounded border-white border-solid border-2 text-white text-xl text-center w-32 h-12 mt-2 hover:bg-gray-900 hover:border-red-500 duration-300"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="rounded border-white border-solid border-2 text-white text-xl text-center w-32 h-12 mt-2 hover:bg-gray-900 hover:border-teal-700 duration-300">
                  Вход
                </button>
              </Link>
              <Link to="/reg">
                <button className="rounded border-white border-solid border-2 text-white text-xl text-center w-32 h-12 mt-2 hover:bg-gray-900 hover:border-teal-700 duration-300">
                  Регистрация
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
