"use client";

import { PartnersContainer } from "./OurPartners.styles";
import Image from "next/image";

const OurPartners = () => {
  return (
    <PartnersContainer>
      <Image src="/images/gs.jpeg" alt="logo1" width={200} height={200} />
      <Image
        src="/images/hachevra_lematnasim.jpeg"
        alt="logo2"
        width={500}
        height={150}
        style={{ margin: 50 }}
      />
    </PartnersContainer>
  );
};

export default OurPartners;
