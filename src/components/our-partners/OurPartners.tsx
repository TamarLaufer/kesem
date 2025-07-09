"use client";

import { ImageWrapper, PartnersContainer } from "./OurPartners.styles";
import Image from "next/image";

const images = [
  { src: "/images/gs.jpeg", alt: "לוגו גבעת שמואל", width: 200, height: 200 },
  {
    src: "/images/hachevra_lematnasim.jpeg",
    alt: "לוגו החברה למתנסים",
    width: 400,
    height: 300,
  },
  { src: "/images/ben-zvi.png", alt: "לוגו בן צבי", width: 200, height: 200 },
  {
    src: "/images/raanana_logo.jpeg",
    alt: "לוגו עיריית רעננה",
    width: 200,
    height: 200,
  },
];
const renderImages = images.map((i) => {
  return (
    <ImageWrapper key={i.alt}>
      <Image
        src={i.src}
        alt={i.alt}
        style={{ objectFit: "contain" }}
        width={i.width}
        height={i.height}
        priority
      />
    </ImageWrapper>
  );
});

const OurPartners = () => {
  return <PartnersContainer>{renderImages}</PartnersContainer>;
};

export default OurPartners;
