import React, { useEffect } from "react";
import { styles } from "..";
import ShoeCard from "./ShoeCard";
import Button from "./Button";
import { people } from "..";

const Product = () => {
  useEffect(() => {
    const peopleContent = document.querySelector(`.people-content`);

    let initialOffset;
    let currentOffset;
    let mousedown = false;

    const innerSlider = document.querySelector(`.inner-slider`);
    const outerSlider = document.querySelector(`.outer-slider`);

    outerSlider.addEventListener("mouseover", (e) => {
      outerSlider.style.cursor = "grab";
    });

    outerSlider.addEventListener("mousedown", (e) => {
      innerSlider.classList.remove(`scroll-transition`);
      mousedown = true;
      outerSlider.style.cursor = "grabbing";

      initialOffset = e.offsetX - innerSlider.offsetLeft;
    });

    outerSlider.addEventListener("mouseup", (e) => {
      outerSlider.style.cursor = "grab";
    });

    outerSlider.addEventListener("mousemove", (e) => {
      if (!mousedown) return;
      currentOffset = e.offsetX;
      innerSlider.style.left = `${currentOffset - initialOffset}px`;
    });

    window.addEventListener("mouseup", () => {
      mousedown = false;
      innerSlider.classList.add(`scroll-transition`);
      let inner = innerSlider.getBoundingClientRect();
      let outer = outerSlider.getBoundingClientRect();
      if (innerSlider.offsetLeft > 0) {
        innerSlider.style.left = `0px`;
      } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${innerSlider.scrollWidth - outer.width}px`;
      }
    });
  }, []);

  return (
    <section className={`${styles.flxRight} w-[100%] relative roboto  mt-56`}>
      <header
        className={`flex flex-col text-5xl font-medium leading-[1.2] pr-32 realtive w-[80%]`}
      >
        <span className={`${styles.flxbtw}`}>
          <p className="text-xl font-normal underline">WHO ARE WE</p>
          <h1>An independent brand of</h1>
        </span>
        <span>urban trekking shoes and accessories</span>
        <span>that comes from a convergence of</span>
        <span>arts and personalities</span>
      </header>
      <section className={`outer-slider w-[100%] relative overflow-hidden`}>
        <div className="inner-slider flex flex-row  gap-10 relative">
          <ShoeCard name="CACTUS" img="" prevPrice={"$300"} newPrice={"$200"} />
          <ShoeCard name="CACTUS" img="" prevPrice={"$300"} newPrice={"$180"} />
          <ShoeCard name="CACTUS" img="" prevPrice={"$300"} newPrice={"$180"} />
          <ShoeCard name="CACTUS" img="" prevPrice={"$300"} newPrice={"$180"} />
        </div>
      </section>
      <button className="pr-32 mt-10">
        <Button name="SHOP ALL" />
      </button>
      <section className={`${styles.flxRight}  w-[70%] relative pr-28 mt-44`}>
        <p className="text-9xl font-thin absolute -top-24 left-0">-`♡´-</p>
        <div className="roboto people flex gap-10 overflow-hidden">
          <h1 className="people-title-container overflow-hidden">
            {people.map((name) => (
              <li
                key={name.name}
                className="people-title permanent-marker-regular text-3xl"
              >
                {name.name}
              </li>
            ))}
          </h1>
          <div>
            <p className="people-content-container ">
              {people.map((name) => (
                <li key={name.name} className="people-content ">
                  {name.content}
                </li>
              ))}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Product;
