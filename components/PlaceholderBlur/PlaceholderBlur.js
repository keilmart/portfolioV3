import { useState } from "react";
import Image from "next/image";

const PlaceholderBlur = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  rounded = false,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        blurDataURL={imageSrc}
        className={`${loaded ? "unblur" : ""} ${rounded ? "rounded-full" : ""}`}
        onLoadingComplete={() => setLoaded(true)}
        objectPosition="top left"
        placeholder="blur"
        objectFit="cover"
        // borderRadius="24px"
      />
    </>
  );
};

export default PlaceholderBlur;
