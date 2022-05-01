import React from "react";
import style from "./index.module.scss";
const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.inner}>
        <a href="./" className={style.anchor}>
          <img
            src="https://www.samsung.com/sec/static/_images/common/logo_samsung_black.svg"
            alt="삼성"
          />
        </a>
      </div>
    </header>
  );
};

export { Header };
