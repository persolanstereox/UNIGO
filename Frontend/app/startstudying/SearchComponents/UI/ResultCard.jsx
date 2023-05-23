const ResultCard = (props) => {
  const getResultsColor = (matchLevel) => {
    if (matchLevel === 1) {
      return "bg-red-600";
    } else if (matchLevel === 2) {
      return "bg-amber-300";
    } else if (matchLevel === 3) {
      return "bg-teal-400";
    } else if (matchLevel === 4) {
      return "bg-indigo-500";
    } else {
      return "bg-green-600";
    }
  };

  return (
    <div className="m-4  rounded-lg shadow-lg">
      <div className="w-80 p-4">
        <div className="flex justify-center shadow-lg shadow-cyan-500/50">
          <img src={props.data.logoURL} alt="Logo of the University" />
        </div>
      </div>
      <h3 className="text-lg font-bold">{props.data.university}</h3>
      <h4 className="text-sm text-gray-500">{props.data.fieldOfStudy}</h4>
      <div className="flex items-center justify-center	mt-3">
        <div
          className={` rounded-full p-1 bg-sky-300  font-medium ${getResultsColor(
            props.data.matchingInterests
          )}`}
        >
          <span className={`mx-3 text-white`}>
            {props.data.matchingInterests === 1
              ? "Very poor match"
              : props.data.matchingInterests === 2
              ? "Poor match"
              : props.data.matchingInterests === 3
              ? "Good match"
              : props.data.matchingInterests === 4
              ? "Very good match"
              : "Perfect match"}
          </span>
        </div>
        <div className="flex items-center justify-center relative right-2 bg-white border-2 border-zinc-200 rounded-full w-11 h-11 ">
          <span className="text-2xl font-bold">%</span>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 my-5">
        <span></span>
        <h3 className="text-lg font-bold">Visit Website</h3>
        <a
          href={props.data.website}
          className="flex items-center justify-center relative right-2 bg-white  rounded-full w-11 h-11 shadow-lg "
        >
          <img
            src="/right-arrow.png"
            alt="Right arrow icon to visit university website"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default ResultCard;
