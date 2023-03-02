import MainButton from "./mainButtons";
import SocialMedia from "./socialMedia";
import Image from "next/image";

function StartFunction() {
  return (
    <section className="flex">
      <div>
        <MainButton/>
      </div>
      <div>
        <Image src="/man-icon.png" width={400} height={200} alt="Man icon with phone" />
      </div>
      <div>
        <SocialMedia/>
      </div>
    </section>
  );
}
export default StartFunction;
