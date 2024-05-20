import React from "react";
import Button from "./Button";
import { aboutCards } from ".";
import Cards from "./Cards";

const About = () => {
  return (
    <div className="z-[1] flxBtw flex-col backCol max-w-[1440px]">
      <section className="  flxBtw flex-wrap py-[4rem] px-[3rem]">
        <header className="max-w-[46%] flex flex-col items-start gap-[1rem]">
          <h1 className="text-header">
            We apply storytelling and design to create groovy experiences
          </h1>
          <p className="md-content litcol">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            numquam, dolorum voluptate reprehenderit laborum vel asperiores
            aspernatur optio delectus tempore exercitationem consequatur
            voluptas quisquam impedit corrupti vero soluta non! Officiis?
          </p>
          <Button
            name={"ABOUT US"}
            styles={"bg-black text-white mt-[1.2rem]"}
          />
        </header>
        <aside>
          <img
            className="w-[570px] h-[450px] object-cover bg-top"
            src="https://images.unsplash.com/flagged/photo-1553207333-138d9a55e8d0?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </aside>
      </section>
      <section className="flxCenter mt-[6rem] border-[0.01rem] border-gray-300 border-r-0">
        {aboutCards.map((card, index) => (
          <Cards
            about={true}
            index={index}
            aboutContent={card.info}
            aboutValue={card.value}
          />
        ))}
      </section>
    </div>
  );
};

export default About;
