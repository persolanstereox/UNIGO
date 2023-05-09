"use client";
/// External Libraries
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/// Components
import Divider from "./SearchComponents/UI/Divider";
import SearchBar from "./SearchComponents/SearchBar";
import FormButtonsContainer from "./SearchComponents/UI/FormButtonsContainer";
import Submit from "./SearchComponents/UI/buttons/Submit";
import Loader from "./SearchComponents/UI/Loader";
import ResulstsContainer from "./SearchComponents/ResultsContainer";
import SearchContext from "./SearchContext";

/// Data
import cities from "@/Frontend/test-data/cities.json";
import interests from "@/Frontend/test-data/subjects.json";
import titles from "@/Frontend/test-data/titles.json";

const SearchContainer = () => {
  const URL = "http://localhost:8080/api/universities/filter";
  const [search, setSearch] = useState("");
  const [citiesListFocus, setCitiesFocus] = useState(false);
  const [subjectsListFocus, setSubjectsFocus] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const results = useRef(null);

  const FetchCtx = useContext(SearchContext)

  const ErrorToast = () => toast("Something went wrong!");

  const [formData, setFormData] = useState({
    cities: [],
    interests: [],
    title: "",
  });
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value.trim()],
    });

    setSearch(e.target.value.toLowerCase());
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

  

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   setData(null);
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await axios.post(URL, formData);

  //     if (response.status !== 200) {
  //       throw new Error(`Can't find this university, try again`);
  //     }

  //     setData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     ErrorToast();
  //     setError(error.message || "Something went wrong!");
  //     setData(null);
  //     console.error(error);
  //   }
  //   setIsLoading(false);
  //   setTimeout(() => {
  //     results.current?.scrollIntoView({ behavior: "smooth" });
  //   }, 100);
  // }

  // const getFormData = (e) => {
  //   e.preventDefault();

  //   console.log(e.target.closest("form"));
  //   console.log(formData);
  // };

  return (
    <>
      <form className=" ">
        <Divider />
        <SearchBar
          data={cities}
          label={"Cities"}
          id={"cities"}
          onChange={handleFormData}
          listButtonsFunctionality={handleFormDataByButtons}
          focusState={setCitiesFocus}
          focus={citiesListFocus}
          search={search}
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
          onChange={handleFormData}
          listButtonsFunctionality={handleFormDataByButtons}
          focusState={setSubjectsFocus}
          focus={subjectsListFocus}
          search={search}
        />
        <Divider />
        {/* <Submit onClick={handleSubmit} /> */}
        <Submit onClick={(e) =>{
          e.preventDefault()
          console.log(FetchCtx.handleSubmit(e))
          console.log(FetchCtx.data) }
        } />
      </form>
      {/* {FetchCtx.fetchedData && <ResulstsContainer data={FetchCtx.fetchedData} ref={FetchCtx.ref} />} */}
      {FetchCtx.isLoading && <Loader />}
      <ToastContainer />
    </>
  );
};
export default SearchContainer;
