"use client";

import Image from "next/image";
import s from "./OurPartners.module.css";

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

const OurPartners = () => {
  return (
    <div className={s.partnersContainer}>
      {images.map((img) => (
        <div key={img.alt} className={s.imageWrapper}>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default OurPartners;
