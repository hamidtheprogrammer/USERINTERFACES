import React from "react";
import Button from "./Button";
import Cards from "./Cards";
import { heroCards } from "./index.js";

const Hero = () => {
  return (
    <section className="mt-[4.9rem] relative w-[100%] flxCenter flex-col z-[1] max-w-[1440px]">
      <header className="min-h-[95vh] flxCenter flex-col w-[100%] relative gap-10">
        {/* <div className="absolute bg-white w-[100%] h-[40px] ">
          <button className="w-[100px] h-[50px] bg-white"></button>
        </div> */}
        <h1 className="relative text-[3.4rem] max-md:text-[2.7rem] max-md:max-w-[80%] font-[600] poppins  leading-[4rem] text-center text-white max-w-[65%]">
          We create extra groovy brand experiences
        </h1>
        <Button
          name={"VIEW OUR PROJECTS"}
          styles={"border-[0.5px] border-[#FFFFFF50] text-white"}
        />
      </header>
      <aside className="relative w-[100%] backCol flxCenter">
        <div className="flxCenter max-w-[90%] relative top-[-5rem] max-md:flex-wrap max-md:gap-6">
          {heroCards.map((card) => (
            <Cards title={card.name} content={card.content} icon={card.icon} />
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Hero;
