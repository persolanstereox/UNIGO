import MainDivider from "./MainDivider";
import SearchContainer from "./SearchContainer";

function StartStudying() {
  return (
    <main className="h-3/4">
      <section className="container mx-auto px-4 border-4 border-indigo-500/100 h-144 max-h-full ">
          <MainDivider/>
          <SearchContainer/>
      </section>
    </main>
  );
}

export default StartStudying;
