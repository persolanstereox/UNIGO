"use client"
import { useState } from "react";
import List from "./List";

const SearchBar = (props) => {

  const [search, setSearch] = useState("");

  let SearchHandler = (e) => {
    setSearch(e.target.value.toLowerCase())
    console.log(e.target.value)
  }


  return (
    <div className="flex">
      <label htmlFor={props.id}>{props.label}</label>
      <input onChange={SearchHandler} type="text" id={props.id} />
      <List searchName={search} data={props.data}/>
    </div>
  );
};

export default SearchBar;
