function EnglishLevelButton(props) {
    return(
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <h1>{props.englishLevel}</h1>
        <span>{props.name}</span>
    </button>
    )
}

export default EnglishLevelButton;