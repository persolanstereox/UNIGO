"use client";
/// External Libraries
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/// Components
import Divider from "./SearchComponents/UI/Divider";
import SearchBar from "./SearchComponents/SearchBar";
import FormButtonsContainer from "./FormButtonsContainer";
import Submit from "./SearchComponents/UI/buttons/Submit";
import Loader from "./SearchComponents/UI/Loader";

/// Data
import cities from "@/Frontend/test-data/cities.json";
import interests from "@/Frontend/test-data/subjects.json";
import titles from "@/Frontend/test-data/titles.json";
import FetchContext from "./FetchContext";

const SearchContainer = () => {
  const [citiesSearch, setCitiesSearch] = useState("");
  const [interestsSearch, setInterestsSearch] = useState("");
  const [citiesListFocus, setCitiesFocus] = useState(false);
  const [subjectsListFocus, setSubjectsFocus] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const FetchCtx = useContext(FetchContext);

  const [formData, setFormData] = useState({
    cities: [],
    interests: [],
    title: "",
  });

  const handleCitiesInput = (e) => {
    setCitiesSearch(e.target.value.toLowerCase());
  };

  const handleInterestsInput = (e) => {
    setInterestsSearch(e.target.value.toLowerCase());
  };

  const handleFormDataByButtons = (e) => {
    e.stopPropagation();
    e.preventDefault();

    let input = e.target.closest("ul").previousSibling.lastElementChild;
    input.value = e.target.value;

    if ([...formData[input.name]].length < 5) {
      setFormData({
        ...formData,
        [input.name]: new Set([...formData[input.name], e.target.value]),
      });
    }

    input.value = "";

    console.log(formData);
    console.log(formData[input.name]);
  };

  const removeChoosenElement = (e) => {
    e.preventDefault();
    let input = e.target.closest("div").parentElement.nextElementSibling;
    let choosenElementValue = e.target.parentElement.value;

    setFormData((prevFormData) => {
      const updatedData = { ...prevFormData };
      if (updatedData[input.name].has(choosenElementValue)) {
        updatedData[input.name].delete(choosenElementValue);
      }
      return updatedData;
    });
  };

  const handleButtonsValue = (e) => {
    e.preventDefault();
    let button = e.target.closest("button");

    setFormData({
      ...formData,
      [button.name]: button.value,
    });

    setActiveButton(button.value);
  };

  return (
    <>
      <form className=" ">
        <Divider />
        <SearchBar
          data={cities}
          formData={formData.cities}
          removeChoosenElement={removeChoosenElement}
          label={"Cities"}
          id={"cities"}
          onChange={handleCitiesInput}
          listButtonsFunctionality={handleFormDataByButtons}
          focusState={setCitiesFocus}
          focus={citiesListFocus}
          search={citiesSearch}
        />
        <Divider />
        <FormButtonsContainer
          onClick={handleButtonsValue}
          data={titles}
          active={activeButton}
        />
        <Divider />
        <SearchBar
          data={interests}
          formData={formData.interests}
          removeChoosenElement={removeChoosenElement}
          label={"Desired study subjects"}
          id={"interests"}
          onChange={handleInterestsInput}
          listButtonsFunctionality={handleFormDataByButtons}
          focusState={setSubjectsFocus}
          focus={subjectsListFocus}
          search={interestsSearch}
        />
        <Divider />
        <Submit
          onClick={(e) => {
            e.preventDefault();
            FetchCtx.handleSubmit(formData);
          }}
        />
      </form>

      {FetchCtx.isLoading && <Loader />}
      <ToastContainer />
    </>
  );
};
export default SearchContainer;
