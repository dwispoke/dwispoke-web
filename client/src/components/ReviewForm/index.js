import React, { useState } from "react";
import { StarBox } from "..";
import * as API from "../../apis/comment";
import style from "./index.module.scss";

const ReviewForm = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [nickname, setNickname] = useState("");
  const [score, setScore] = useState(5);
  const addComment = async () => {
    if (text < 10) {
      alert("상품평은 10자 이상 적어주세요");
      return;
    }
    if (nickname < 2) {
      alert("이름은 2자 이상 적어주세요");
      return;
    }
    await API.createComment({ nickname, text, score });
    alert("생성이 완료되었습니다!");
    onComplete();
  };
  return (
    <div className={style.container}>
      <div className={style.wrap_starbox}>
        <span className={style.starbox_title}>평점선택</span>
        <StarBox score={score} onClickStar={setScore} />
        <strong>{score}</strong>
        <span className={style.denominator}>/5</span>
      </div>
      <div className={style.wrap_text}>
        <textarea
          className={style.text}
          placeholder="상품평은 10자 이상, 5,000자까지 입력 가능합니다."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <p className={style.precaution}>
          ※ 고객후기를 위한 공간입니다. 제품 및 기타 문의사항은 고객서비스을
          이용해 주세요. [타인에게 불쾌감을 유발할 수 있는 욕설과 저속한 비어를
          사용하거나 타인을 근거 없이 비방하는 리뷰는 제한될 수 있습니다.]
        </p>
        <div className={style.wrap_nickname}>
          <strong>이름: </strong>
          <input
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
          />
        </div>
        <div className={style.wrap_button}>
          <button className={style.button_cancel} onClick={onComplete}>
            취소
          </button>
          <button className={style.button_submit} onClick={addComment}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export { ReviewForm };
