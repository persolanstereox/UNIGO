"use client";
function EnglishLevelButton(props) {
  return (
    <button
      value={props.englishLevel}
      onClick={props.onClick}
      name="engLevel"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3  px-4 rounded-full w-56 flex justify-center items-center"
    >
      <h1 className="text-sm mr-4">{props.englishLevel}</h1>
      <span className="text-sm">{props.name}</span>
    </button>
  );
}

export default EnglishLevelButton;
