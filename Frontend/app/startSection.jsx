import MainButton from "./mainButtons";
import SocialMedia from "./socialMedia";
import Image from "next/image";

function StartSection() {
  return (
    <section className="flex justify-around h-2/4">
      <div className="flex items-center">
        <MainButton />
      </div>
      <div className="flex items-end">
        <Image
          src="/man-icon.png"
          width={400}
          height={200}
          alt="Man icon with phone"
        />
      </div>
      <div className="flex items-center">
        <SocialMedia />
      </div>
    </section>
  );
}
export default StartSection;