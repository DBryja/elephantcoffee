import classNames from "classnames";

import Arrow from "./Arrow";

interface IArrowLink {
  href: string;
  children: string | JSX.Element;
  slim?: boolean;
  dark?: boolean;
  className?: string;
}

export default function ArrowLink({ href, children, dark, slim, className }: IArrowLink) {
  const classes = classNames(
    "group block font-main text-cBeige font-bold flex flex-row w-min h-min lg:py-3 relative text-xl md:text-2xl lg:text-4xl items-center",
    className
  );
  const color = dark ? "#F19100" : "#FCE8BD";
  return (
    <a href={href} className={classes}>
      <Arrow color={color} slim={slim} />
      <span className="z-10 h-min">{children}</span>
    </a>
  );
}
