"use client";
import React from "react";
import {
  AboutUsContainer,
  AboutUsText,
  BackgroundWrapper,
  ImagesContainer,
  ImageStyle,
  TextContainer,
} from "./AboutUs.styles";
import { STRINGS } from "@/strings/common";
import { renderTextWithBreaks } from "@/functions";

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
        <TextContainer>{renderTextWithBreaks(text, AboutUsText)}</TextContainer>
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
