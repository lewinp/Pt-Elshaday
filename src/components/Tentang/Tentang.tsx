import React from "react";
import Galeri from "../Galeri";
import Heading from "../Heading";
import Spacer from "../Spacer";

const Tentang: React.FC = () => {
  return (
    <div className="px-16 sm:px-24">
      <Spacer />
      <Spacer />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        <div className="">
          <Heading text="Tentang Kami" align="left" />
          <p data-aos="fade-right" className="font-thin  eading-9 text-justify">
            Berawal dari sebuah usaha dalam lingkup kecil yang mempunyai
            pengalaman dalam bidang Panel Listrik, sebelumnya bernama : CV.
            Elshaday Multi Control yang telah mulai menggagas bidang usaha ini
            sejak tahun 2013, dan saat ini bernama : PT. ELSHADAY POWER CONTROL
            Pada awalnya hanya merupakan subcontractor Jasa di berbagai
            perusahaan Panel Maker dan Kontraktor Mekanikal Elektrikal. Seiring
            dengan perkembangannya dan untuk meyakinkan Customer kami, maka
            perusahaan ini telah resmi terdaftar di Instansi terkait pada tahun
            2016. Dengan didukung tenaga tenaga professional dan terlatih dalam
            bidangnya maka PT. Elshaday Power Control selalu mengedepankan
            kwalitas dan ketepatan waktu serta harga yang terbaik untuk membuat
            seluruh Customer kami merasa puas.{" "}
          </p>
        </div>
        <Galeri />
      </div>
    </div>
  );
};

export default Tentang;
