import React, { useEffect } from "react";
import { useContext } from "react";
import { backgroundContext } from "./Background";
import Button from "./Button";
import { priceCategory } from "../constants";
import Card from "./Card";

const Hero = () => {
  const { background, bgOpacity, changeBg } = useContext(backgroundContext);

  useEffect(() => {
    let opacity;
    let bg;
    let heroContent = [...document.querySelector(`.hero`).children];
    let heroDetails = [...document.querySelector(`.hero-detail`).children];
    let priceContainer = document.querySelector(`.price-container`);

    document.addEventListener("scroll", () => {
      let { top } = document.querySelector(`.hero`).getBoundingClientRect();

      opacity = 1 - (1 - top) * 0.005;
      opacity = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;
      heroContent.forEach((item) => {
        item.style.opacity = opacity;
      });

      bg = (1 - top) * 0.005;
      bg = bg > 1 ? 1 : bg < 0.3 ? 0.3 : bg;
      // console.log(bg);
      // changeBg(bg);
      // console.log(bgOpacity);
    });

    //hero-detail animation
    let options = {
      rootMargin: `0px`,
      threshold: 0.2,
    };

    const animate = (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add(`active`);
        } else {
          item.target.classList.remove(`active`);
        }
      });
    };
    let observer = new IntersectionObserver(animate, options);
    heroDetails.forEach((item) => {
      observer.observe(item);
    });
    // observer.observe(priceContainer);
  }, []);

  return (
    <section
      className={`page-wrapper pb-12 text-white w-[100%] h-[100%] relative`}
    >
      <div className="flex-col flxStart justify-end  max-sm:gap-5 gap-9 w-[100%]  h-[100%] hero relative ">
        <h1 className="max-md:text-6xl max-sm:text-4xl text-7xl font-[600] max-w-[80vw]">
          Unveil the Secrets of Nature: Exclusively on WildLifeTV+
        </h1>
        <Button
          name={"Stream now"}
          styles={
            "py-[0.7rem] px-[1.2rem] font-[500] max-md:text-sm max-sm:text-xs"
          }
        />
        <p className="max-sm:text-xs max-md:text-sm font-[600] mt-4">
          Watch on the WildLife App
        </p>
      </div>
      <div className="hero-detail relative h-[100%] mt-24 flxCenter flex-col gap-12 text-white max-md:text-4xl max-sm:text-2xl text-5xl font-[600] max-w-[80vw] overflow-hidden">
        <h1>New WildLife Originals every month — always ad-free.</h1>
        <h1>
          Stream on the WildLife TV app on WildLife devices, smart TVs, consoles
          or sticks.
        </h1>
        <h1>Watch in 4K HDR video with immersive Spatial Audio.1</h1>
        <h1>Share a single subscription with up to five people.</h1>
      </div>
      {/* <aside className="relative w-[80vw] flex-wrap flex gap-12 mt-36 price-container">
        {priceCategory.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            content={item.content}
            click={item.click}
          />
        ))}
      </aside> */}
    </section>
  );
};

export default Hero;
