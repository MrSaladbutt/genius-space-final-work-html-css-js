import HogwartsStudents from './../../images/hogwarts-students.png';
import HogwartsStaff from './../../images/hogwarts-staff.png';
import CharacterInHouse from './../../images/characters-in-house.png';
import './../MainPageCards/mainPageCards.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function MainPageCards() {
  const [isShowComp, setIsShowComp] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowComp(true));
  }, []);

  return (
    <div className={`main-cards ${isShowComp ? 'main-cards--visible' : ''}`}>
      <ul className="main-cards__list">
        <li>
          <article className="main-cards__article">
            <img
              className="main-cards__article__images"
              src={HogwartsStudents}
              alt="hogwarts-students"
            />
            <Link to="/students" className="main-cards__article__button">
              Студенти Гоґвортсу
            </Link>
          </article>
        </li>
        <li>
          <article className="main-cards__article">
            <img
              className="main-cards__article__images"
              src={HogwartsStaff}
              alt="hogwarts-staff"
            />
            <Link to="/staff" className="main-cards__article__button">
              Співробітники Гоґвортсу
            </Link>
          </article>
        </li>
        <li>
          <article className="main-cards__article">
            <img
              className="main-cards__article__images"
              src={CharacterInHouse}
              alt="characters-in-house"
            />
            <Link to="/characters" className="main-cards__article__button">
              Персонажі в певному будинку
            </Link>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default MainPageCards;
