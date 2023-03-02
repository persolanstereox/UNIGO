import Link from "next/link";

function MainButton() {
  return (
    <div>
      <Link href="/startstudying">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start now</button>
      </Link>
      <Link href="/readmore">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">Read more</button>
      </Link>
    </div>
  );
}
export default MainButton;
