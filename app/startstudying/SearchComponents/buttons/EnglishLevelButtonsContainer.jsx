"use client";
import EnglishLevelButton from "./EnglishLevelButton";
import Levels from "test-data/englishLevel.json";

function EnglishLevelButtonContainer(props) {
  // const saveValue = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.closest("button").value);
  // };

  return (
    <div className=" flex flex-col">
      <span>Estimate your English level</span>
      <div className="flex">
        {Levels.levelOfEnglish.map((button) => (
          <EnglishLevelButton
            onClick={props.onClick}
            key={button.id}
            name={button.name}
            englishLevel={button.level}
          />
        ))}
      </div>
    </div>
  );
}
export default EnglishLevelButtonContainer;
