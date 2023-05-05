"use client";
import Link from "next/link";
import Divider from "./SearchComponents/Divider";
import SearchBar from "./SearchComponents/SearchBar";
import FormButtonsContainer from "./SearchComponents/buttons/FormButtonsContainer";
import Submit from "./SearchComponents/buttons/Submit";
import cities from "@/Frontend/test-data/cities.json";
import subjects from "@/Frontend/test-data/subjects.json";
import titles from "@/Frontend/test-data/titles.json";
import { useState } from "react";
import axios from "axios";

const SearchContainer = () => {
  const [search, setSearch] = useState("");

  const [citiesListFocus, setCitiesFocus] = useState(false);
  const [subjectsListFocus, setSubjectsFocus] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [response, setResponse] = useState(null);

  const [formData, setFormData] = useState({
    cities: "",
    subjects: "",
    title: "",
  });

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });

    setSearch(e.target.value.toLowerCase());

    console.log(e.target.value);
  };

  const handleFormDataByButtons = (e) => {
    e.stopPropagation();
    e.preventDefault();

    console.log(e.target);
    let input = e.target.closest("ul").previousSibling;
    input.value = e.target.value;

    setFormData({
      ...formData,
      [input.name]: e.target.value,
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

  function handleSubmit(e) {
    e.preventDefault();

    const requestBody = {
      cities: ["Sopot"],
      interests: ["Programming"],
      title: "Bachelor",
    };

    axios
      .get("http://localhost:8080/api/universities/filter", requestBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDU0YjA3MzIzMWRlZDdkN2Y4NDhiYWYsdXNlciIsImlzcyI6ImF1dGgiLCJyb2xlcyI6WyJVU0VSIl0sImV4cCI6MTY4MzMwNDg4OH0.3YwuOmk_J1VX9987VOWYhwYG9cn8PnOPy-Ns9iS_uCfJ27empUb338clxixI_rpM0P-GISXB_tFfvSPSltV8VA",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getFormData = (e) => {
    e.preventDefault();

    console.log(e.target.closest("form"));
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider />
        <SearchBar
          data={cities}
          label={"Cities"}
          id={"cities"}
          onChange={handleFormData}
          listButtonsFunctionality={handleFormDataByButtons}
          focusState={setCitiesFocus}
          focus={citiesListFocus}
          // settingFocus={handleFocus}

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
          data={subjects}
          label={"Desired study subjects"}
          id={"subjects"}
          onChange={handleFormData}
          listButtonsFunctionality={handleFormDataByButtons}
          focusState={setSubjectsFocus}
          focus={subjectsListFocus}
          // settingFocus={handleFocus}
          search={search}
        />
        <Divider />
        <Submit onClick={getFormData} />
        <button type="submit">Test request</button>
        {/* <div>
          <Link
            onClick={getFormData}
            className="bg-slate-300 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            href="/"
            
          >
            Show Universities
          </Link>
        </div> */}
      </form>
    </div>
  );
};
export default SearchContainer;
