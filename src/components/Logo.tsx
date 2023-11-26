import React from "react";
import LogoNoText from "../images/LogoNoText";
import LogoText from "../images/LogoText";

interface ILogo {
  light?: boolean;
  animate?: boolean;
  text?: boolean;
}

export default function Logo({ light, text, animate }: ILogo) {
  const color = light ? "#FCE8BD" : "#2D393E";

  return <>{text ? <LogoText animate={animate} color={color} /> : <LogoNoText color={color} />}</>;
}
