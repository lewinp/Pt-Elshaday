import React from "react";
import Heading from "../Heading";
import ProdukItem from "./ProdukItem";
import { ProdukItemType } from "./ProdukItem/ProdukItem";

import ImgMccpanel from "src/assets/img/MCC Panel.jpg";
import ImgMsbpanel from "src/assets/img/MSB Panel.jpg";
import ImgPlcHmi from "src/assets/img/PLC & HMI Control Panel.jpg";
import ImgMccPanel2 from "src/assets/img/MCC Panel2.jpg";
import ImgMvpanel20 from "src/assets/img/MV Panel20KV.jpg";
import ImgTransformers from "src/assets/img/Transformers.jpg";
import ImgMVPanel202 from "src/assets/img/MV Panel20KV2.jpg";
import ImgMainSwitchboard from "src/assets/img/Main SwitchBoard.jpg";
import ImgMsbcap from "src/assets/img/MSB + CAP BANK.jpg";
import ImgDistribution from "src/assets/img/Distribution Board.jpg";
import ImgFco from "src/assets/img/FCO & Arrester 20KV.jpg";
import ImgTrafo from "src/assets/img/Trafo & Cable 20KV.jpg";
import ImgLightning from "src/assets/img/Lightning Protection.jpg";
import ImgOutdoor from "src/assets/img/Outdoor Lightning.jpg";
import ImgIndoorLightning from "src/assets/img/Indoor Lightning.jpg";
import ImgDBLight from "src/assets/img/DB Lightning.jpg";
import Imgcleaning from "src/assets/img/Cleaning Cubicle 20KV.jpg";
import Imgpanel18 from "src/assets/img/panel 18.jpg";
import Spacer from "../Spacer";

const Produk: React.FC = () => {
  const produk: ProdukItemType[] = [
    {
      img: ImgMccpanel,
      name: "MCC Panel",
    },
    {
      img: ImgMsbpanel,
      name: "MSB Panel",
    },
    {
      img: ImgPlcHmi,
      name: "PLC & HMI Control Panel",
    },
    {
      img: ImgMccPanel2,
      name: "MV Panel20KV",
    },
    {
      img: ImgMvpanel20,
      name: "MV Panel20KV",
    },
    {
      img: ImgTransformers,
      name: "Transformers",
    },
    {
      img: ImgMVPanel202,
      name: "MV Panel20KV",
    },
    {
      img: ImgMainSwitchboard,
      name: "Main SwitchBoard",
    },
    {
      img: ImgMsbcap,
      name: "MSB + CAP. BANK",
    },
    {
      img: ImgDistribution,
      name: "Distribution Board",
    },
    {
      img: ImgFco,
      name: "FCO & ARRESTER 20KV",
    },
    {
      img: ImgTrafo,
      name: "Travo & Cable",
    },

    {
      img: ImgLightning,
      name: "Lightning Protection",
    },
    {
      img: ImgOutdoor,
      name: "Outdoor Lightning",
    },
    {
      img: ImgIndoorLightning,
      name: "Indoor Lightning",
    },
    {
      img: ImgDBLight,
      name: "DB-Lightning",
    },
    {
      img: Imgcleaning,
      name: "Cleaning Cubicle 20KV",
    },
    {
      img: Imgpanel18,
      name: "Cleaning Cubicle 20KV",
    },
  ];

  return (
    <div className=" px-16  lg:px-32">
      <Spacer />
      <Heading text="Produk Kami" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {produk.map((item, key) => {
          return <ProdukItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Produk;
