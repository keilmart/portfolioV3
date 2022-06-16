import Image from "next/image";
import { useState } from "react";

const PlaceholderBlur = ({ imageSrc, imageAlt, imageWidth, imageHeight }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        placeholder="blur"
        blurDataURL={imageSrc}
        alt={imageAlt}
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        className={loaded ? "unblur" : ""}
        onLoadingComplete={() => setLoaded(true)}
      />
    </>
  );
};

export default PlaceholderBlur;
