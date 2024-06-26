// This is the blob graphic on the Hero.js //
export function Blob() {
  return (
    <svg
      width="100%"
      height="100%"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(106, 152, 240, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(73, 97, 220, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M19.7,-28.9C26.5,-26.3,33.6,-22.4,38.3,-16.3C43,-10.1,45.2,-1.7,43.1,5.5C41.1,12.7,34.7,18.7,29.1,25.3C23.5,31.9,18.6,39.3,12,41.4C5.5,43.6,-2.8,40.5,-9.9,37C-17.1,33.4,-23.2,29.4,-27.8,24.1C-32.4,18.8,-35.5,12.1,-37.4,4.8C-39.3,-2.5,-40.1,-10.6,-36.7,-16.2C-33.3,-21.8,-25.7,-25,-18.9,-27.7C-12.1,-30.3,-6,-32.5,0.2,-32.8C6.4,-33.2,12.9,-31.6,19.7,-28.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"></path>
    </svg>
  );
}

// This is located on the about page //
export function TriSquareIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="42"
      fill="none"
      viewBox="0 0 62 42">
      <g strokeWidth="2" clipPath="url(#clip0_611_4813)">
        <path
          fill="#999999"
          stroke="#999999"
          d="M1.304 12.631H31.304V42.631H1.304z"
          transform="rotate(-22.184 1.304 12.631)"></path>
        <path
          fill="#E5E7EB"
          stroke="#E5E7EB"
          d="M22.414 24.109H44.414V46.109H22.414z"
          transform="rotate(-40.536 22.414 24.11)"></path>
        <path
          fill="#6d83f2"
          stroke="#6d83f2"
          d="M46.395 25.485H56.395V35.485H46.395z"
          transform="rotate(-45 46.395 25.485)"></path>
      </g>
      <defs>
        <clipPath id="clip0_611_4813">
          <path fill="#fff" d="M0 0H62V42H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function CalenderIcon() {
  return (
    <svg className="svg-icon" viewBox="0 0 21.5 21.5" width="1em" height="1em">
      <path
        d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedIcon() {
  return (
    <svg className="svg-icon" viewBox="0 0 24 24" width="1em" height="1em">
      <path d="M23.002 21.584h.227l-.435-.658c.266 0 .407-.169.409-.376l-.001-.025c0-.282-.17-.417-.519-.417h-.564v1.476h.212v-.643h.261l.41.643zm-.425-.81h-.246v-.499h.312c.161 0 .345.026.345.237 0 .242-.186.262-.412.262M17.291 19.073h-3.007v-4.709c0-1.123-.02-2.568-1.564-2.568-1.566 0-1.806 1.223-1.806 2.487v4.79H7.908V9.389h2.887v1.323h.04a3.165 3.165 0 012.848-1.564c3.048 0 3.609 2.005 3.609 4.612l-.001 5.313zM4.515 8.065a1.745 1.745 0 110-3.49 1.745 1.745 0 010 3.49m1.503 11.008h-3.01V9.389h3.01v9.684zM18.79 1.783H1.497A1.481 1.481 0 000 3.246V20.61c.01.818.68 1.473 1.497 1.464H18.79a1.485 1.485 0 001.503-1.464V3.245a1.484 1.484 0 00-1.503-1.463" />
      <path d="M22.603 19.451a1.383 1.383 0 10.027 0h-.027m.032 2.608c-.67.011-1.254-.522-1.265-1.192a1.213 1.213 0 112.426-.04v.02a1.187 1.187 0 01-1.161 1.212h-.031" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg className="svg-icon" viewBox="0 -1 24 27" width="1em" height="1em">
      <path
        d="M12 .296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387.6.111.82-.26.82-.577 0-.286-.011-1.231-.016-2.234-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.082-.729.082-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.419-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.237-3.221-.125-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 6.099c1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.103.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.824.576 4.766-1.589 8.2-6.085 8.2-11.385C24 5.669 18.627.296 12 .296z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path d="M4.545 17.526c-.026.06-.12.078-.206.037-.087-.039-.136-.121-.108-.18.026-.061.12-.078.207-.037.087.038.137.12.107.18zM5.031 18.068c-.057.053-.169.028-.245-.055-.079-.084-.093-.196-.035-.249.059-.053.167-.028.246.056.079.083.094.194.034.248zM5.504 18.759c-.074.051-.194.003-.268-.103-.074-.107-.074-.235.002-.286.074-.051.193-.005.268.101.073.108.073.236-.002.288zM6.152 19.427c-.066.073-.206.053-.308-.046-.105-.097-.134-.234-.068-.307.067-.073.208-.052.311.046.104.097.135.235.065.307zM7.047 19.814c-.029.094-.164.137-.3.097-.136-.041-.225-.151-.197-.246.028-.095.164-.139.301-.096.135.04.224.15.196.245zM8.029 19.886c.003.099-.112.181-.255.183-.143.003-.26-.077-.261-.174 0-.1.113-.181.256-.184.143-.003.26.077.26.175zM8.943 19.731c.017.096-.082.196-.224.222-.139.026-.268-.034-.286-.13-.017-.099.084-.198.223-.224.141-.025.269.033.287.132z" />
    </svg>
  );
}

export function PentaIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 46 46">
      <mask
        id="mask0_611_4817"
        style={{ maskType: "alpha" }}
        width="44"
        height="42"
        x="1"
        y="0"
        maskUnits="userSpaceOnUse">
        <path
          fill="#C4C4C4"
          d="M23 0l21.874 15.893-8.355 25.714H9.481L1.126 15.893 23 0z"></path>
      </mask>
      <g mask="url(#mask0_611_4817)">
        <path
          fill="#6d83f2"
          d="M85.426 0H99.88300000000001V122.229H85.426z"
          transform="rotate(90 85.426 0)"></path>
        <path
          fill="#E5E7EB"
          d="M85.426 14.457H100.54V136.686H85.426z"
          transform="rotate(90 85.426 14.457)"></path>
        <path
          fill="#999999"
          d="M85.426 28.914H99.88300000000001V151.143H85.426z"
          transform="rotate(90 85.426 28.914)"></path>
      </g>
    </svg>
  );
}

export function DiamondIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 53 52">
      <path fill="#6d83f2" d="M26 0H38.257V36.77H26z" transform="rotate(45 26 0)"></path>
      <path
        fill="#E5E7EB"
        d="M34.664 8.666H46.921V45.43600000000001H34.664z"
        transform="rotate(45 34.664 8.666)"></path>
      <path
        fill="#999999"
        d="M43.336 17.333H55.592999999999996V54.103H43.336z"
        transform="rotate(45 43.336 17.333)"></path>
    </svg>
  );
}

export function CircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 40 40">
      <mask
        id="mask0_611_4815"
        style={{ maskType: "alpha" }}
        width="40"
        height="40"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="20" fill="#C4C4C4"></circle>
      </mask>
      <g mask="url(#mask0_611_4815)">
        <path
          fill="#6d83f2"
          d="M-104.863 -76.459H-91.474V179.049H-104.863z"
          transform="rotate(-45 -104.863 -76.459)"></path>
        <path
          fill="#E5E7EB"
          d="M-95.398 -85.926H-82.009V169.582H-95.398z"
          transform="rotate(-45 -95.398 -85.926)"></path>
        <path
          fill="#999999"
          d="M-85.93 -95.394H-72.54100000000001V160.114H-85.93z"
          transform="rotate(-45 -85.93 -95.394)"></path>
      </g>
    </svg>
  );
}

export function SquirqleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 42 42">
      <mask
        id="mask0_707_5622"
        style={{ maskType: "alpha" }}
        width="40"
        height="40"
        x="1"
        y="1"
        maskUnits="userSpaceOnUse">
        <path
          fill="#FE3838"
          d="M25.893 2.74c13.847 3.71 17.078 9.306 13.368 23.153-3.71 13.847-9.307 17.078-23.153 13.368C2.26 35.551-.97 29.954 2.74 16.107 6.45 2.26 12.047-.97 25.894 2.74z"></path>
      </mask>
      <g mask="url(#mask0_707_5622)">
        <path
          fill="#6d83f2"
          d="M-26.254 41.46H-12.672V128.985H-26.254z"
          transform="rotate(-90 -26.254 41.46)"></path>
        <path
          fill="#E5E7EB"
          d="M-26.246 27.882H-12.663999999999998V115.40700000000001H-26.246z"
          transform="rotate(-90 -26.246 27.882)"></path>
        <path
          fill="#999999"
          d="M-26.258 14.297H-12.675999999999998V101.822H-26.258z"
          transform="rotate(-90 -26.258 14.297)"></path>
      </g>
    </svg>
  );
}
