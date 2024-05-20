import React from "react";
import "./Animals.css";
import { Hero, Nav, Gallery } from "./components/Imports.jsx";
import { useContext } from "react";
import { backgroundContext } from "./components/Background.jsx";

const Animals = () => {
  const { background, bgOpacity } = useContext(backgroundContext);

  return (
    <section className="w-[100%]  bg-[#f4f4f4ff] flex items-center flex-col poppins">
      <div className="absolute  w-[100%] h-[200%] ">
        <video
          className="sticky top-0 left-0 w-[100%] h-[50%] object-cover"
          src={
            "https://videos.pexels.com/video-files/7427471/7427471-uhd_3840_2160_25fps.mp4"
          }
          autoPlay
          muted
          loop
          id="background-video"
        ></video>
        <div
          className={`absolute z w-[100%] h-[100%] top-0 left-0 bg-black opacity-[0.3] pointer-events-none`}
        ></div>
      </div>
      <Nav />
      <Hero />
      <Gallery />
    </section>
  );
};

export default Animals;
