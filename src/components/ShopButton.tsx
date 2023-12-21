import classNames from "classnames";
export default function ShopButton({ className, dark }: { className?: string; dark?: boolean }) {
  const classes = classNames(
    `group block font-main text-cBeige font-bold text-4xl flex flex-row w-min py-3 pr-8 relative md:text-6xl 2xl:text-7xl
    before:block before:absolute before:content-[''] before:w-full before:h-full before:bg-shopButton before:bg-contain before:bg-no-repeat before:bg-right before:bottom-0`,
    { "text-cOrange-200 before:opacity-25": dark },
    className
  );
  const color = dark ? "#F19100" : "#FCE8BD";

  return (
    <a href="/shop" className={classes}>
      <svg
        className="h-12 md:h-[72px] 2xl:h-20 group-hover:rotate-45 transition-transform z-10"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.389 27.5329H51.6629V49.8068M50.1161 29.0797L27.5329 51.6629"
          stroke={color}
          strokeWidth="12.1875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="z-10">Shop</span>
    </a>
  );
}
