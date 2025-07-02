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

const imagesList = [
  "kesem_center1.jpeg",
  "kesem_center2.jpeg",
  "kesem_center3.jpeg",
];

export default function AboutUs() {
  const text = STRINGS.ABOUT_US_PAGE.ABOUT_TEXT;
  function renderTextWithBreaks(text: string) {
    return text
      .split("\n")
      .map((line, idx) =>
        line === "" ? (
          <br key={idx} />
        ) : (
          <AboutUsText key={idx}>{line}</AboutUsText>
        )
      );
  }

  return (
    <BackgroundWrapper>
      <AboutUsContainer>
        <TextContainer>
          {/* {paragraphs.map((paragraph, idx) => (
            <AboutUsText key={idx}>
              {paragraph.split("\n").map((line, lineIdx, arr) =>
                lineIdx < arr.length - 1 ? (
                  <React.Fragment key={lineIdx}>
                    {line}
                    <br />
                  </React.Fragment>
                ) : (
                  line
                )
              )}
            </AboutUsText>
          ))} */}
          {renderTextWithBreaks(text)}
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
