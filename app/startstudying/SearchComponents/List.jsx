import data from "test-data/cities.json";

function List(props) {
  const filterCities = data.filter((city) => {
    if (props.cityName === "") {
      return city;
    } else {
      return city.text.toLowerCase().includes(props.cityName);
    }
  });

  return (
    <ul>
      {filterCities.map((city) => (
        <li key={city.id}>{city.text}</li>
      ))}
    </ul>
  );
}
export default List;
