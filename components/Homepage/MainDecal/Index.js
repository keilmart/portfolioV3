export function Blob() {
  return (
    <svg
      width="100%"
      height="100%"
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop
            id="stop1"
            stopColor="rgba(106, 152, 240, 1)"
            offset="0%"
          ></stop>
          <stop
            id="stop2"
            stopColor="rgba(73, 97, 220, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M19.7,-28.9C26.5,-26.3,33.6,-22.4,38.3,-16.3C43,-10.1,45.2,-1.7,43.1,5.5C41.1,12.7,34.7,18.7,29.1,25.3C23.5,31.9,18.6,39.3,12,41.4C5.5,43.6,-2.8,40.5,-9.9,37C-17.1,33.4,-23.2,29.4,-27.8,24.1C-32.4,18.8,-35.5,12.1,-37.4,4.8C-39.3,-2.5,-40.1,-10.6,-36.7,-16.2C-33.3,-21.8,-25.7,-25,-18.9,-27.7C-12.1,-30.3,-6,-32.5,0.2,-32.8C6.4,-33.2,12.9,-31.6,19.7,-28.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
      ></path>
    </svg>
  );
}
