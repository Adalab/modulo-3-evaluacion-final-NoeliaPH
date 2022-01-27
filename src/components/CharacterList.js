import Character from "./Character";


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
  return (
    <section>
      <ul>{characterElements}</ul>
    </section>
  );
}

export default CharacterList;
