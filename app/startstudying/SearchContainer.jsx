"use client";
import Divider from "./SearchComponents/divider";
import SearchBar from "./SearchComponents/SearchBar";
import TitleButtonContainer from "./SearchComponents/buttons/TitleButtonsContainer";
import EnglishLevelButtonContainer from "./SearchComponents/buttons/EnglishLevelButtonsContainer";
import Submit from "./SearchComponents/buttons/Submit";
import cities from "test-data/cities.json";
import subjects from "test-data/subjects.json";
import { useState } from "react";

const SearchContainer = () => {
  const [search, setSearch] = useState("");

  //   let SearchHandler = (e) => {
  //     setSearch(e.target.value.toLowerCase())
  //     // props.onChange();
  //     console.log(e.target.value)
  //   }

  const [formData, setFormData] = useState({
    cities: "",
    subjects: "",
  });

  
  const handleFormData = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    
    setSearch(e.target.value.toLowerCase());
    
    console.log(e.target.value);

    // setSearch({
    //     [e.target.name]: e.target.value.toLowerCase()
    // });
   

  };



  const getFormData = (e) => {
    e.preventDefault();
    
    console.log(e.target.closest('form'))
    console.log(formData);
  };

  return (
    <div>
      <form>
        <Divider />
        <SearchBar
          data={cities}
          label={"Cities"}
          id={"cities"}
          onChange={handleFormData}
          search={search}
        />
        <Divider />
        <TitleButtonContainer />
        <Divider />
        <SearchBar
          data={subjects}
          label={"Desired study subjects"}
          id={"subjects"}
          onChange={handleFormData}
          search={search}
        />
        <Divider />
        <EnglishLevelButtonContainer />
        <Divider />
        <Submit onClick={getFormData} />
      </form>
    </div>
  );
};
export default SearchContainer;
