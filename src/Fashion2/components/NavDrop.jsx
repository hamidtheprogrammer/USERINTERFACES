import React from "react";
import { NavItems } from ".";

const NavDrop = (isOpen) => {
  return (
    <section
      className={`absolute nav-drop ${
        isOpen === true ? "top-[5rem]" : "top-[-17rem]"
      } w-[100%] z-[-10] bg-white litcol`}
    >
      <ul className="lg:hidden flxBtw flex-col titles">
        {NavItems.map((item) => (
          <li
            className="flex justify-center gap-2 border-b-[0.05rem] point relative py-[1.3rem] w-[100%]"
            key={item.name}
          >
            <a href={item.href}>{item.name}</a>
            {item.dropdown && (
              <p className="relative top-[-0.15rem] font-bold">
                {item.dropdown}
              </p>
            )}
            {/* {item.sub && (
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
            )} */}
          </li>
        ))}
      </ul>
    </section>
  );
};
// currentNav === item.name.toLowerCase() &&

export default NavDrop;
