import React, { useEffect, useState } from "react";

const useScroll = (ref) => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScrollTop(ref.current.scrollTop);
    };
    ref.current.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
  return { scrollTop };
};

export { useScroll };
