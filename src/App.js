import React, { useRef } from "react";
import { Header, ProductInfo } from "./components";
import { useScroll } from "./hooks";
import style from "./App.module.scss";

function App() {
  const appRef = useRef(null);
  const { scrollTop } = useScroll(appRef);
  const scrollToTop = () => {
    appRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.App} ref={appRef}>
      <Header />
      <ProductInfo />
      {scrollTop > 0 && (
        <button className={style.btnUp} onClick={scrollToTop} />
      )}
    </div>
  );
}

export default App;
