import {Link} from "react-router-dom";
const Character = (props) => {
  const getImage =()=>{
return props.character.image === "" ? "https://i.pinimg.com/736x/9c/2b/39/9c2b39efc4060dfcf659fcf0e8e4b905.jpg":props.character.image;
  };
  return (
    
   <Link to={`/character/${props.character.id}`}>
      
        <img 
        src={getImage()} 
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`} />
        <h4>{props.character.name} </h4>
        <p>{props.character.species}</p>
      
      </Link> 
    
  );
};

export default Character;
