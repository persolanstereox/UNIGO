import Description from "./description";
import StartSection from "./startSection"

export default async function Home() {

  return (
    <main className="h-3/4">
      <Description/>
      <StartSection/>
    </main>
  );
}
