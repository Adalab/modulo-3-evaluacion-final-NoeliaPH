const getApiData =()=>{
    return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
    .then((response)=> response.json())
    .then((data) => {
        const cleanData = data.map((actor)=>{
            return {
                name: actor.name,
                species: actor.species,
                image: actor.image,
                id:  `${actor.name}  ${actor.actor}`,
            };
        });
    return cleanData;
});
    
};


export default getApiData;