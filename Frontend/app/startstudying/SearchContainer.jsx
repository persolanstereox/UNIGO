"use client";
/// External Libraries
import { useContext, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/// Components
import Divider from "./SearchComponents/UI/Divider";
import SearchBar from "./SearchComponents/SearchBar";
import FormButtonsContainer from "./SearchComponents/UI/FormButtonsContainer";
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
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value.trim()],
    });

    setCitiesSearch(e.target.value.toLowerCase());
  };

  const handleInterestsInput = (e) => {
    etFormData({
      ...formData,
      [e.target.name]: [e.target.value.trim()],
    });

    setInterestsSearch(e.target.value.toLowerCase());
  };

  const handleFormDataByButtons = (e) => {
    e.stopPropagation();
    e.preventDefault();

    let input = e.target.closest("ul").previousSibling;
    input.value = e.target.value;

    setFormData({
      ...formData,
      [input.name]: [e.target.value],
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
