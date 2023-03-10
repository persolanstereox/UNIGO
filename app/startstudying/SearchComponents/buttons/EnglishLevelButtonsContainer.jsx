import EnglishLevelButton from "./EnglishLevelButton";
import Levels from "test-data/englishLevel.json";


function EnglishLevelButtonContainer() {
  return (
    <div>
      <span>Estimate your English level</span>
      {Levels.levelOfEnglish.map((button) => (
        <EnglishLevelButton
          key={button.id}
          name={button.name}
          englishLevel={button.level}
        />
      ))}
    </div>
  );
}
export default EnglishLevelButtonContainer;
