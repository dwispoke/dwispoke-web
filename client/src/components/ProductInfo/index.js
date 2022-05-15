import React from "react";
import style from "./index.module.scss";

const ProductInfo = () => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.section}>
          <img
            src={`/images/image2.png`}
            alt="설명이미지"
            style={{ width: "100%" }}
          />
        </div>
        <div className={style.section}>
          <h2 className={style.title}>
            맞춤형 디자인으로 <br />
            나만의 공간을 색다르게 <br />
          </h2>
          <p className={style.desc}>
            플랫한 디자인으로 모던하고 트렌디한 공간을 완성할 수 있습니다.
            <br />
            필요할 때 새로운 모듈을 교체하여 새 모니터를 산 것 같은 인테리어
            효과를 누릴 수 있습니다.
          </p>
        </div>
        <div className={`${style.section} ${style.double}`}>
          <div style={{ flex: 1 }}>
            <img
              src={`/images/image1.png`}
              alt="설명이미지"
              style={{ width: "100%" }}
            />
          </div>
          <div className={style.textbox}>
            <h2 className={style.title}>
              뒷면을 하나의
              <br />
              인테리어 오브제로
            </h2>
            <p className={style.desc}>
              프레임, 선반, 컬러블록까지
              <br />
              원하는대로 다양하게!
            </p>
          </div>
        </div>
        <div className={style.section}>
          <h2 className={style.title}>
            공간디자인을 도와주는
            <br />
            커스터마이징 모니터
          </h2>
          <p className={style.desc}>
            당신이 원하는대로 조합해보세요
            <br />
            DIY뒤스포크는 다양한 라이프스타일을 고려해 제작되었으며,
            <br />그 어느 때보다 당신의 취향을 드러낼 수 있는 디자인을
            제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProductInfo };
