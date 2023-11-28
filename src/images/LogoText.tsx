import React from "react";
import classNames from "classnames";

interface ILogoText {
  color: string;
  animate?: boolean;
  className?: string;
}
export default function LogoText({ color, animate, className }: ILogoText) {
  const classess = classNames("origin-center", { "animate-spin-slow": animate });
  return (
    <svg
      className="h-full [&>*]:transition-color [&>*]:duration-1000"
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M236.904 399.358C150.101 399.839 77.4262 327.726 77.1547 240.458C76.8744 154.663 146.597 81.5241 235.546 80.6657C322.971 79.8248 394.927 151.834 395.68 239.504C396.407 323.67 326.387 399.831 236.904 399.358ZM95.1459 239.696C95.8641 317.39 156.6 380.587 236.685 381.524C312.871 382.409 377.654 318.055 377.75 241.264C377.855 158.815 310.34 98.3766 236.755 98.5255C160.752 98.6657 95.9079 160.006 95.1459 239.696Z"
        fill={color}
      />
      <path
        d="M255.797 259.466C250.472 258.423 245.102 257.372 238.945 256.164C238.945 260.035 239.207 264.064 238.901 268.05C237.517 285.901 223.791 293.399 208.734 283.685C200.895 278.631 194.553 271.247 187.564 264.879C181.108 259.01 174.688 253.098 168.241 247.203C167.917 246.905 167.523 246.695 167.225 246.38C161.873 240.721 156.372 235.518 149.558 231.279C141.964 226.558 141.184 218.035 142.962 209.644C145.31 198.59 151.546 189.577 158.772 181.264C172.515 165.445 188.685 152.701 207.666 143.618C227.575 134.088 248.133 134.123 269.242 138.686C290.317 143.25 304.805 155.907 315.105 174.196C338.492 215.705 342.083 259.755 330.302 305.101C324.697 326.666 312.381 344.412 291.184 354.091C277.038 360.546 262.06 361.124 246.968 358.321C237.088 356.482 227.295 354.117 217.502 351.831C212.151 350.587 210.215 348.274 210.679 344.342C211.126 340.496 214.297 337.527 219.28 338.07C227.067 338.92 234.793 340.566 242.457 342.257C253.66 344.718 264.872 346.584 276.276 344.053C294.504 340.006 305.996 328.076 313.099 311.486C321.026 292.961 322.551 273.366 321.701 253.518C320.615 228.055 314.615 203.994 301.502 181.816C292.27 166.19 279.543 156.546 261.447 152.92C238.743 148.374 218.299 152.543 199.336 165.349C197.838 166.356 196.48 167.574 194.01 169.518C199.432 169.518 203.514 169.028 207.421 169.65C211.651 170.333 216.031 171.489 219.745 173.53C222.136 174.844 224.08 177.901 225.035 180.599C225.648 182.324 224.676 185.311 223.362 186.809C222.46 187.842 219.526 187.939 217.897 187.361C209.435 184.356 200.729 184.225 191.943 184.575C177.07 185.18 168.478 194.175 162.504 206.639C161.812 208.085 161.26 209.6 160.717 211.107C158.396 217.641 158.729 218.385 164.51 222.003C166.349 223.15 168.048 224.578 169.607 226.093C183.193 239.223 196.726 252.406 210.311 265.536C211.765 266.946 213.403 268.216 215.111 269.311C219.622 272.228 222.802 271.343 223.012 266.088C223.345 257.731 222.574 249.279 221.628 240.931C221.146 236.648 219.105 232.566 218.124 228.309C217.739 226.637 217.669 223.851 218.606 223.159C219.937 222.187 222.819 221.907 224.203 222.73C227.908 224.928 231.333 227.688 234.556 230.569C236.93 232.689 238.734 235.439 240.942 237.761C248.948 246.204 260.518 245.924 268.183 237.174C268.664 236.622 269.137 236.07 269.593 235.501C274.034 230 278.326 230.018 281.155 236.604C283.642 242.42 286.805 244.356 292.883 243.331C294.81 243.007 297.123 244.952 299.26 245.863C298.393 247.79 297.386 249.664 296.702 251.653C296.229 253.045 295.739 254.692 296.045 256.05C297.745 263.574 302.956 268.058 310.699 268.917C312.294 269.092 314.019 268.777 315.473 269.293C317.102 269.872 319.581 270.993 319.739 272.131C320.01 274.137 319.424 277.089 318.031 278.28C315.955 280.058 312.924 281.346 310.183 281.6C306.259 281.968 305.496 283.562 305.637 287.153C306.022 296.885 304.656 306.336 300.232 315.209C296.326 323.048 290.676 329.145 282.837 333.06C274.586 337.194 266.203 337.974 258.425 332.193C250.656 326.42 248.755 317.994 250.419 309.069C251.383 303.901 253.695 298.82 256.261 294.169C258.591 289.939 259.292 286.085 258.39 281.293C257.032 274.199 256.629 266.902 255.797 259.466ZM273.526 253.212C273.175 253.212 272.825 253.22 272.475 253.22C272.019 255.445 271.047 257.696 271.196 259.877C271.669 266.552 272.168 273.27 273.429 279.831C274.752 286.698 273.587 292.715 270.215 298.733C268.104 302.499 266.002 306.625 265.45 310.794C265.056 313.807 266.378 317.924 268.437 320.166C270.968 322.917 274.717 321.025 277.651 319.212C285.315 314.473 289.45 307.159 289.975 298.566C290.545 289.203 293.987 278.937 284.983 271.124C283.581 269.907 282.486 268.251 281.505 266.639C278.781 262.207 276.18 257.696 273.526 253.212Z"
        fill={color}
      />
      <path
        d="M293.181 200.07C293.181 200.359 293.26 200.683 293.172 200.937C292.489 202.847 291.78 204.747 291.079 206.648C289.546 205.282 287.733 204.108 286.542 202.488C284.772 200.088 283.432 197.819 279.701 198.222C278.002 198.406 274.568 196.742 274.586 195.997C274.656 193.702 275.356 190.601 276.986 189.323C282.477 185.013 290.326 187.825 292.445 194.49C293.006 196.26 293.102 198.178 293.409 200.026C293.339 200.053 293.26 200.061 293.181 200.07Z"
        fill={color}
      />
      <g className={classess}>
        <path
          d="M34.0388 231.352C34.0388 230.599 35.4272 230.222 38.204 230.222C39.0371 230.222 40.0288 230.321 41.1792 230.519C42.29 230.678 42.8454 230.996 42.8454 231.471V239.029H48.7958V228.08C48.7958 227.405 49.6685 226.949 51.414 226.711C52.1677 226.592 52.9809 226.533 53.8537 226.533C54.6867 226.533 55.7776 226.652 57.1264 226.889C58.4752 227.128 59.1495 227.524 59.1495 228.08V248.43C59.1495 249.937 58.5347 250.691 57.3049 250.691H19.0437C18.0123 250.691 17.4966 250.235 17.4966 249.322V228.02C17.4966 227.187 19.2619 226.77 22.7925 226.77C26.2834 226.77 28.0288 227.187 28.0288 228.02V239.029H34.0388V231.352Z"
          fill={color}
        />
        <path
          d="M58.9975 203.193L23.2471 193.614C22.4424 193.399 22.5586 191.356 23.5956 187.486C24.6429 183.577 25.5688 181.731 26.3735 181.946L54.537 189.493L56.9088 180.642C57.0935 179.952 58.1223 179.714 59.9951 179.928C60.9072 180.05 61.8232 180.234 62.7428 180.48C63.6624 180.726 64.5858 181.035 65.5129 181.407C67.27 182.206 68.0561 182.951 67.8713 183.64L63.1279 201.343C62.902 202.187 62.3775 202.765 61.5543 203.078C60.7311 203.391 59.8789 203.43 58.9975 203.193Z"
          fill={color}
        />
        <path
          d="M65.9564 129.53C66.3334 128.877 67.7241 129.245 70.129 130.634C70.8504 131.051 71.6597 131.632 72.5568 132.379C73.4395 133.072 73.7617 133.624 73.5237 134.036L69.7452 140.581L74.8984 143.557L80.3727 134.074C80.71 133.491 81.6939 133.532 83.3245 134.199C84.0368 134.472 84.7708 134.827 85.5265 135.264C86.248 135.68 87.1333 136.329 88.1827 137.209C89.2312 138.089 89.6175 138.771 89.3389 139.252L79.1642 156.875C78.4104 158.181 77.5011 158.526 76.4361 157.911L43.301 138.78C42.4077 138.265 42.1892 137.612 42.6454 136.822L53.2966 118.373C53.7132 117.652 55.4502 118.174 58.5078 119.94C61.531 121.684 62.8343 122.918 62.4178 123.639L56.9137 133.173L62.1185 136.178L65.9564 129.53Z"
          fill={color}
        />
        <path
          d="M105.425 118.982C102.872 121.535 101.315 122.531 100.754 121.97L73.489 94.7045C72.5353 93.7507 72.4932 92.8397 73.3628 91.9699L80.7681 84.5645C84.9196 80.4131 88.7623 78.2812 92.2966 78.169C95.859 78.0287 99.2671 79.5856 102.521 82.8394C105.215 85.5322 106.813 88.8701 107.318 92.8537C107.571 94.8447 107.192 97.0187 106.182 99.3749C105.173 101.731 103.545 104.031 101.301 106.275L108.833 113.807C109.169 114.144 108.875 114.915 107.949 116.121C107.023 117.272 106.182 118.225 105.425 118.982ZM87.5003 92.4745L94.1483 99.1226L94.6949 98.5761C95.6768 97.5942 96.1962 96.4581 96.2522 95.1679C96.3083 93.8777 95.7749 92.6715 94.6528 91.5495C93.5308 90.4275 92.4937 89.866 91.5398 89.866C90.614 89.838 89.562 90.4134 88.3839 91.5915L87.5003 92.4745Z"
          fill={color}
        />
        <path
          d="M162.608 74.6859C162.945 75.27 161.379 76.5636 157.91 78.5669C154.439 80.5702 152.536 81.2799 152.199 80.6959L145.356 68.8435L138.141 73.0088L144.985 84.8611C145.321 85.4452 143.755 86.7388 140.286 88.7422C136.815 90.7454 134.912 91.4549 134.575 90.8707L114.849 56.7053C114.433 55.9839 115.96 54.6215 119.429 52.6182C122.899 50.6149 124.842 49.9739 125.258 50.6954L132.251 62.8054L139.465 58.6402L132.533 46.6332C132.255 46.1522 132.916 45.3128 134.514 44.1149C135.368 43.5305 136.224 42.9903 137.083 42.4945L139.771 41.0802C141.607 40.2946 142.665 40.1423 142.942 40.6233L162.608 74.6859Z"
          fill={color}
        />
        <path
          d="M204.158 62.497C200.824 63.3902 198.88 63.3363 198.324 62.3353L194.441 55.4291L185.301 57.8778L185.544 65.4515C185.632 66.7009 183.952 67.7877 180.504 68.7117C178.665 69.2045 177.279 69.4733 176.346 69.5178C175.404 69.5241 174.917 69.4697 174.886 69.3548L174.633 27.7171C174.55 27.4106 177.134 26.554 182.384 25.1475C187.633 23.7408 190.299 23.1908 190.382 23.4973L210.767 59.8021C210.839 60.0703 210.014 60.5172 208.292 61.1428C206.57 61.7684 205.192 62.2197 204.158 62.497ZM184.783 50.1932L190.818 48.5761L185.043 37.3715L184.698 37.4639L184.783 50.1932Z"
          fill={color}
        />
        <path
          d="M256.164 57.8404C256.164 58.6735 254.3 59.0899 250.572 59.0899C246.842 59.0899 244.819 58.7924 244.501 58.1974L234.564 39.6321V58.1379C234.564 58.852 232.72 59.209 229.031 59.209C225.381 59.209 223.557 58.852 223.557 58.1379V18.3296C223.557 17.7345 225.124 17.4371 228.257 17.4371C229.487 17.4371 230.915 17.556 232.542 17.7941C234.208 17.9924 235.219 18.3891 235.576 18.9842L245.097 37.3114V18.6272C245.097 17.8735 246.942 17.4965 250.631 17.4965C254.32 17.4965 256.164 17.8735 256.164 18.6272V57.8404Z"
          fill={color}
        />
        <path
          d="M292.282 65.7929C292.076 66.5594 290.078 66.4343 286.284 65.4179C282.49 64.4014 280.697 63.51 280.902 62.7436L288.633 33.8904L281.735 32.0423C281.085 31.8677 280.86 30.8632 281.064 29.0287C281.176 28.155 281.349 27.2774 281.586 26.3961C281.821 25.5148 282.11 24.6681 282.451 23.8558C283.191 22.165 283.887 21.4069 284.538 21.5815L309.541 28.2808C310.192 28.4554 310.416 29.4599 310.212 31.2944C310.101 32.1682 309.927 33.0458 309.691 33.9271C309.455 34.8084 309.166 35.6551 308.826 36.4673C308.085 38.1581 307.389 38.9162 306.738 38.7416L300.013 36.9398L292.282 65.7929Z"
          fill={color}
        />
        <path
          d="M454.268 302.101C453.518 304.898 452.458 307.243 451.089 309.135C449.748 311.075 448.407 311.865 447.065 311.506C445.724 311.147 444.196 310.183 442.48 308.615C440.793 307.095 440.042 305.99 440.227 305.3C440.278 305.108 440.436 304.904 440.699 304.687C440.99 304.519 441.375 304.006 441.851 303.148C442.355 302.339 442.695 301.608 442.869 300.957C443.465 298.734 443.162 296.722 441.96 294.922C440.749 293.16 438.514 291.843 435.258 290.97C432.039 290.107 429.459 290.156 427.518 291.114C425.567 292.111 424.304 293.682 423.73 295.828C423.493 296.709 423.347 297.717 423.289 298.852C423.259 300.035 423.413 300.918 423.75 301.501C423.806 301.599 423.803 301.761 423.741 301.992C423.68 302.221 423.126 302.525 422.08 302.902C421.063 303.328 419.773 303.618 418.212 303.775C416.689 303.942 415.544 303.922 414.778 303.717C413.284 303.317 412.403 301.849 412.138 299.314C411.873 296.778 412.162 293.94 413.003 290.798C414.358 285.74 417.254 282.06 421.691 279.758C426.127 277.456 431.583 277.172 438.059 278.907C444.572 280.653 449.242 283.691 452.065 288.019C454.878 292.387 455.612 297.081 454.268 302.101Z"
          fill={color}
        />
        <path
          d="M395.546 331.097C398.323 326.287 402.174 323.266 407.1 322.034C412.006 320.834 417.483 321.981 423.529 325.472C429.61 328.983 433.331 333.169 434.692 338.032C436.033 342.929 435.306 347.799 432.509 352.643C429.692 357.522 425.875 360.562 421.057 361.767C416.275 362.99 410.756 361.797 404.504 358.187C398.286 354.597 394.53 350.39 393.238 345.568C391.98 340.764 392.749 335.941 395.546 331.097ZM422.674 346.828C423.626 345.179 423.674 343.351 422.816 341.345C421.939 339.372 420.127 337.593 417.378 336.006C414.665 334.439 412.261 333.762 410.17 333.974C408.111 334.206 406.587 335.181 405.595 336.899C404.584 338.651 404.509 340.486 405.371 342.404C406.214 344.356 408.01 346.126 410.757 347.712C413.506 349.299 415.946 349.952 418.078 349.671C420.19 349.424 421.722 348.477 422.674 346.828Z"
          fill={color}
        />
        <path
          d="M389.015 405.653C388.538 406.129 387.052 405.119 384.555 402.623C382.086 400.154 381.091 398.682 381.568 398.205L389.268 390.505L384.471 385.709L379.338 390.842C378.861 391.319 377.529 390.463 375.341 388.275C373.181 386.115 372.325 384.811 372.774 384.362L377.949 379.187L367.809 369.046C367.416 368.654 367.697 367.868 368.651 366.69C369.548 365.512 370.347 364.572 371.049 363.872L373.111 361.978C374.653 360.772 375.621 360.365 376.014 360.758L403.868 388.612C404.317 389.061 404.527 389.439 404.499 389.748C404.443 390.084 404.233 390.435 403.868 390.8L389.015 405.653Z"
          fill={color}
        />
        <path
          d="M341.064 438.576C340.48 438.913 339.305 437.553 337.539 434.496C335.794 431.472 335.214 429.792 335.798 429.455L345.228 424.01L341.836 418.135L335.549 421.765C334.965 422.102 333.9 420.931 332.353 418.252C330.825 415.606 330.336 414.124 330.886 413.807L337.225 410.148L330.054 397.729C329.777 397.248 330.251 396.561 331.477 395.671C332.649 394.765 333.664 394.064 334.523 393.569L337.005 392.273C338.807 391.507 339.847 391.365 340.125 391.846L359.821 425.96C360.138 426.51 360.243 426.93 360.136 427.221C359.995 427.531 359.701 427.816 359.255 428.073L341.064 438.576Z"
          fill={color}
        />
        <path
          d="M284.954 441.181C284.226 441.377 283.502 440.133 282.784 437.451C282.568 436.646 282.407 435.662 282.301 434.5C282.166 433.386 282.329 432.767 282.789 432.645L290.089 430.689L288.549 424.941L277.973 427.775C277.322 427.949 276.655 427.224 275.974 425.6C275.664 424.903 275.396 424.133 275.17 423.289C274.954 422.485 274.787 421.4 274.668 420.036C274.549 418.671 274.757 417.917 275.293 417.773L294.95 412.507C296.406 412.116 297.293 412.515 297.612 413.703L307.514 450.66C307.782 451.656 307.474 452.273 306.593 452.509L286.016 458.022C285.212 458.238 284.353 456.641 283.439 453.23C282.535 449.859 282.486 448.065 283.29 447.849L293.924 445L292.368 439.195L284.954 441.181Z"
          fill={color}
        />
        <path
          d="M231.352 445.961C230.599 445.961 230.223 444.573 230.223 441.796C230.223 440.963 230.322 439.971 230.519 438.821C230.678 437.71 230.996 437.155 231.472 437.155H239.029V431.205H228.08C227.406 431.205 226.949 430.331 226.712 428.586C226.593 427.832 226.533 427.02 226.533 426.146C226.533 425.313 226.652 424.223 226.89 422.874C227.128 421.525 227.525 420.851 228.08 420.851H248.43C249.938 420.851 250.692 421.465 250.692 422.695V460.957C250.692 461.988 250.235 462.504 249.323 462.504H228.021C227.188 462.504 226.771 460.738 226.771 457.208C226.771 453.717 227.188 451.971 228.021 451.971H239.029V445.961H231.352Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
