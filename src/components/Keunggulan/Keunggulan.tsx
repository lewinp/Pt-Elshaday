import React from "react";
import KeunggulanItem from "./KeunggulanItem";
import { KeunggulanItemType } from "./KeunggulanItem/KeunggulanItem";
import {
  Star,
  CurrencyCircleDollar,
  Heartbeat,
  PersonSimple,
  Person,
} from "phosphor-react";

const Keunggulan: React.FC = () => {
  const keunggulans: KeunggulanItemType[] = [
    {
      title: "Kualitas Terbaik",
      icon: <Star size={56} className="text-my-yellow" />,
      description: "Perusahaan Ini Mengedepankan Kualitas dan Ketepatan Waktu",
    },
    {
      title: "Harga Terjangkau",
      icon: <CurrencyCircleDollar size={56} className="text-my-yellow" />,
      description:
        "Harga terjangkau dan terbaik untuk membuat seluruh customer merasa puas",
    },
    {
      title: "Tenaga Yang Professional",
      icon: <Person size={56} className="text-my-yellow" />,
      description:
        "Perusahaan Didukung dengan Tenaga-tenaga yang professional dan terlatih dalam bidangnya",
    },
  ];

  return (
    <section className="w-full px-20 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
      {keunggulans.map((unggul, key) => {
        return <KeunggulanItem keunggulan={unggul} key={key} />;
      })}
    </section>
  );
};

export default Keunggulan;
