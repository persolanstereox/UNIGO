// import data from "test-data/cities.json";

function List(props) {
  const filterSearches = props.data.filter((search) => {
    if (props.searchName === "") {
      return search;
    } else {
      return search.name.toLowerCase().includes(props.searchName);
    }
  });

  return (
    <ul>
      {filterSearches.map((search) => (
        <li key={search.id}>{search.name}</li>
      ))}
    </ul>
  );
}
export default List;
