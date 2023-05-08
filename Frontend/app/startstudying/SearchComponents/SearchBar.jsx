"use client";
import { use, useEffect, useRef, useState } from "react";
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
          console.log(props.focus);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!props.focus) {
            props.focusState(true);
            console.log(props.focus);
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

  // onBlur={() => props.focusState(false)}

  return (
    <div onFocus={stateHandler} ref={containerRef}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={props.onChange}
        // onFocus={stateHandler}
        type="text"
        id={props.id}
        name={props.id}
        placeholder="Search"
        className=" block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300"
      />
      <List
        searchName={props.search}
        data={props.data}
        focus={props.focus}
        focusState={props.focusState}
        // removeList={props.settingFocus}
        listButtonsFunctionality={props.listButtonsFunctionality}
      />
    </div>
  );
};

export default SearchBar;
