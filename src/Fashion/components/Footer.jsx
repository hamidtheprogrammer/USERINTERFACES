import React from "react";
import Button from "./Button";
import { footNav, styles } from "..";
const Footer = () => {
  const duplicate = (text) => {
    let list = [];
    list.push(text);
    list.push(text);

    return list;
  };
  return (
    <section className="relative w-[100%] roboto mt-48 bg-white py-28">
      <main className={`relative w-[90%] ${styles.flxbtw}`}>
        <div>
          <p>SUBSCRIBE TO NEWS LETTER</p>
          <p className="text-5xl">✉︎</p>
        </div>
        <div className={`${styles.flxbtw} w-[50%]`}>
          {footNav.map((nav) => (
            <div className={`flex flex-col gap-4`}>
              <h1 className="text-sm" key={nav.title}>
                {nav.title}
              </h1>
              <ul className=" ">
                {nav.list.map((list) => (
                  <li className="footer-text max-h-[1.9rem] overflow-hidden">
                    {duplicate(list).map((text) => (
                      <p>{text}</p>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Button
            click={() => {
              console.log("hh");
            }}
          />
        </div>
      </main>
    </section>
  );
};

export default Footer;
