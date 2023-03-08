import Divider from "./SearchComponents/divider";
import SearchBar from "./SearchComponents/SearchBar";
import TitleButtonContainer from "./SearchComponents/buttons/TitleButtonsContainer";

const SearchContainer = () => {
    return(
        <div>
            <form>
            <Divider/>
            <SearchBar/>
            <Divider/>
            <TitleButtonContainer/>
            </form>
        </div>
    )
}
export default SearchContainer;