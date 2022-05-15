import React from "react";
import style from "./index.module.scss";
import { StarBox } from "..";

const Comment = ({ text, score, nickname, liked, voteUp, id }) => {
  return (
    <li className={style.container}>
      <StarBox score={score} />
      <p className={style.text}>{text}</p>
      <div className={style.userinfo}>
        <div className={style.wrap_like}>
          <p>상품평이 도움이 됐다면 꾹!</p>
          <button onClick={() => voteUp(id)}>
            <img
              src="https://www.samsung.com/sec/static/_images/common/icon-goods.svg"
              alt="좋아요"
            />
            <span>{liked}</span>
          </button>
        </div>
        <span className={style.nickname}>{nickname}</span>
      </div>
    </li>
  );
};

const MemoizedComment = React.memo(
  Comment,
  (prevProps, nextProps) => prevProps.id === nextProps.id
);

export { MemoizedComment as Comment };
