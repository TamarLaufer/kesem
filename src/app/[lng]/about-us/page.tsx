"use client";
import { useTranslation } from "react-i18next";
import {
  AboutUsContainer,
  AboutUsText,
  BackgroundWrapper,
  ImagesContainer,
  TextContainer,
} from "./AboutUs.styles";
import Image from "next/image";

const imagesList = [
  "kesem_center1.jpeg",
  "kesem_center2.jpeg",
  "kesem_center3.jpeg",
];

const AboutUs = () => {
  const { t } = useTranslation("common");
  const text = t("ABOUT_US_PAGE.ABOUT_TEXT");
  return (
    <BackgroundWrapper>
      <AboutUsContainer>
        <TextContainer>
          {text.split("\n").map((line, index) => (
            <AboutUsText key={index}>{line}</AboutUsText>
          ))}
        </TextContainer>
        <ImagesContainer>
          {imagesList.map((oneImg) => {
            return (
              <Image
                key={oneImg}
                src={`/images/${oneImg}`}
                alt="image"
                width={400}
                height={250}
                style={{
                  margin: 18,
                  borderRadius: 12,
                }}
              />
            );
          })}
        </ImagesContainer>
      </AboutUsContainer>
    </BackgroundWrapper>
  );
};

export default AboutUs;
