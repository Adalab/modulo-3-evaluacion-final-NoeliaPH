const getApiData = () => {
  return fetch(`http://hp-api.herokuapp.com/api/characters`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
          name: character.name,
          species: character.species,
          image: character.image,
          house: character.house,
          alive: character.alive,
          gender: character.gender,
          id: `${character.name}-${character.character}-${index}`,
        };
      });
      return cleanData;
    });
};

export default getApiData;
