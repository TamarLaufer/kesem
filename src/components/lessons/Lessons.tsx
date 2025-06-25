"use client";
import { STRINGS } from "@/strings/common";
import {
  LessonsGridContainer,
  LessonsHeader,
  StyledIframe,
  VideoWrapper,
} from "./Lessons.styles";
import { Fragment, useState } from "react";
import { VIDEO_BATCH } from "@/consts";
import { ButtonsContainer } from "./Lessons.styles";
import Button from "@/components/Button";

const videoListIds = [
  "Y2nrZEF5kNQ",
  "KZXmWEmrCZk",
  "E1pAlktRQWQ",
  "vrhwAW8c8GY",
  "FrRvrHEOCiY",
  "lOAuvMU_FMg",
  "zWAnCjSxZV0",
  "pySwwWMl9F8",
  "62U3bdLHBAI",
  "WapDrby-ZjA",
  "q8lRzEKesZs",
  "Y3nl7MYWws0",
  "BkpQ4f9QPEk",
  "MLfG93ZPLMk",
  "w38yPfkqIPk",
];

const Lessons = () => {
  const [videoToDisplay, setVideoToDisplay] = useState(VIDEO_BATCH);

  const handleShowMoreVideo = () => {
    setVideoToDisplay((prev) => prev + videoToDisplay);
  };

  const handleShowLessVideo = () => {
    setVideoToDisplay(VIDEO_BATCH);
  };

  return (
    <Fragment>
      <LessonsHeader>
        {STRINGS.ONLINE_LESSONS.FUN_WITH_ONLINE_LESSONS_HEADER}
      </LessonsHeader>
      <LessonsGridContainer>
        {videoListIds.slice(0, videoToDisplay).map((id) => {
          return (
            <VideoWrapper key={id}>
              <StyledIframe
                src={`https://www.youtube.com/embed/${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`YouTube video ${id}`}
                loading="lazy"
              />
            </VideoWrapper>
          );
        })}
      </LessonsGridContainer>
      <ButtonsContainer>
        <Button
          onClick={
            videoToDisplay < videoListIds.length
              ? handleShowMoreVideo
              : handleShowLessVideo
          }
          text={
            videoToDisplay < videoListIds.length
              ? STRINGS.ONLINE_LESSONS.SHOW_MORE
              : STRINGS.ONLINE_LESSONS.SHOW_LESS
          }
        />
      </ButtonsContainer>
    </Fragment>
  );
};

export default Lessons;
