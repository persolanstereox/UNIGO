import { MoonLoader } from "react-spinners";
const Loader = () => {
  return (
    <div id="loader" className="h-screen w-screen fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  ">
      <div className="absolute  top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ">
        <MoonLoader color="hsla(360, 80%, 48%, 1)" size={120} />
      </div>
    </div>
  );
};


export default Loader;
