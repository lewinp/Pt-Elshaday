import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className=" bg-gradient-to-r from from-quinary/50 to-tertiary/50 absolute z-50 top-0 w-full backdrop-filter backdrop-blur-sm h-16 flex justify-between items-center px-4 sm:px-16 ">
      <div className="text-white">PT. Elshaday Power Control</div>
      <div className="">
        <a
          href="https://drive.google.com/drive/folders/1u3OmQnFr5orkigsPwssVHOhqwf8adwaM?usp=sharing"
          className="px-2 sm:px-4 py-2 flex justify-center items-center border border-white text-white hover:text-tertiary hover:bg-white transition-all duration-300 "
        >
          Download
        </a>
      </div>
    </header>
  );
};

export default Navbar;
