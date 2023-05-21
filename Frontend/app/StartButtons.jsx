import Link from "next/link";

function MainButton() {
  return (
    <div className="z-10 max-[700px]:flex max-[700px]:flex-col">
      <Link href="/startstudying">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Start now</button>
      </Link>
      <Link href="/readmore">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed m-2">Read more</button>
      </Link>
    </div>
  );
}
export default MainButton;
