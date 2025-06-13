"use client";

import gs from "@/../public/images/gs.jpeg";
import hachevra_lematnasim from "@/../public/images/hachevra_lematnasim.jpeg";
import { PartnersContainer } from "./OurPartners.styles";
import Image from "next/image";

const OurPartners = () => {
  return (
    <PartnersContainer>
      <Image src={gs} alt="logo1" width={200} height={200} />
      <Image
        src={hachevra_lematnasim}
        alt="logo2"
        style={{ width: 500, height: 150, margin: 50 }}
      />
    </PartnersContainer>
  );
};

export default OurPartners;
