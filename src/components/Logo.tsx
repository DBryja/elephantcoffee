import React from "react";
import LogoNoText from "../images/LogoNoText";
import LogoText from "../images/LogoText";

interface ILogo {
  light?: boolean;
  animate?: boolean;
  text?: boolean;
  className?: string;
}

export default function Logo({ light, text, animate, className }: ILogo) {
  const color = light ? "#FCE8BD" : "#2D393E";

  return (
    <div className={className}>
      {text ? <LogoText animate={animate} color={color} /> : <LogoNoText color={color} />}
    </div>
  );
}
