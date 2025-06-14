import Image from "next/image";

const PlaceholderBlur = ({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  rounded = false,
  priority = false,
  blurDataURL, // optional real blur data
}) => {
  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
      className={`${rounded ? "rounded-full" : ""}`}
      placeholder={blurDataURL ? "blur" : undefined}
      blurDataURL={blurDataURL}
      objectFit="cover"
      objectPosition="top left"
      priority={priority}
    />
  );
};

export default PlaceholderBlur;
