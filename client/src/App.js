import React, { useRef } from "react";
import { Header, ProductInfo, SpecTable, ReviewContainer } from "./components";
import { useScroll } from "./hooks";
import style from "./App.module.scss";
import { CustomDesign } from "./components/CustomDesign";

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
      <CustomDesign />
      <ProductInfo />
      <SpecTable />
      {scrollTop > 0 && (
        <button className={style.btnUp} onClick={scrollToTop} />
      )}
      <ReviewContainer />
      <div className={style.footer}></div>
    </div>
  );
}

export default App;
