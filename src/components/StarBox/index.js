import React from "react";
import style from "./index.module.scss";

const StarBox = ({ score }) => {
  const renderStar = () => {
    const stars = [];
    for (var i = 0; i < 5; i++) {
      stars.push(
        <span className={i <= score ? style.yellowstar : style.graystar} />
      );
    }
    return stars;
  };
  return <div>{renderStar()}</div>;
};

export { StarBox };
