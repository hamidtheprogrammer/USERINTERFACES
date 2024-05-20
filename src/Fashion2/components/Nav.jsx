import React, { useEffect } from "react";
import Button from "./Button";
import NavDrop from "./NavDrop";
import { useState } from "react";
import { NavItems } from ".";
const Nav = () => {
  const [currentNav, setcurrentNav] = useState("services");
  const [navDrop, setNavDrop] = useState(false);
  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      setScrollTop(
        (prevScrollTop) => (prevScrollTop = scrollTop > 0 ? false : true)
      );
    });
  });

  const toggleNavDrop = () => {
    setNavDrop((prevNavDrop) => (prevNavDrop = !prevNavDrop));
  };

  return (
    <nav
      className={`wrapper fixed nav flxBtw text-white w-[94.2%] py-[1.1rem] z-[4] border-b-[0.003rem] border-gray-400 ${
        !scrollTop && " px-3 shadow-xl scale-[0.97] border-b-0 bg-white"
      }`}
    >
      <h1 className={`text-[1.3rem] font-bold ${!scrollTop && "text-black"} `}>
        LOGO
      </h1>
      <ul
        className={`max-lg:hidden flxBtw gap-[2.7rem] titles ${
          !scrollTop && "text-black"
        } `}
      >
        {NavItems.map((item) => (
          <li className="flxBtw gap-2 point relative" key={item.name}>
            <a href={item.href}>{item.name}</a>
            {item.dropdown && (
              <p className="relative top-[-0.15rem] font-bold">
                {item.dropdown}
              </p>
            )}
            {item.sub && currentNav === item.name.toLowerCase() && (
              <ul className=" absolute bg-white top-[290%] flxBtw flex-col">
                {item.sub.map((sub) => (
                  <li
                    className="border-b-[1px] py-[1.2rem] px-[5rem] litcol"
                    key={sub.name}
                  >
                    <a href={sub.href}>{sub.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <NavDrop isOpen={navDrop} />
      <div className="flxBtw relative gap-[1.4rem]">
        <Button
          name="LET'S TALK"
          styles={` litcol ${!scrollTop ? "bg-black text-white" : "bg-white"} `}
        />
        <div className="lg:hidden h-[2.5rem] w-[0.5px] bg-gray-400 opacity-[0.4]"></div>
        <button onClick={toggleNavDrop} className="lg:hidden text-3xl">
          Ξ
        </button>
      </div>
    </nav>
  );
};

export default Nav;
