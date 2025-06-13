"use client";
import { useTranslation } from "react-i18next";
import {
  AboutUsContainer,
  AboutUsText,
  BackgroundWrapper,
  ImagesContainer,
  TextContainer,
} from "./AboutUs.styles";
import image1 from "@/../public/images/kesem_center1.jpeg";
import image2 from "@/../public/images/kesem_center2.jpeg";
import image3 from "@/../public/images/kesem_center3.jpeg";
import Image from "next/image";

const imagesList = [image1, image2, image3];

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
                key={oneImg.src}
                src={oneImg}
                alt="image"
                style={{
                  width: 400,
                  height: 250,
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
