"use client";
// import data from "test-data/cities.json";

function List(props) {
  // const GiveButtonValue = (e) => {
  //   e.preventDefault();
  //   e.target.closest("ul").previousSibling.value = e.target.value;
  //   console.log(e.target.closest("ul").previousSibling);
  //   console.log(e.target.closest("ul").previousSibling.value);

  //   props.removeList();
  // };
  // const stateHandler = () => {
  //   props.focusState(true);
  // }

  const filterSearches = props.data.filter((search) => {
    if (props.searchName === "") {
      return search;
    } else {
      return search.name.toLowerCase().includes(props.searchName);
    }
  });

  return (
    <>
      {props.focus && (
        <ul className="h-auto bg-slate-300 " >
          {filterSearches.map((search) => (
            <li className="p-1.5 hover:bg-sky-700" key={search.id}>
              <button
                onClick={props.listButtonsFunctionality}
                value={search.name}
                name={search.type}
              >
                {search.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default List;
