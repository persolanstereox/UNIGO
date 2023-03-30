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
  const [focus, setFocus] = useState(false);

  const [formData, setFormData] = useState({
    cities: "",
    subjects: "",
    title: "",
    engLevel: "",
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

  const handleFormDataByButtons = (e) => {
    e.preventDefault();
    let input = e.target.closest("ul").previousSibling;
    input.value = e.target.value;

    setFormData({
      ...formData,
      [input.name]: e.target.value,
    });

    // setFocus(true)

    // props.removeList();
  };

  const handleButtonsValue = (e) => {
    e.preventDefault();
    let button = e.target.closest("button");

    setFormData({
      ...formData,
      [button.name]: button.value,
    });
  };

  const getFormData = (e) => {
    e.preventDefault();

    console.log(e.target.closest("form"));
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
          listButtonsFunctionality={handleFormDataByButtons}
          // settingFocus={setFocus}
          search={search}
        />
        <Divider />
        <TitleButtonContainer onClick={handleButtonsValue} />
        <Divider />
        <SearchBar
          data={subjects}
          label={"Desired study subjects"}
          id={"subjects"}
          onChange={handleFormData}
          listButtonsFunctionality={handleFormDataByButtons}
          search={search}
        />
        <Divider />
        <EnglishLevelButtonContainer onClick={handleButtonsValue} />
        <Divider />
        <Submit onClick={getFormData} />
      </form>
    </div>
  );
};
export default SearchContainer;
