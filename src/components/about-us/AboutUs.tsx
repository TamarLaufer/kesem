"use client";
import React from "react";
import {
  AboutUsContainer,
  AboutUsText,
  BackgroundWrapper,
  TextContainer,
} from "./AboutUs.styles";
import { STRINGS } from "@/strings/common";
import { renderTextWithBreaks } from "@/functions";
import ImagesListComponent from "../imagesListComponent/ImagesListComponent";

export default function AboutUs() {
  const text = STRINGS.ABOUT_US_PAGE.ABOUT_TEXT;

  return (
    <BackgroundWrapper>
      <AboutUsContainer>
        <TextContainer>{renderTextWithBreaks(text, AboutUsText)}</TextContainer>
        <ImagesListComponent />
      </AboutUsContainer>
    </BackgroundWrapper>
  );
}
