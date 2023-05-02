import React from "react";
import Heading from "../Heading";
import SertifikasiItem from "./SertifikasiItem";
import { SertifikasiItemType } from "./SertifikasiItem/SertifikasiItem";

import ImgSertifikasi1 from "src/assets/img/sertifikasi1.jpg";
import ImgSertifikasi2 from "src/assets/img/sertifikasi2.jpg";
import ImgLegalitas1 from "src/assets/img/Legalitas12.jpg";
import ImgLegalitas2 from "src/assets/img/Legalitas13.jpg";
import ImgLegalitas3 from "src/assets/img/Legalitas14.jpg";
import Spacer from "../Spacer/Spacer";

const Sertifikasi: React.FC = () => {
  const sertifikasi: SertifikasiItemType[] = [
    {
      img: ImgSertifikasi1,
      name: "Sertifikasi 1",
    },
    {
      img: ImgSertifikasi2,
      name: "Sertifikasi 2",
    },
    {
      img: ImgLegalitas1,
      name: "Legalitas 1",
    },
    {
      img: ImgLegalitas2,
      name: "Legalitas 2",
    },
    {
      img: ImgLegalitas3,
      name: "Legalitas 3",
    },
  ];

  return (
    <div className=" px-16 lg:px-32">
      <Spacer />
      <Heading text="Sertifikasi" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sertifikasi.map((item, key) => {
          return <SertifikasiItem item={item} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Sertifikasi;
