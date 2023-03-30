"use client"
import TitleButton from "./TitleButton";
import Titles from "test-data/titles.json"
function TitleButtonContainer() {

    const saveValue = (e) => {
        e.preventDefault();
        console.log(e.target.closest('button').value)
      };
return(
    <div className=" flex flex-col">
        <span>Target Title</span>
        <div>
        {Titles.titles.map(button => (
            <TitleButton onClick={saveValue} key={button.id} data={button.title}/>

        ))}
        </div>
    </div>
)
}

export default TitleButtonContainer;