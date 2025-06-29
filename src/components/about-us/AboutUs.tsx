"use client";
import {
  AboutUsContainer,
  AboutUsText,
  BackgroundWrapper,
  ImagesContainer,
  ImageStyle,
  TextContainer,
} from "./AboutUs.styles";
import { STRINGS } from "@/strings/common";

const imagesList = [
  "kesem_center1.jpeg",
  "kesem_center2.jpeg",
  "kesem_center3.jpeg",
];

export default function AboutUs() {
  const text = STRINGS.ABOUT_US_PAGE.ABOUT_TEXT;

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
              <ImageStyle
                key={oneImg}
                src={`/images/${oneImg}`}
                alt="image"
                width={400}
                height={250}
              />
            );
          })}
        </ImagesContainer>
      </AboutUsContainer>
    </BackgroundWrapper>
  );
}
