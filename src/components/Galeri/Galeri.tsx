import React from "react";
import ImgParkiran from "src/assets/img/panel1.png";
import ImgTank from "src/assets/img/corporate.png";
import ImgProyek1 from "src/assets/img/corporate.png";

const Galeri: React.FC = () => {
  const images = [ImgParkiran, ImgTank];

  return (
    <div data-aos="fade-up" className="w-full grid grid-cols-2 aspect-square">
      {images.map((img, key) => {
        return (
          <div key={key} className="w-full group aspect-square overflow-hidden">
            <img
              src={img}
              className="object-cover aspect-square w-full group-hover:scale-105 transition-all duration-500"
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Galeri;
