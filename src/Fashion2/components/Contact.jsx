import React from "react";
import Button from "./Button";
import { gallery, contactCards } from ".";
import Cards from "./Cards";

const Contact = () => {
  return (
    <section className="w-[100%] bg-white relative">
      <div className="absolute h-[44%] w-[100%] backCol top-[32%]"></div>
      <div className="w-[100%] flex items-start relative">
        <div className="w-[95%] h-[48rem] relative product-img flex flex-col xl:items-center items-start justify-center text-white">
          <div className="contact-img-overlay"></div>
          <div className="z-2 relative max-w-[50rem] pl-[5rem] flex items-start gap-4 flex-col">
            <p className="tiny-text ">START THE CONVERSATION</p>
            <h1 className="text-header">
              Let's start building binge-worthy experiences for your customers
            </h1>
            <Button
              name={"SCHEDULE A CALL"}
              styles={
                "border-[0.5px] border-[#FFFFFF50] text-white relative top-5"
              }
            />
          </div>
        </div>
      </div>
      <aside className="relative mt-[9rem] flxCenter w-[100%] flex-row gap-9">
        <div className="flex flex-col gap-4 max-w-[10rem] relative top-[-4rem]">
          <p className="tiny-text">LOREM IPSUM</p>
          <h1 className="poppins text-[1.2rem] font-[400]">
            Let's get to know each other
          </h1>
          <a
            href=""
            className="border-b-[1px] pb-[0.5rem] relative tiny-text litCol learnmore"
          >
            FOLLOW US
          </a>
        </div>
        <div className="flxBtw gap-7">
          {gallery.map((pic) => (
            <img
              src={pic}
              className="md:h-[13rem] w-[13rem] object-cover"
              alt="gallery"
            />
          ))}
        </div>
      </aside>
      <section className="bg-white w-[100%] flxCenter mt-[5rem]">
        <main className="flxBtw wrapper w-[100%] px-10">
          <div className="flex flex-col gap-4 max-w-[10rem] relative ">
            <p className="tiny-text">LOREM IPSUM</p>
            <h1 className="poppins text-[1.2rem] font-[400]">
              Let's get to know each other
            </h1>
            <a
              href=""
              className="border-b-[1px] pb-[0.5rem] relative tiny-text litCol learnmore"
            >
              FOLLOW US
            </a>
          </div>
          <div className="flxBtw">
            {contactCards.map((contact) => (
              <Cards
                person={contact.person}
                contact={contact.contact}
                name={contact.name}
                contactType={contact.contactType}
              />
            ))}
          </div>
        </main>
      </section>
    </section>
  );
};

export default Contact;
