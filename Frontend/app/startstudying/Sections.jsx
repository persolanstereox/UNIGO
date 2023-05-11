import MainDivider from "./SearchComponents/UI/MainDivider";
import SearchContainer from "./SearchContainer";
import ResultsContainer from "./SearchComponents/ResultsContainer";
import FetchContext from "./FetchContext";
import { useContext } from "react";

const Sections = () => {
  const FetchCtx = useContext(FetchContext);
  return (
    <>
      <section className="container mx-auto px-4  h-fit max-h-full max-w-screen-lg ">
        <MainDivider label={"Discover Universities that fit your needs"} />
        <SearchContainer />
      </section>
      {FetchCtx.fetchedData && (
        <section className="container mx-auto px-4  h-fit max-h-full max-w-screen-lg ">
          <MainDivider label={"Check the results"} />
          <ResultsContainer data={FetchCtx.fetchedData} ref={FetchCtx.ref} />
        </section>
      )}
    </>
  );
};

export default Sections;
