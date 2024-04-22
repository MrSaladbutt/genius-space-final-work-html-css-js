import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Card({ data, icons }) {
  const [hover, setHover] = useState(false);

  const onMouseEnterHandler = () => {
    setHover(true);
  };

  const onMouseLeaveHandler = () => {
    setHover(false);
  };
  return (
    <div>
      {data.map(item =>
        item.house ? (
          <SwiperSlide
            className="slider-cards__list"
            key={item.id}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            {hover ? (
              <div className="more-info">
                <p>Name: {item.name}</p>
                <p>Alternate names: {item.alternate_names} </p>
                <p>Species:{item.name}</p>
                <p>Gend:{item.name}</p>
                <p>House:{item.name}</p>
                <p>Date of birth:{item.name}</p>
                <p>Year of birth:{item.name}</p>
                <p>Year of birth:{item.name}</p>
                <p>Wizard:{item.name}</p>
                <p>Ancestry:{item.name}</p>
                <p>Eye colour:{item.name}</p>
                <p>Hair colour:{item.name}</p>
                <p>Wand:{item.name}</p>
                <p>Patronus:{item.name}</p>
                <p>Hogwarts student:{item.name}</p>
                <p>Hogwarts staff:{item.name}</p>
                <p>Actor:{item.name}</p>
                <p>Alive:{item.name} </p>
              </div>
            ) : (
              <article className="slider-cards__article">
                <div className="character-info">
                  <h3 className="slider-cards__title">{item.name}</h3>
                  <div className="slider-cards__info">
                    {item.alternate_names[0] ? (
                      <p className="slider-cards__text">
                        {item.alternate_names[0]}
                      </p>
                    ) : (
                      ''
                    )}
                    <p className="slider-cards__text">{item.house}</p>
                    <p className="slider-cards__text">{item.dateOfBirth}</p>
                  </div>
                  <span className="slider-cards__span">
                    Більше інформації
                    <svg className="svg" width="24" height="14">
                      <use xlinkHref={`${icons}#icon-card-arrow`} />
                    </svg>
                  </span>
                </div>
                <img
                  className="slider-cards__image"
                  src={item.image ? item.image : ''}
                  alt={item.name}
                />
              </article>
            )}
          </SwiperSlide>
        ) : (
          ''
        ),
      )}
    </div>
  );
}

export default Card;
