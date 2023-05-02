import React from "react";

export type SertifikasiItemType = {
  img: string;
  name: string;
};

type SertifikasiItemProps = {
  item: SertifikasiItemType;
};

const SertifikasiItem: React.FC<SertifikasiItemProps> = ({ item }) => {
  return (
    <div
      data-aos="zoom-in"
      className="w-full group p-2 border border-my-yellow relative overflow-hidden"
    >
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={item.img}
          className="object-cover aspect-square w-full group-hover:scale-105 transition-all duration-500"
          alt=""
        />
      </div>
      <div className="absolute opacity-0 left-0 group-hover:opacity-100 transition-all duration-500 bottom-0 w-full bg-gradient-to-t from-tertiary to-tertifrom-my-yellow/10 h-32 flex justify-center items-center">
        <p className="font-semibold text-2xl text-white">{item.name}</p>
      </div>
    </div>
  );
};

export default SertifikasiItem;
