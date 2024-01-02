interface ILogoNoText {
  color?: string;
  className?: string;
}
export default function LogoNoText({ color }: ILogoNoText) {
  if (!color) color = "#FCE8BD";
  return (
    <svg className="h-full" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M239.273 455.226C121.239 455.881 22.4158 357.82 22.0466 239.154C21.6654 122.489 116.474 23.0353 237.427 21.868C356.308 20.7246 454.154 118.642 455.178 237.856C456.167 352.306 360.953 455.869 239.273 455.226ZM46.5111 238.118C47.4877 343.766 130.076 429.701 238.976 430.976C342.575 432.179 430.666 344.671 430.797 240.25C430.94 128.135 339.132 45.9514 239.071 46.1539C135.722 46.3444 47.5473 129.755 46.5111 238.118Z"
        fill={color}
      />
      <path
        d="M264.965 265.001C257.723 263.583 250.422 262.154 242.048 260.51C242.048 265.775 242.406 271.254 241.989 276.673C240.107 300.947 221.443 311.142 200.969 297.934C190.308 291.061 181.685 281.02 172.18 272.361C163.402 264.381 154.672 256.341 145.905 248.326C145.465 247.921 144.929 247.635 144.524 247.206C137.246 239.512 129.767 232.437 120.5 226.672C110.173 220.252 109.113 208.663 111.531 197.253C114.723 182.221 123.204 169.965 133.03 158.662C151.718 137.151 173.705 119.821 199.515 107.47C226.588 94.5112 254.543 94.5588 283.247 100.764C311.904 106.97 331.605 124.181 345.612 149.05C377.413 205.495 382.297 265.394 366.277 327.055C358.654 356.379 341.907 380.51 313.084 393.671C293.848 402.45 273.481 403.236 252.959 399.424C239.523 396.923 226.207 393.707 212.891 390.599C205.614 388.907 202.981 385.763 203.613 380.415C204.22 375.186 208.532 371.148 215.309 371.887C225.898 373.042 236.403 375.281 246.825 377.58C262.058 380.927 277.304 383.464 292.812 380.022C317.598 374.519 333.225 358.297 342.884 335.738C353.663 310.547 355.736 283.903 354.58 256.913C353.104 222.289 344.945 189.57 327.114 159.412C314.561 138.164 297.254 125.05 272.647 120.119C241.774 113.937 213.975 119.607 188.188 137.02C186.152 138.39 184.305 140.046 180.947 142.69C188.319 142.69 193.87 142.023 199.182 142.868C204.935 143.798 210.89 145.37 215.94 148.145C219.192 149.932 221.836 154.088 223.134 157.757C223.968 160.103 222.646 164.165 220.859 166.201C219.633 167.607 215.642 167.738 213.427 166.952C201.921 162.867 190.082 162.688 178.136 163.164C157.911 163.986 146.227 176.218 138.104 193.167C137.163 195.132 136.413 197.193 135.674 199.242C132.518 208.127 132.97 209.139 140.832 214.059C143.333 215.619 145.643 217.56 147.764 219.621C166.237 237.475 184.639 255.4 203.112 273.255C205.09 275.172 207.317 276.899 209.639 278.388C215.773 282.354 220.097 281.151 220.383 274.005C220.836 262.642 219.787 251.148 218.501 239.798C217.846 233.973 215.071 228.423 213.737 222.634C213.213 220.359 213.117 216.572 214.392 215.631C216.202 214.309 220.121 213.928 222.003 215.047C227.041 218.037 231.698 221.789 236.081 225.707C239.309 228.59 241.763 232.33 244.764 235.486C255.65 246.968 271.384 246.587 281.806 234.688C282.461 233.937 283.104 233.187 283.724 232.413C289.763 224.933 295.599 224.957 299.446 233.914C302.829 241.822 307.128 244.455 315.394 243.061C318.015 242.62 321.159 245.265 324.065 246.503C322.886 249.124 321.516 251.672 320.587 254.376C319.944 256.27 319.277 258.509 319.694 260.355C322.005 270.587 329.092 276.685 339.621 277.852C341.788 278.09 344.135 277.662 346.112 278.364C348.327 279.15 351.698 280.675 351.912 282.223C352.282 284.951 351.484 288.965 349.59 290.585C346.767 293.002 342.646 294.753 338.918 295.099C333.582 295.599 332.546 297.767 332.736 302.65C333.26 315.883 331.402 328.734 325.387 340.8C320.075 351.46 312.393 359.75 301.733 365.074C290.513 370.696 279.114 371.756 268.538 363.895C257.973 356.046 255.388 344.588 257.651 332.451C258.962 325.423 262.106 318.515 265.596 312.191C268.764 306.438 269.717 301.197 268.49 294.682C266.644 285.034 266.096 275.113 264.965 265.001ZM289.072 256.496C288.595 256.496 288.119 256.508 287.642 256.508C287.023 259.534 285.701 262.595 285.903 265.56C286.547 274.636 287.226 283.772 288.941 292.693C290.739 302.031 289.155 310.213 284.569 318.396C281.699 323.518 278.84 329.128 278.09 334.797C277.554 338.894 279.353 344.492 282.152 347.541C285.594 351.281 290.692 348.709 294.682 346.243C305.103 339.8 310.725 329.854 311.44 318.17C312.214 305.437 316.895 291.478 304.651 280.854C302.745 279.198 301.256 276.947 299.922 274.755C296.218 268.729 292.681 262.595 289.072 256.496Z"
        fill={color}
      />
      <path
        d="M315.8 184.234C315.8 184.627 315.907 185.068 315.788 185.413C314.859 188.01 313.894 190.595 312.941 193.179C310.857 191.321 308.391 189.725 306.771 187.522C304.365 184.258 302.543 181.173 297.469 181.721C295.158 181.971 290.489 179.708 290.513 178.696C290.609 175.575 291.561 171.359 293.777 169.62C301.245 163.76 311.917 167.583 314.799 176.647C315.561 179.053 315.692 181.662 316.109 184.175C316.014 184.21 315.907 184.222 315.8 184.234Z"
        fill={color}
      />
    </svg>
  );
}
