import "../styles/App.scss";
import { useState, useEffect } from 'react';
//import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import getApiData from "../services/apiData";
import CharactersList from "./CharacterList";
import Filters from "./Filter";

function App() {

  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  //const [FilterHouse, setFilterHouse] = useState("");

  useEffect(()=>{
getApiData().then((charactersData)=>{
  setCharacters(charactersData);
});
}, []);

const handleFilter =(data)=>{
  setFilterName(data)
}
const filteredCharacteres = characters.filter((character) =>{
  return character.name.toLowerCase().includes(filterName.toLowerCase());
})

  return (
    <div>
      <header>
        <h1>HARRY POTTER</h1>
      </header>
      <div>
        <Filters handleFilter ={handleFilter} filterName={filterName}/>
        {/*<section>
          <form>
            <label>Busca por personaje:</label>
            <input
              className="form__input-text"
              type="text"
              name="name"
              id="name"
            />
            <label>Selecciona la casa:</label>

            <select>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Hufflepuf">Hufflepuf</option>
              <option value="Ravenclaw">Ravenclaw</option>
              <option value="Slytherin">Slytherin</option>
            </select>
          </form>
        </section>*/}
        <section>
        <ul>
        <CharactersList characters={filteredCharacteres}/>
        </ul>
        {/*<ul>
          <li>
            <a href="url">
              <img 
              src="url" 
              alt="Foto de ..." 
              title="Foto de ..." />
              <h4>Nombre</h4>
              <p>Humano/Gigante...</p>
            </a>
          </li>
          
        </ul>*/}
        </section>
      </div>
    </div>
  );
}

export default App;
