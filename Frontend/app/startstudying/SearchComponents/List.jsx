"use client";
// import data from "test-data/cities.json";

function List(props) {
  
  const filterSearches = props.data.filter((search) => {
    if (props.searchName === "") {
      
      return;
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
                
                onClick={(e) => {
                  props.listButtonsFunctionality(e)
                }}
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
