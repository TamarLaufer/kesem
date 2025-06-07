"use client";
import { useTranslation } from "react-i18next";
import { AboutUsContainer, AboutUsText } from "./AboutUs.styles";

const AboutUs = () => {
  const { t } = useTranslation("common");
  const text = t("ABOUT_US_PAGE.ABOUT_TEXT");
  return (
    <AboutUsContainer>
      {text.split("\n").map((line, index) => (
        <AboutUsText key={index}>{line}</AboutUsText>
      ))}
    </AboutUsContainer>
  );
};

export default AboutUs;
