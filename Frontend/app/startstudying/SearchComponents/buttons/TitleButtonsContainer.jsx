"use client"
import TitleButton from "./TitleButton";
import Titles from "@/test-data/titles.json"
function TitleButtonContainer(props) {

    
return(
    <div className=" flex flex-col">
        <span>Target Title</span>
        <div>
        {Titles.titles.map(button => (
            <TitleButton onClick={props.onClick} key={button.id} data={button.title} />

        ))}
        </div>
    </div>
)
}

export default TitleButtonContainer;