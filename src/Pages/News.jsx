import React from 'react';

const News = () => {
  return (
    <div className="text-center">
      <img className='mx-auto w-1/2 md:w-1/3' src="/Logo.webp" alt="" />
      <h1 className="text-3xl mb-4">Новости</h1>
      <h2 className='text-3xl mb-4'>Пототип GENPlanet уже готов!</h2>
      <p className="max-w-2xl mx-auto">
        С большим удовольствие хотим заявить о том что первый прототип "GENPlanet" наша собственная разработак которая поможет
        на очень быстро создавать небесные тела разного размера, с разным рельефом и разным типом самой планеты.
      </p>
    </div>
  );
};

export default News;