// src/utils/auth.js

// === Пользователи ===
export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

export const removeUser = () => {
  localStorage.removeItem('user');
};

export const getUsers = () => {
  return JSON.parse(localStorage.getItem('users') || '[]');
};

export const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

// === Авторизация ===
export const login = (email, password) => {
  const users = getUsers();
  const foundUser = users.find(u => u.email === email && u.password === password);
  if (foundUser) {
    saveUser(foundUser);
    return true;
  }
  return false;
};

export const register = (username, email, password) => {
  const users = getUsers();
  if (users.some(u => u.email === email)) {
    return false;
  }
  const newUser = { username, email, password, hasPreorder: false }; // 👈 добавили флаг
  users.push(newUser);
  saveUsers(users);
  saveUser(newUser);
  return true;
};

// === Предзаказ ===
export const setPreorder = (email) => {
  const users = getUsers();
  const userIndex = users.findIndex(u => u.email === email);
  if (userIndex !== -1) {
    users[userIndex].hasPreorder = true;
    saveUsers(users);

    // Обновляем текущего пользователя в сессии
    const currentUser = getUser();
    if (currentUser && currentUser.email === email) {
      currentUser.hasPreorder = true;
      saveUser(currentUser);
    }
  }
};

export const hasPreorder = (email) => {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  return user ? !!user.hasPreorder : false;
};