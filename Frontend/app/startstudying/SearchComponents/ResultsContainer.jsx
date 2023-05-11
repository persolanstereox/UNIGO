import { forwardRef } from "react";

import ResultCard from "./UI/ResultCard";
const ResulstsContainer = (props, ref) => {
  return (
    <div ref={ref}>
      <div className="flex text-center flex-wrap">
        {props.data.map((card) => {
          return <ResultCard data={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default forwardRef(ResulstsContainer);
