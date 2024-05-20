import React from "react";
import { styles } from "..";

const Nav = () => {
  return (
    <nav
      className={`${styles.flxbtw} relative py-5 px-7 max-lg:pt-10 max-lg:px-12`}
    >
      <h1 className="max-md:text-2xl -left-7 top-8 relative -rotate-90 fjalla-one-regular text-2xl max-lg:rotate-0 max-lg:text-4xl ">
        LOGO LOGO
      </h1>
      <button
        className={`max-md:text-2xl ${styles.flxCenter} text-3xl lg:hidden`}
      >
        ︾
      </button>
      <button
        className={`bg-[#e7d6c4] h-4 ${styles.flxCenter} permanent-marker-regular max-lg:hidden`}
      >
        Dark mode
      </button>
      <button className="max-md:text-sm max-md:font-medium roboto-thin text-xs font-medium max-lg:text-xl max-lg:font-normal">
        CART
      </button>
    </nav>
  );
};

export default Nav;
