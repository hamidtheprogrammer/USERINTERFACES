import React from "react";
import { styles } from "..";
import Button from "./Button";

const duplicateList = (item) => {
  const newList = [];
  for (let i = 0; i < 6; i++) {
    newList.push(item);
  }

  return newList;
};

const Hero = () => {
  return (
    <section className="w-[100%] relative mt-8">
      <div className={`w-[100%] ${styles.flxRight} pr-32 `}>
        <h1
          className={`hero-title leading-[0.89] overflow-hidden relative ${styles.flxRight}`}
        >
          <span className="spring text-[10rem] font-[500]">SPRING,</span>
          <div className="flex relative">
            <span className="summer text-[10rem] font-[500]">SUMMER</span>
            <div className={`col ${styles.flxCenter} flex-col relative`}>
              <span className="text-5xl font-[500]">COLL.</span>
              <span
                className={`${styles.flxRight} relative left-4 text-5xl font-[500]`}
              >
                2021
              </span>
            </div>
          </div>
        </h1>
        <section className={`${styles.flxCenter} mt-10 gap-8`}>
          <aside>
            <div className={`hero-img ${styles.flxCenter} flex-row `}>
              <img src="./assets/FashionCartoon1.png" alt="Fashionimage" />
            </div>
            <section className="hero-tiny-text">
              <p>(01)</p>
              <p>MAN</p>
            </section>
          </aside>
          <aside>
            <div className={`hero-img ${styles.flxCenter} flex-row `}>
              <image src="./assets/FashionCartoon1.png" alt="Fashionimage" />
            </div>
            <section className="hero-tiny-text">
              <p>(01)</p>
              <p>WMNs</p>
            </section>
          </aside>
        </section>
        <Button name="EXPLORE" />
      </div>
      <aside className="relative overflow-hidden mt-36">
        <ul
          className={`do-not-scroll ${styles.flxCenter} bg-yellow-500 border-y-2 py-3 border-black `}
        >
          {duplicateList(". DO NOT SCROLL . DEPLACE SHOP").map((item) => (
            <li
              className={
                "roboto text-3xl font-medium min-[15%] whitespace-nowrap"
              }
              key={Math.random}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Hero;
