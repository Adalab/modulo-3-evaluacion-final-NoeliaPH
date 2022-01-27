import Character from "./Character";
import CharacterError from "./CharacterError";

function CharacterList(props) {
  const characterElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <Character character={character} />
        {/*<a href="url">
          <img 
              src="url" 
              alt="Foto de ..." 
              title="Foto de ..." />
          <h4>Nombre</h4>
          <p>Humano/Gigante...</p>
        </a>*/}
      </li>
    );
  });
  const foundError = ()=>{
    if (props.characters.length === 0){
      return <CharacterError/>;
    } else {
      return characterElements;
    }
  }

  return (
    <section>
      <ul>{foundError()}</ul>
    </section>
  );
}

export default CharacterList;
