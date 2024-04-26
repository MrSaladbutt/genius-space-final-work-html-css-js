import './sliderCards.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules';
import { useState } from 'react';
import icons from '../images/icons.svg';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SliderCards({ data }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <div className="slider-container">
        <button className="button-prev">
          <svg width="48" height="48">
            <use xlinkHref={`${icons}#icon-arrow-btn-2`} />
          </svg>
        </button>
        <Swiper
          className="slider-wrapper"
          slidesPerView={1}
          spaceBetween={5}
          modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
          navigation={{
            nextEl: '.button-next',
            prevEl: '.button-prev',
          }}
          pagination={{
            el: '.pagination',
            bulletClass: 'pagination__button',
            bulletActiveClass: 'pagination__button--active',
          }}
          grid={{
            rows: 2,
            fill: 'row',
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide
              className="slider-cards__list"
              key={item.id}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {hoverIndex === index ? (
                <div className="more-info">
                  <p>
                    Name: <span> {item.name}</span>
                  </p>
                  <p>
                    Alternate names:{' '}
                    <span>{item.alternate_names.join(', ')}</span>
                  </p>
                  <p>
                    Species: <span> {item.species}</span>
                  </p>
                  <p>
                    Gend: <span> {item.gender}</span>
                  </p>
                  <p>
                    House: <span>{item.house}</span>
                  </p>
                  <p>
                    Date of birth: <span>{item.dateOfBirth}</span>
                  </p>
                  <p>
                    Year of birth: <span>{item.yearOfBirth}</span>
                  </p>
                  <p>
                    Wizard: <span> {item.wizard.toString()}</span>
                  </p>
                  <p>
                    Ancestry: <span>{item.ancestry}</span>
                  </p>
                  <p>
                    Eye colour: <span> {item.eyeColour}</span>
                  </p>
                  <p>
                    Hair colour: <span>{item.hairColour}</span>
                  </p>
                  <p>
                    Wand:
                    <span>
                      {` Wood: ${item.wand.wood}, core: ${item.wand.core}, length: ${item.wand.length} `}
                    </span>
                  </p>
                  <p>
                    Patronus: <span>{item.patronus}</span>
                  </p>
                  <p>
                    Hogwarts student:{' '}
                    <span>{item.hogwartsStudent.toString()}</span>
                  </p>
                  <p>
                    Hogwarts staff: <span>{item.hogwartsStaff.toString()}</span>
                  </p>
                  <p>
                    Actor: <span> {item.actor}</span>
                  </p>
                  <p>
                    Alive: <span> {item.alive.toString()}</span>
                  </p>
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
                    src={item.image}
                    alt={item.name}
                  />
                </article>
              )}
            </SwiperSlide>
          ))}
          <div className="pagination">
            <span className="pagination__button"></span>
            <span className="pagination__button"></span>
            <span className="pagination__button"></span>
          </div>
        </Swiper>
        <button className="button-next">
          <svg width="48" height="48">
            <use xlinkHref={`${icons}#icon-arrow-btn-1`} />
          </svg>
        </button>
      </div>
      <Link to="/" className="to-main-menu-btn">
        <div className="to-main-menu-content">
          <svg className="svg" width="24" height="14">
            <use xlinkHref={`${icons}#icon-card-arrow`} />
          </svg>
          <span>До головної сторінки</span>
        </div>
      </Link>
    </>
  );
}

export default SliderCards;
