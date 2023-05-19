"use client";
import { useEffect, useRef } from "react";
import ChoosenElement from "./UI/ChoosenElement";
import List from "./List";

const SearchBar = (props) => {
  const containerRef = useRef(null);
  // console.log(props.focus)
  const stateHandler = () => {
    props.focusState(true);
    console.log(props.focus);
  };
  useEffect(() => {
    const handler = (e) => {
      console.log(e.target);
      console.log(containerRef.current);
      console.log(e.code);
      // if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          props.focusState((prev) => !prev);
          // console.log(props.focus);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!props.focus) {
            props.focusState(true);
            // console.log(props.focus);
            break;
          }
        }
        case "Escape":
          props.focusState((prev) => !prev);
          console.log("click");
          console.log(props.focus);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [props.focus]);

  // const arr = ['Sopot', 'SOpot'];
  const arr = [...props.formData];

  const handleInput = (e) => {
    props.onChange(e);
    props.focusState(true);
    // console.log(props.formData[props.id])
    // console.log([...props.formData[props.id]])
    console.log(arr);
  };

  // onFocus={stateHandler}

  return (
    <div ref={containerRef}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="flex p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300">
        <div className="flex flex-wrap items-center">
          {arr.map((element) => (
            <ChoosenElement key={element} value={element} removeChoosenElement={props.removeChoosenElement} />
          ))}
        </div>
        <input
          onChange={handleInput}
          type="text"
          id={props.id}
          name={props.id}
          placeholder="Search"
          className="bg-gray-50"
          required
        />
      </div>

      <List
        searchName={props.search}
        data={props.data}
        focus={props.focus}
        focusState={props.focusState}
        listButtonsFunctionality={props.listButtonsFunctionality}
      />
    </div>
  );
};

export default SearchBar;
