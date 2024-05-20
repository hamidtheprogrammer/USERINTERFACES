import React from "react";
import { useState, useRef, useEffect } from "react";
const Background = () => {
  useEffect(() => {
    const outerScroller = document.querySelector(`.outer`);
    const sticky = document.querySelector(`.sticky`);
    window.addEventListener("scroll", () => {
      let { bottom } = outerScroller.getBoundingClientRect();
      let scale = 1 - (bottom - window.innerHeight) * 0.00078;
      scale += 1;
      // console.log(scale);
      scale > 1.5 ? 1.5 : scale;
      // sticky.style.scale = `${scale}`;
      // sticky.style.backgroundPositionY = `-${scale * 12}px`;
    });
    return () => {};
  }, []);

  return (
    <section className="outer absolute w-[100%] h-[200vh] z-[1]">
      <div className="relative top-0 background h-[100vh] w-[100%]">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-[0.5]"></div>
      </div>
    </section>
  );
};

export default Background;
