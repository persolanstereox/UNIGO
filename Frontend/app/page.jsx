import Description from "./Description";
import StartSection from "./StartSection"

export default async function Home() {

  return (
    <main className="h-3/4">
      <Description/>
      <StartSection/>
    </main>
  );
}
