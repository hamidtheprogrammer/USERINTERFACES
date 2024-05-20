import React from "react";
import Button from "./Button";

const Cards = ({
  title,
  content,
  icon,
  about,
  index,
  aboutContent,
  aboutValue,
  product,
  img,
  date,
  header,
  contact,
  name,
  person,
  contactType,
}) => {
  const heroCard = () => (
    <div className="bg-white flxCenter flex-col pb-[2.5rem] cursor-pointer litcol">
      <header className="titles border-b-[1px] w-[85%] flxCenter py-[1.8rem] ">
        {title}
      </header>
      <main className="border-r-[1px] px-[2.5rem] small-content flex items-start flex-col gap-[2rem]">
        <section className="mt-[4rem]">{icon}</section>
        <p className="mt-[2rem]">{content}</p>
        <a
          href=""
          className="border-b-[1px] pb-[0.5rem] relative tiny-text litCol learnmore"
        >
          LEARN MORE
        </a>
      </main>
    </div>
  );

  const aboutCard = () => (
    <div className="cursor-pointer  border-gray-300 border-r-[0.01rem] ">
      <div className="about-card min-w-[18rem] min-h-[17rem] flxBtw flex-col items-start  h-[15rem] py-[1.5rem] px-[2.5rem]">
        <p className="small-content litcol tracking-[0.1rem]">{`0${index}`}</p>
        <div className="flxBtw w-[100%] text-header font-[400]">
          <p>{aboutValue}</p>
          <p className="max-w-[6rem] text-right small-content leading-[1.2rem] litcol">
            {aboutContent}
          </p>
        </div>
      </div>
    </div>
  );

  const productCard = () => (
    <div className="cursor-pointer max-w-[30%] max-h-[30%] flxCenter flex-col gap-3">
      <div className="rot ">
        <img src={img} className="object-cover aspect-square" alt="" />
      </div>
      <p className="tiny-text relative w-[80%] flex flex-row justify-center items-center gap-2 litcol">
        <span>{title}</span>
        <div className="relative h-[0.05rem] w-[20%] bg-gray-400"></div>
        <span>{date}</span>
      </p>
      <h1 className="text-semi-header font-[400]">{header}</h1>
    </div>
  );

  const contactCard = () => (
    <div className="cursor-pointer  border-gray-300 border-[0.1rem] ">
      <div className="min-w-[18rem] min-h-[17rem] flxBtw flex-col items-center   h-[15rem] py-[1.5rem] px-[2.5rem]">
        <h1>{name}</h1>
        <p>{person}</p>
        <Button
          name={contactType}
          styles={"border-[0.5px] border-gray-200 relative"}
        />
      </div>
      <div>
        <p>{contact}</p>
      </div>
    </div>
  );

  return about
    ? aboutCard()
    : product
    ? productCard()
    : contact
    ? contactCard()
    : heroCard();
};

export default Cards;
