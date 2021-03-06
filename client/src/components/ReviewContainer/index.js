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
  const voteUp = async (id) => {
    const newData = [...data];
    await API.voteUp({ id });
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === id) {
        newData[i].liked += 1;
        break;
      }
    }
    setData(newData);
  };
  const renderReviewList = () => {
    if (!data || data.length === 0) {
      return <p className={style.empty}>작성된 상품평이 없습니다.</p>;
    }
    return data.map((comment) => (
      <Comment {...{ ...comment, voteUp }} key={`review_${comment.id}`} />
    ));
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
          <button className={style.btn_refresh} onClick={fetchData}>
            <img src={`/images/sync.png`} alt="새로고침" />
          </button>
          <button
            className={style.btn_write}
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
          <ul className={style.list}>{renderReviewList()}</ul>
        )}
      </div>
    </div>
  );
};

export { ReviewContainer };
