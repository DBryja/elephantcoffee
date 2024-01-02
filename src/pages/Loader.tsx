import React, { useEffect } from "react";
import LogoText from "../images/LogoText";

export const Loader = () => {
  useEffect(() => {
    //  window.onload = (e) => {
    //    setTimeout(() => {
    //      document.querySelector(".loader")?.classList.add("active");
    //    }, 500);
    //  };
  }, []);
  return (
    <div className="loader bg-cBeige fixed z-50 inset-0 flex justify-center items-center transition-opacity duration-300">
      <LogoText animate color="#3D393E" className="max-w-[50vw] max-h-[50vh]" />
    </div>
  );
};
