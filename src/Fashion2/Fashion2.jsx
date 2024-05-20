import React from "react";
import "./Fashion2.css";
import {
  Nav,
  Hero,
  About,
  Product,
  Contact,
  Footer,
  Background,
} from "./components/exports";

const Fashion2 = () => {
  return (
    <section className="w-[100%] flxBtw flex-col backCol overflow-hidden">
      <Background />
      <Nav />
      <Hero />
      <About />

      <Product />
      {/* <div className="w-[100%] h-[100vh] flxBtw flex-col backCol z-[1]"></div> */}
      <Contact />
      <Footer />
    </section>
  );
};

export default Fashion2;
