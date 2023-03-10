import Divider from "./SearchComponents/divider";
import SearchBar from "./SearchComponents/SearchBar";
import TitleButtonContainer from "./SearchComponents/buttons/TitleButtonsContainer";
import EnglishLevelButtonContainer from "./SearchComponents/buttons/EnglishLevelButtonsContainer";
import Submit from "./SearchComponents/buttons/Submit";
import cities from 'test-data/cities.json'
import subjects from 'test-data/subjects.json'

const SearchContainer = () => {
    return(
        <div>
            <form>
            <Divider/>
            <SearchBar data={cities} label={'Cities'} id={'cities'}/>
            <Divider/>
            <TitleButtonContainer/>
            <Divider/>
            <SearchBar data={subjects} label={'Desired study subjects'} id={'subjects'}/>
            <Divider/>
            <EnglishLevelButtonContainer/>
            <Divider/>
            <Submit/>
            </form>
        </div>
    )
}
export default SearchContainer;