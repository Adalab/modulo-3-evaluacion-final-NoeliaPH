const FilterHouse =(props)=>{
    const handleChange =(ev)=>{
        props.handleFilter({
            key:"house",
            value:ev.currentTarget.value,
        });
    }

    return(
    <>
    <label>Selecciona la casa:</label>
    <select onChange ={handleChange} value ={props.filterHouse}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
    </select>
        </>
    );
};

export default FilterHouse;