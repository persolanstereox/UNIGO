const MainDivider = (props) => {
  return (
    <div className="p-8 text-center">
      <span className="block w-full p-1 bg-sky-800 "></span>
      <h2 className="mt-4 text-1.5xl">{props.label}</h2>
    </div>
  );
};

export default MainDivider;
