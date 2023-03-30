import MainDivider from "./MainDivider";
import SearchContainer from "./SearchContainer";

function StartStudying() {
  return (
    <main className="h-3/4">
      <section className="container mx-auto px-4  h-fit max-h-full max-w-screen-lg ">
          <MainDivider/>
          <SearchContainer/>
      </section>
    </main>
  );
}

export default StartStudying;
// border-4 border-indigo-500/100