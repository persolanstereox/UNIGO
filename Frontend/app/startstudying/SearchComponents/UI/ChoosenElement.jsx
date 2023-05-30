const ChoosenElement = (props) => {
  return (
    <div
      key={props.value}
      className="flex justify-evenly items-center  bg-blue-500 text-white rounded-full w-36 mr-2 py-2 mb-1 "
    >
      <span className="">{props.value}</span>
      <button value={props.value} onClick={(e) => {
        props.removeChoosenElement(e)
      }} >
        <img src="/remove-icon.png" alt="Remove Icon" className="w-4" />
      </button>
    </div>
  );
};

export default ChoosenElement;
