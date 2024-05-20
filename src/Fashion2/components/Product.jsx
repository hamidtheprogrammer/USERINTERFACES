import React, { useEffect } from "react";
import Button from "./Button.jsx";
import Cards from "./Cards.jsx";
import { productCards } from "./index.js";
import { heroCards } from "./index.js";

const Product = () => {
  useEffect(() => {
    const divs = document.querySelector(`.product-bg`);
    const leftDiv = divs.firstElementChild;
    const rightDiv = divs.lastElementChild;

    rightDiv.addEventListener("mousemove", (e) => {
      const button = rightDiv.querySelector(`button`);
      button.style.left = `${e.clientX}px`;
      button.style.top = `${e.clientY}px`;
    });

    leftDiv.addEventListener("mousemove", (e) => {
      const button = leftDiv.querySelector(`button`);
      button.style.left = `${e.clientX}px`;
      button.style.top = `${e.clientY}px`;
    });

    rightDiv.addEventListener("mouseleave", (e) => {
      const button = leftDiv.querySelector(`button`);
      button.style.left = `0px`;
      button.style.left = `0px`;
    });

    leftDiv.addEventListener("mouseleave", (e) => {
      const button = leftDiv.querySelector(`button`);
      button.style.top = `0px`;
      button.style.left = `0px`;
    });
  });
  return (
    <section className="w-[100vw] relative ">
      <main className="product-main relative w-[100%] h-[53rem] mt-[9rem] flxCenter">
        <h1 className="sub-header text-center max-w-[47%] text-white z-[1]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend
          neque pulvinar."
        </h1>
        <p className="tiny-text explore-small-text absolute bottom-[20%] left-[2.29%] rotate-90 text-white z-[1]">
          EXPLORE
        </p>
        <div className="w-[100%] h-[100%] absolute bg-black product-bg top-0 left-0 flxBtw">
          <div className="circularBtn-detector relative">
            <Button circular={true} left={true} />
          </div>
          <div className="circularBtn-detector relative">
            <Button circular={true} left={false} />
          </div>
        </div>
      </main>
      <body className="flxCenter relative  z-[1]">
        <section className="flxCenter wrapper w-[90%] flex-wrap gap-12 bg-white relative top-[-5rem] py-14 ">
          {productCards.map((prod) => (
            <Cards
              product
              title={prod.title}
              img={
                "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              date={prod.date}
              header={prod.header}
            />
          ))}
        </section>
      </body>
      <aside className="flex flxCenter bg-white top-[-5rem] relative py-[4rem] px-[5rem]">
        <section className="wrapper flex justify-between flex-row flex-nowrap relative">
          <header className="max-w-[46%] h-[100vh] relative ">
            <div className="flex flex-col items-start gap-[1rem] pt-[5rem] sticky top-10">
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
            </div>
          </header>

          <section className=" flxCenter flex-col w-[40%] max-w-[90%] relative  max-md:flex-wrap max-md:gap-6">
            {heroCards.map((card) => (
              <Cards
                title={card.name}
                content={card.content}
                icon={card.icon}
              />
            ))}
          </section>
        </section>
      </aside>
    </section>
  );
};

export default Product;
