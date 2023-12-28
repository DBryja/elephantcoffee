import classNames from "classnames";
import ArrowLink from "./ArrowLink";

export default function ShopButton({ className, dark }: { className?: string; dark?: boolean }) {
  const classes = classNames(
    `text-4xl md:text-6xl 2xl:text-7xl pr-8
    before:block before:absolute before:content-[''] before:w-full before:h-full before:bg-shopButton before:bg-contain before:bg-no-repeat before:bg-right before:bottom-0`,
    { "text-cOrange-200 before:opacity-25": dark },
    className
  );

  return (
    <ArrowLink href="/shop" dark={dark} className={classes}>
      Shop
    </ArrowLink>
  );
}
