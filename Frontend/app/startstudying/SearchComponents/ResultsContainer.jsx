import { forwardRef } from "react";
import MainDivider from "../SearchComponents/UI/MainDivider";
import ResultCard from "./UI/ResultCard";
const ResulstsContainer = (props, ref) => {
  return (
    <div className="min-h-0" ref={ref}>
      <MainDivider label={"Check the results"} />
      <div className="flex text-center flex-wrap">
        {props.data.map((card) => {
          return <ResultCard data={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default forwardRef(ResulstsContainer);
