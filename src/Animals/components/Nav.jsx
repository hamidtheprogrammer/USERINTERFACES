import React, { useEffect, useState } from "react";
import { NavItems } from "../constants";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const navItems = document.querySelectorAll(`.nav-items`);

    navItems.forEach((item, index) => {
      if (showNav) {
        setTimeout(() => {
          item.classList.add(`active`);
        }, index * 100);
      } else {
        setTimeout(() => {
          item.classList.remove(`active`);
        }, index * 100);
      }
    });

    return () => {};
  }, [showNav]);

  return (
    <nav className="fixed w-[100%] z-[99] text-white flxCenter bg-black border-b-[1px] border-gray-500">
      <section className="page-wrapper flxBtw  py-6  max-md:py-4">
        <section
          className={`${
            showNav ? "opacity-[1]" : "opacity-0 pointer-events-none"
          } fixed h-[100%] w-[100%] flxCenter top-0 left-0 bg-black dynamic-nav`}
        >
          <ul className="page-wrapper w-[100%] h-[100%] text-white poppins flex flex-col gap-5 pt-[8rem] sm:text-[1.1rem] md:text-[1.4rem] font-[500]">
            {NavItems.map((item) => (
              <li
                key={item}
                className="nav-items relative left-[-50%] transition-[0.8s] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <h1 className="relative z-[999] cursor-pointer poppins text-[1.35rem] font-[700]">
          LOGO/LOGO
        </h1>
        <h1
          onClick={() => {
            setShowNav((prevNav) => (prevNav = !prevNav));
          }}
          className="cursor-pointer poppins text-[1.13rem] font-[600] z-[999]"
        >
          MENU
        </h1>
      </section>
    </nav>
  );
};

export default Nav;
