import MainDivider from "./SearchComponents/UI/MainDivider";
import SearchContainer from "./SearchContainer";

function StartStudying() {
  return (
    <main>
      <section className="container mx-auto px-4  h-fit max-h-full max-w-screen-lg ">
          <MainDivider label={'Discover Universities that fit your needs'}/>
          <SearchContainer/>
      </section>
    </main>
  );
}

export default StartStudying;
