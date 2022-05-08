import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterActor from "./FilterActor";

const Filter = (props) => {
  return (
    <section>
      <form>
        <FilterName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <FilterHouse 
        handleFilter={props.handleFilter}
        filterName={props.filterName}
        />
        <FilterActor
          handleFilter={props.handleFilter}
          filterActor={props.filterActor}
        />
      </form>
    </section>
  );
};

export default Filter;
