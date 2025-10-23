"use client";
import { useState } from "react";
import Button from "@/components/Button";
import { STRINGS } from "@/strings/common";
import { VIDEO_BATCH } from "@/consts";
import s from "./Lessons.module.css";

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

  const handleShowMoreVideo = () =>
    setVideoToDisplay((prev) => prev + VIDEO_BATCH);
  const handleShowLessVideo = () => setVideoToDisplay(VIDEO_BATCH);

  return (
    <div className={s.container}>
      <h1 className={s.lessonsHeader}>
        {STRINGS.ONLINE_LESSONS.FUN_WITH_ONLINE_LESSONS_HEADER}
      </h1>

      <div className={s.lessonsGridContainer}>
        {videoListIds.slice(0, videoToDisplay).map((id) => (
          <div key={id} className={s.videoWrapper}>
            <iframe
              className={s.styledIframe}
              src={`https://www.youtube.com/embed/${id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube video ${id}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className={s.buttonContainer}>
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
          $width="12rem"
        />
      </div>
    </div>
  );
};

export default Lessons;
