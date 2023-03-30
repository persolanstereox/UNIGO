"use client"
function TitleButton(props) {
  return (
    <button onClick={props.onClick} value={props.data} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28">
      {props.data}

    </button>
  );
}

export default TitleButton;
