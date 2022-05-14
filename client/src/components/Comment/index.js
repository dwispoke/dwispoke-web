import React from "react";
import style from "./index.module.scss";
import { StarBox } from "..";

const Comment = ({ text, score, nickname }) => {
  return (
    <li className={style.container}>
      <StarBox score={score} />
      <p className={style.text}>{text}</p>
      <div className={style.userinfo}>
        <span>{nickname}</span>
      </div>
    </li>
  );
};

export { Comment };
