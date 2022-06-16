import Image from "next/image";
import { useState } from "react";

const PlaceholderBlur = ({ imageSrc, imageAlt, imageWidth, imageHeight }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        blurDataURL={imageSrc}
        className={loaded ? "unblur" : ""}
        onLoadingComplete={() => setLoaded(true)}
        objectPosition="top left"
        placeholder="blur"
        objectFit="cover"
      />
    </>
  );
};

export default PlaceholderBlur;
