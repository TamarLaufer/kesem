"use client";

import { ImageWrapper, PartnersContainer } from "./OurPartners.styles";
import Image from "next/image";

const OurPartners = () => {
  return (
    <PartnersContainer>
      <ImageWrapper>
        <Image
          src="/images/gs.jpeg"
          alt="logo1"
          fill
          style={{ objectFit: "contain" }}
        />
      </ImageWrapper>
      <ImageWrapper>
        <Image
          src="/images/hachevra_lematnasim.jpeg"
          alt="logo2"
          fill
          style={{ objectFit: "contain" }}
        />
      </ImageWrapper>
    </PartnersContainer>
  );
};

export default OurPartners;
