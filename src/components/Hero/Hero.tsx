import { CaretDoubleDown } from "phosphor-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-[600px] bg-hero bg-center bg-no-repeat bg-cover skew-y-6 relative w-full -translate-y-16">
      <div className="absolute z-10 w-full h-full flex flex-col gap-2 sm:gap-5 items-center justify-center p-2 -skew-y-6">
        <h1
          data-aos="fade-up"
          className="uppercase text-4xl sm:text-6xl font-bold text-center text-white"
        >
          PT. Elshaday Power Control
        </h1>
        <p data-aos="fade-up" className="text-white text-lg text-center">
          Engineering, Procurement & Construction Of Electrical SwitchBoard &
          Electrical Installation.
        </p>
      </div>
      <span className="w-full h-full absolute bg-gradient-to-t from-tertiary to-my-yellow/40 "></span>
      <div className="absolute bottom-0 flex justify-center items-center  w-full">
        <CaretDoubleDown
          size={32}
          className="absolute bottom-16 animate-bounce mx-auto text-white"
        />
      </div>
    </section>
  );
};

export default Hero;
