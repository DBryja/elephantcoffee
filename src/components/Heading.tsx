import classNames from "classnames";

interface IHeading {
  children: any;
  className?: string;
}
export default function Heading({ children, className }: IHeading) {
  const classes = classNames(
    "text-6xl md:text-8xl lg:text-9xl xl:text-[13rem] lg:leading-[0.8] font-headings text-cBeige",
    className
  );
  return <h1 className={classes}>{children}</h1>;
}
