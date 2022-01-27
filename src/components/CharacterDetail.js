import { Link } from "react-router-dom";
import "../styles/App.scss";
import CharacterError from "./CharacterError";
function CharacterDetail(props) {
  const foundError = ()=>{
    if (!props.character){
      return <CharacterError/>;
    } else {
      return (<article>
      <Link to="/">Volver</Link>
      <img
        src={getImage()}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h4>Nombre: {props.character.name} </h4>
      <p>Estatus: {getStatus()}</p>
      <p>Especie: {getSpecie()}</p>
      <p>Género: {getGender()}</p>
      <p>Casa: {props.character.house}</p>
    </article>)
    }
  };
    const getImage =()=>{
        return props.character.image === "" ? "https://i.pinimg.com/736x/9c/2b/39/9c2b39efc4060dfcf659fcf0e8e4b905.jpg":props.character.image;
          };
  const getStatus = () => {
    return props.character.alive === true ? "Vivo" : "Fallecido";
  };
  const getGender = () => {
    return props.character.gender === "female" ? "Mujer" : "Hombre";
  };
  const getSpecie = () => {
    if (props.character.species === "human") {
      return "Humano";
    } else if (props.character.species === "half-giant") {
      return "Mitad Gigante";
    } else if (props.character.species === "werewolf") {
      return "Hombre Lobo";
    } else if (props.character.species === "half-human") {
      return "Mitad Humano";
    } else if (props.character.species === "ghost") {
      return "Fantasma";
    } else if (props.character.species === "vampire") {
      return "Vampiro";
    } else if (props.character.species === "centaur") {
      return "Centauro";
    } else if (props.character.species === "goblin") {
      return "Duende";
    } else if (props.character.species === "poltergueist") {
      return "Poltergeist";
    } else if (props.character.species === "house-elf") {
      return "Elfo Doméstico";
    } else if (props.character.species === "cat") {
      return "Gato";
    } else if (props.character.species === "owl"){
      return "Buho";
    };
  };
  return (
    foundError()
  );
}
export default CharacterDetail;
