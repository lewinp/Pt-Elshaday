import React from "react";
import Heading from "../Heading";
import Spacer from "../Spacer";
import { Heartbeat, Star, Archive } from "phosphor-react";

const VisiMisi: React.FC = () => {
  return (
    <div className=" w-full relative overflow-hidden">
      <div className="absolute w-[200px] h-[300px] bg-gradient-to-tr from-quinary to-my-yellow skew-y-12 -translate-x-44 top-64 -rotate-12"></div>
      <div className="absolute w-[200px] h-[300px]  bg-gradient-to-br from-quinary to-my-yellow -skew-y-12 -translate-x-44 top-[548px] rotate-12"></div>
      <div className="absolute w-[200px] h-[300px]  bg-gradient-to-tl from-quinary to-my-yellow -skew-y-12 translate-x-44 top-64 right-0 rotate-12"></div>
      <div className="absolute w-[200px] h-[300px] bg-gradient-to-bl from-quinary to-my-yellow skew-y-12 translate-x-44 top-[548px] right-0 -rotate-12"></div>
      <div
        data-aos="flip-left"
        className="absolute top-72 flex flex-col items-center justify-center w-[1200px] overflow-hidden  "
      >
        <Star size={128} className="text-my-yellow blur-sm opacity-20" />
        <Heartbeat
          size={96}
          className="text-my-yellow blur-sm -translate-x-56 mt-48 rotate-45 opacity-20"
        />
        <Archive
          size={256}
          className="text-my-yellow blur-sm translate-x-56 mt-48 -rotate-12 opacity-20"
        />
      </div>
      <Spacer />
      <Spacer />
      <div className="w-full flex flex-col items-center px-4 sm:px-16">
        <Heading text="Ruang Lingkup" />
        <p
          data-aos="fade-down"
          className="w-2/3 text-justify sm:text-center text-base sm:text-xl leading-9 font-thin"
        >
          Pengadaan Panel : MVMDP, LVMDP, Capacitor Bank, Panel MCC, Panel
          ATS-AMF, Panel Synchrone Generator, Control Panel, Panel PLC HMI
          SCADA. Pekerjaan Instalasi Elektrikal : Kabel Feeder MV/LV,Kabel Tray
          / Ladder, Instrument / Control Cable Terminasi MV, Instalasi Lighting,
          Grounding System, Lightning Protection Pekerjaan Maintenance /
          Cleaning Panel MV / LV Maitenance Trafo, BDV Test, DGA Test Infrared
          Thermographi Pekerjaan Modifikasi Panel Listrik
        </p>
        <Spacer />

        <Heading text="Visi" />
        <p
          data-aos="fade-down"
          className="w-2/3 text-justify sm:text-center text-base sm:text-xl leading-9 font-thin"
        >
          Menjadikan PT. Elshaday Power Control, selalu mendapatkan prioritas
          dari Customer
        </p>
        <Spacer />

        <Heading text="Misi" />
        <p
          data-aos="fade-down"
          className="w-2/3 text-justify sm:text-center text-base sm:text-xl leading-9 font-thin"
        >
          Membuat kepuasan pelanggan sehingga kepercayaan tumbuh dan membuatnya
          menjadi pelanggan setia, memberikan kepercayaan dengan berdasarkan
          kwalitas, tepat waktu, serta harga yang kompetitif. 
        </p>
      </div>
    </div>
  );
};

export default VisiMisi;
