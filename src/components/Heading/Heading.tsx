import React from "react";

type HeadingProps = {
  text: string;
  align?: "left" | "center";
};

const Heading: React.FC<HeadingProps> = ({ text, align = "center" }) => {
  return (
    <div
      data-aos="fade-down"
      className={`w-full flex items-center ${
        align === "left" ? "" : "justify-center"
      }  pb-16`}
    >
      <h2
        className={`text-4xl group font-bold capitalize flex flex-col ${
          align === "left" ? "" : "items-center"
        }  gap-4`}
      >
        {text}
        <span className="w-16 group-hover:w-full border-b-2 border-my-yellow transition-all"></span>
      </h2>
    </div>
  );
};

export default Heading;
