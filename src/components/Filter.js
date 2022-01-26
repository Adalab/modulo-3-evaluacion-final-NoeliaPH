import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
const Filter = (props) => {
  return (
    <section>
      <form>
        <FilterName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        {/*<label>Busca por personaje:</label>
      <input className="form__input-text" type="text" name="name" id="name" />
      <label>Selecciona la casa:</label>
      <select>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuf">Hufflepuf</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>*/}
        <FilterHouse 
        handleFilter={props.handleFilter}
        filterName={props.filterName}
        />
      </form>
    </section>
  );
};

export default Filter;
