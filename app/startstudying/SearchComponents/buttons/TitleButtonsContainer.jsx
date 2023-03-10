import TitleButton from "./TitleButton";
import Titles from "test-data/titles.json"
function TitleButtonContainer() {
return(
    <div>
        <span>Target Title</span>
        {Titles.titles.map(button => (
            <TitleButton key={button.id} data={button.title}/>
        ))}
    </div>
)
}

export default TitleButtonContainer;