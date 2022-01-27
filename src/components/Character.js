import {Link} from "react-router-dom";
const Character = (props) => {
  const getImage =()=>{
return props.character.image === "" ? "https://via.placeholder.com/210x295/ff3300/666666/?text=HarryPotter":props.character.image;
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
