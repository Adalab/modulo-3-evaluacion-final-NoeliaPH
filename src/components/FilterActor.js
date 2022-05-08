function FilterActor(props) {
  const handleInput = (ev) => {
      props.handleFilter({
    key: "actor",
    value: ev.currentTarget.value,
  });
};
return (
  <>
    <label> Buscar por actor:</label>
    <input
      type="text"
      name="actor"
      value={props.FilterActor}
      onChange={handleInput}
    />
  </>
);
}
export default FilterActor;
