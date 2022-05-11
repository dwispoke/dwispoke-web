import React from "react";
import style from "./index.module.scss";

const Comment = ({ text, score, nickname }) => {
  const renderStar = () => {
    const stars = [];
    for (var i = 0; i < 5; i++) {
      stars.push(
        <span className={i <= score ? style.yellowstar : style.graystar} />
      );
    }
    return stars;
  };

  return (
    <li className={style.container}>
      <div>{renderStar()}</div>
      <p className={style.text}>{text}</p>
      <div className={style.userinfo}>
        <span>{nickname}</span>
      </div>
    </li>
  );
};

export { Comment };
