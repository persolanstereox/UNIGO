import TitleButton from "./TitleButton";
import data from "test-data/cities.json"
function TitleButtonContainer() {
return(
    <div>
        {data.map(button => (
            <TitleButton key={button.id} dane={button.text}/>
        ))}
    </div>
)
}

export default TitleButtonContainer;