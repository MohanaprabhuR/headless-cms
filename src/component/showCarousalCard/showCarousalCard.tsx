import Image from "next/image";
import React from "react";

const ShowCarouselCard = ({ image, title }) => {
  console.log("image", image);
  return (
    <div>
      <Image
        src={image?.node?.sourceUrl}
        alt={title}
        width={184}
        height={275}
      />
    </div>
  );
};

export default ShowCarouselCard;
