import React, { useEffect, useState } from "react";
import { Comment, ReviewForm } from "..";
import * as API from "../../apis/comment";
import style from "./index.module.scss";

const defaultData = [
  {
    text: "te좋은가격에 스마트티비 모니터!!! 가격 디자인 성능 너무 맘에드네요!!! 배송과 설치까지 친절하게 잘 받았습니다!! ",
    score: 5,
    nickname: "김xx",
    id: 0,
  },
  {
    text: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    score: 4,
    nickname: "김xx",
    id: 1,
  },
  {
    text: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    score: 3,
    nickname: "김xx",
    id: 2,
  },
  {
    text: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    score: 2,
    nickname: "김xx",
    id: 3,
  },
  {
    text: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    score: 1,
    nickname: "김xx",
    id: 4,
  },
  {
    text: "testtesttesttesttesttesttesttesttesttesttesttesttesttest",
    score: 1,
    nickname: "김xx",
    id: 5,
  },
];

const ReviewContainer = () => {
  const [data, setData] = useState(defaultData);
  const [onEdit, setOnEdit] = useState(false);
  const fetchData = async () => {
    const data = await API.getAllComments();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onComplete = async () => {
    await fetchData();
    setOnEdit(false);
  };
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <h2 className={style.title}>상품평</h2>
        <div className={style.wrap_count}>
          <p className={style.count}>
            전체 상품평
            <span>{data.length}건</span>
          </p>
          <button
            onClick={() => {
              setOnEdit(true);
            }}
          >
            상품평 작성
          </button>
        </div>
        {onEdit ? (
          <ReviewForm onComplete={onComplete} />
        ) : (
          <ul className={style.list}>
            {data.map((comment) => (
              <Comment {...comment} key={`review_${comment.id}`} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { ReviewContainer };
