import React from "react";
import style from "./index.module.scss";

const StarBox = ({ score, onClickStar }) => {
  const renderStar = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const star = i <= score ? style.yellowstar : style.graystar;
      stars.push(
        <span
          className={`${star} ${onClickStar && style.clickable}`}
          key={`star_${i}`}
          onClick={() => {
            onClickStar && onClickStar(i);
          }}
        />
      );
    }
    return stars;
  };
  return <div className={style.container}>{renderStar()}</div>;
};

export { StarBox };
