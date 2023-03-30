"use client";
import { useState } from "react";
import List from "./List";

const SearchBar = (props) => {
  // const [search, setSearch] = useState("");

  // let SearchHandler = (e) => {
  //   setSearch(e.target.value.toLowerCase())
  //   // props.onChange();
  //   console.log(e.target.value)
  // }

  const [focus, setFocus] = useState(false);

  const focusHandler = () => {
    setFocus(true)
  }

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={props.onChange}
        onFocus={focusHandler}
        // onBlur={() => setFocus(false)}
        type="text"
        id={props.id}
        name={props.id}
        placeholder="Search"
        className=" block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300"
        
      />
      <List
        searchName={props.search}
        data={props.data}
        focus={focus}
        removeList={() => setFocus(false)}
      />
    </div>
  );
};

export default SearchBar;
