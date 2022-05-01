import React from "react";
import style from "./index.module.scss";

const ProductInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.section}>
          <img
            src={`https://images.samsung.com/is/image/samsung/sec-feature-french-door-rf85t926232-259803916?$FB_TYPE_A_JPG$`}
            alt="설명이미지"
            style={{ width: "100%" }}
          />
        </div>
        <div className={style.section}>
          <h2 className={style.title}>
            나만의 맞춤형 디자인으로 업무공간을 남다르게, <br />
            트렌디 디자인
          </h2>
          <p className={style.desc}>
            플랫한 디자인으로 모던하고 트렌디한 사무실을 완성할 수 있습니다.
            <br />
            필요할 때 새로운 모듈을 교체하여 새 모니터를 산 것 같은 인테리어
            효과를 누릴 수 있습니다.
          </p>
        </div>
        <div className={style.section} style={{ display: "flex" }}>
          <img
            src={`/images/image1.png`}
            alt="설명이미지"
            style={{ flex: 1 }}
          />
          <div className={style.infoRight}>
            <h2 className={style.title}>
              어두컴컴한 벽에서
              <br />
              근무는 NO!
            </h2>
            <p className={style.desc}>
              햇빛이 들어오는 환경에서 <br />
              바깥 View를 만끽하며
              <br />
              쾌적한 환경에서 근무할 수 있습니다.
            </p>
          </div>
        </div>
        <div className={style.section}>
          <h2 className={style.title}>
            아직도 모니터는 벽에 붙어 있어야한다는 <br />
            고정관념에 빠져 계신가요?
          </h2>
          <p className={style.desc}>
            모니터를 방 정가운데에 배치해
            <br />
            공간활용도를 높히고 인테리어 소품으로도 사용해보세요!
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProductInfo };
