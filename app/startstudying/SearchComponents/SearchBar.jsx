"use client"
import { useState } from "react";
import List from "./List";

const SearchBar = () => {

  const [city, setCity] = useState("");

  let CityHandler = (e) => {
    setCity(e.target.value.toLowerCase())
    console.log(e.target.value)
  }


  return (
    <div className="flex">
      <label htmlFor="cities">City</label>
      <input onChange={CityHandler} type="text" id="cities" />
      <List cityName={city}/>
    </div>
  );
};

export default SearchBar;
