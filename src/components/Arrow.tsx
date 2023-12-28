export default function Arrow({ color, slim }: { color: string; slim?: boolean }) {
  return (
    <svg
      className="h-12 md:h-[72px] 2xl:h-20 group-hover:rotate-45 transition-transform z-10"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.389 27.5329H51.6629V49.8068M50.1161 29.0797L27.5329 51.6629"
        stroke={color}
        strokeWidth={slim ? "4" : "12"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
