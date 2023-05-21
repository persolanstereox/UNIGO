import Image from "next/image";

function SocialMedia() {
  return (
    <div className="z-10 text-center max-[700px]:flex max-[700px]:flex-col-reverse">
      <div className="flex">
        <button className="flex justify-center bg-pink-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full ml-4 mb-3">
          <Image
            src="/twitter-icon.svg"
            width={20}
            height={20}
            alt="Twitter Icon"
            className="max-[700px]:w-5 max-[700px]:h-5"
          />
        </button>
        <button className="flex justify-center bg-blue-500 hover:bg-pink-700 text-white font-bold py-4 px-4 rounded-full mx-4">
          <Image
            src="/instagram-icon.svg"
            width={20}
            height={20}
            alt="Twitter Icon"
            className="max-[700px]:w-5 max-[700px]:h-5"
          />
        </button>
      </div>
      <span className="mx-4">Follow us</span>
    </div>
  );
}
export default SocialMedia;
