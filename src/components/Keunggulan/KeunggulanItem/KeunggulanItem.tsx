import React from "react";

export type KeunggulanItemType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type KeunggulanItemProps = {
  keunggulan: KeunggulanItemType;
};

const KeunggulanItem: React.FC<KeunggulanItemProps> = ({ keunggulan }) => {
  return (
    <div data-aos="fade-up" className="flex items-start gap-4">
      <div className="">{keunggulan.icon}</div>
      <div className="space-y-2">
        <h3 className="font-bold text-2xl">{keunggulan.title}</h3>
        <p className="font-light ">{keunggulan.description}</p>
      </div>
    </div>
  );
};

export default KeunggulanItem;
