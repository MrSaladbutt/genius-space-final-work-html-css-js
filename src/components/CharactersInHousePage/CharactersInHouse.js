import allCharacters from '../../data/allcharacters.json';
import SliderCards from '../SliderCards';
import gryffindor from '../../images/gryffindor.png';
import slytherin from '../../images/slytherin.png';
import hufflepuff from '../../images/hufflepuff.png';
import ravenclaw from '../../images/ravenclaw.png';
import './../CharactersInHousePage/charactersInHouse.css';
import { useState } from 'react';
function CharactersInHouse() {
  const gryffData = allCharacters.filter(item => item.house === 'Gryffindor');
  const slythData = allCharacters.filter(item => item.house === 'Slytherin');
  const ravenData = allCharacters.filter(item => item.house === 'Ravenclaw');
  const huffData = allCharacters.filter(item => item.house === 'Hufflepuff');

  const [charactersData, setcharactersData] = useState(allCharacters);

  const gryffindorHandler = () => {
    setcharactersData(gryffData);
  };

  const slytherinHandler = () => {
    setcharactersData(slythData);
  };

  const ravenclawData = () => {
    setcharactersData(ravenData);
  };

  const hufflepuffData = () => {
    setcharactersData(huffData);
  };

  return (
    <section className="pages">
      <div className="container">
        <h2 className="title pages__title">
          Персонажі в <br />
          певному будинку
        </h2>

        <div className="characters-filter">
          <button className="filter-buttons" onClick={gryffindorHandler}>
            <img src={gryffindor} alt="gryffindor" /> Gryffindor
          </button>
          <button className="filter-buttons" onClick={slytherinHandler}>
            <img src={slytherin} alt="slytherin" />
            Slytherin
          </button>
          <button className="filter-buttons" onClick={ravenclawData}>
            <img src={ravenclaw} alt="ravenclaw" />
            Ravenclaw
          </button>
          <button className="filter-buttons" onClick={hufflepuffData}>
            <img src={hufflepuff} alt="hufflepuff" />
            Hufflepuff
          </button>
        </div>
        <SliderCards data={charactersData} />
      </div>
    </section>
  );
}

export default CharactersInHouse;
