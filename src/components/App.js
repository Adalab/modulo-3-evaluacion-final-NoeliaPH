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
  const [filterActor, setFilterActor] = useState("");

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
    } else if (data.key === "actor"){
      setFilterActor(data.value)
    }
  };
  const filteredCharacteres = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return character.house === filterHouse;
    })
    .filter((character)=>{
      return character.actor.toLowerCase().includes(filterActor.toLowerCase());
    })
    ;
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
        <h1 className="h1">HARRY POTTER</h1>
      </header>
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <div className="filters">
              <Filters 
                handleFilter={handleFilter}
                filterName={filterName}
                filterHouse={filterHouse}
                filterActor={filterActor}
              /> 
              <section>
                <ul>
                  <CharactersList characters={filteredCharacteres} />
                </ul>
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
