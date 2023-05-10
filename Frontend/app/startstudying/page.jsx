"use client"
import MainDivider from "./SearchComponents/UI/MainDivider";
import SearchContainer from "./SearchContainer";

import { useContext } from "react";
import SearchContext from "./SearchContext";
function StartStudying() {
  const FetchCtx = useContext(SearchContext);
  return (
    <main>
      <section className="container mx-auto px-4  h-fit max-h-full max-w-screen-lg ">
        <MainDivider label={"Discover Universities that fit your needs"} />
        <SearchContainer />
        {/* {FetchCtx.fetchedData && (
          <ResulstsContainer data={FetchCtx.fetchedData} ref={FetchCtx.ref} />
        )} */}
      </section>
    </main>
  );
}

export default StartStudying;
