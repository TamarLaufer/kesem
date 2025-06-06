"use client";

import Image from "next/image";
import gs from "@/../public/images/gs.jpeg";
import { PartnersContainer } from "./OurPartners.styles";

const OurPartners = () => {
  return (
    <PartnersContainer>
      <Image src={gs} alt="לוגו" />
    </PartnersContainer>
  );
};

export default OurPartners;
