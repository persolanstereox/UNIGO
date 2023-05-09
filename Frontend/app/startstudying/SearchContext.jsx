"use client"
// const { createContext } = require("react");
import { createContext } from "react";

const SearchContext = createContext({
//   citiesListFocus: false,
//   subjectsListFocus: false,
  fetchedData: "",
  isLoading: false,
  error: null,
  ref: null,
//   onInputChange: (e) => {},
//   onListButtonClick: (e) => {},
//   onFormButtonClick: (e) => {},
  handleSubmit: async (e) => {},


});

export const SearchContextProvider = (props) => {
//   const [search, setSearch] = useState("");
//   const [citiesListFocus, setCitiesFocus] = useState(false);
//   const [subjectsListFocus, setSubjectsFocus] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const results = useRef(null);

//   const [formData, setFormData] = useState({
//     cities: [],
//     interests: [],
//     title: "",
//   });
//   const handleFormData = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: [e.target.value.trim()],
//     });

//     setSearch(e.target.value.toLowerCase());
//   };

//   const handleFormDataByListOptions = (e) => {
//     e.stopPropagation();
//     e.preventDefault();

//     let input = e.target.closest("ul").previousSibling;
//     input.value = e.target.value;

//     setFormData({
//       ...formData,
//       [input.name]: [e.target.value],
//     });
//   };

//   const handleButtonsValue = (e) => {
//     e.preventDefault();
//     let button = e.target.closest("button");

//     setFormData({
//       ...formData,
//       [button.name]: button.value,
//     });

//     setActiveButton(button.value);
//   };

  async function handleSubmit(e) {
    e.preventDefault();

    setData(null);
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(URL, formData);

      if (response.status !== 200) {
        throw new Error(`Can't find this university, try again`);
      }

      setData(response.data);
      console.log(response.data);
    } catch (error) {
      ErrorToast();
      setError(error.message || "Something went wrong!");
      setData(null);
      console.error(error);
    }
    setIsLoading(false);
    setTimeout(() => {
      results.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <SearchContext.Provider
      value={{
        // citiesListFocus: citiesListFocus,
        // subjectsListFocus: subjectsListFocus,
        fetchedData: data,
        isLoading: isLoading,
        error: error,
        ref: results,
        // onInputChange: handleFormData,
        // onListButtonClick: handleFormDataByListOptions,
        // onFormButtonClick: handleButtonsValue,
        handleSubmit: handleSubmit,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
