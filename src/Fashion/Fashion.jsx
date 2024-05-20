import React from "react";
import "./Fashion.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Footer from "./components/Footer";

const Fashion = () => {
  return (
    <section className="w-[100%] bg-[#fcf9ee]">
      <Nav />
      <Hero />
      <Product />
      <Footer />
    </section>
  );
};

export default Fashion;
