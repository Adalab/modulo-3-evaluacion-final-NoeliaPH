import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import getApiData from "../services/apiData";
import CharactersList from "./CharacterList";
import Filters from "./Filter";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "house") {
      setFilterHouse(data.value);
    }
  };
  const filteredCharacteres = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return character.house === filterHouse;
    });
  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;
    const foundCharacter = characters.find(
      (character) => character.id === routeId
    );
    console.log(routeId);
    return <CharacterDetail character={foundCharacter} />;
  };
  return (
    <div>
      <header>
        <h1>HARRY POTTER</h1>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <div>
              <Filters
                handleFilter={handleFilter}
                filterName={filterName}
                filterHouse={filterHouse}
              />
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
                  <CharactersList characters={filteredCharacteres} />
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
          </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          ></Route>
        </Switch>
      </main>
      <footer>
        <small>&copy; 2022 Noe 😃 </small>
      </footer>
    </div>
  );
}

export default App;
