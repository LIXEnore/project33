import React from 'react';

const About = () => {
  return (
    <div className="mx-auto w-1/2 md:w-1/3">
      <img className='' src="/Logo.webp" alt="" />
      <h1 className="text-3xl mb-4">Об игре</h1>
      <p className="max-w-2xl mx-auto">
        Far Home — это открытая вселенная, где вы можете стать кем угодно: торговцем, исследователем, воином или дипломатом.
        Ваш выбор определяет ваш путь.
      </p>
    </div>
  );
};

export default About;