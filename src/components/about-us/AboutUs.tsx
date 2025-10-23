"use client";
import React from "react";
import s from "./AboutUs.module.css";
import { STRINGS } from "@/strings/common";
import { renderTextWithBreaks } from "@/functions";
import ImagesListComponent from "../imagesListComponent/ImagesListComponent";

export default function AboutUs() {
  const text = STRINGS.ABOUT_US_PAGE.ABOUT_TEXT;

  return (
    <div className={s.backgroundWrapper}>
      <div className={s.aboutUsContainer}>
        <div className={s.textContainer}>
          {renderTextWithBreaks(text, "p", s.aboutUsText)}
        </div>
        <ImagesListComponent />
      </div>
    </div>
  );
}
