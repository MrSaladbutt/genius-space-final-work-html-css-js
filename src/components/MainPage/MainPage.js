import './mainPage.css';
import MainPageCards from './../MainPageCards/MainPageCards';
import { useState } from 'react';

function MainPage() {
  const [cards, setCards] = useState('');

  const handleClick = () => {
    setCards(<MainPageCards />);
  };

  return (
    <section className="main">
      <div className="container">
        <div className="main__container">
          <h1 className="main__title title">
            Ласкаво просимо у світ Гаррі Поттера
          </h1>
          <button className="main__button" onClick={handleClick}>
            Показати всіх персонажів
          </button>
        </div>
        {cards}
      </div>
    </section>
  );
}

export default MainPage;
