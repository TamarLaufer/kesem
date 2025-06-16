"use client";
import { useTranslation } from "react-i18next";
import {
  LessonsGridContainer,
  LessonsHeader,
  StyledIframe,
  VideoWrapper,
} from "./Lessons.styles";

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
  const { t } = useTranslation("common");

  return (
    <>
      <LessonsHeader>
        {t("ONLINE_LESSONS.FUN_WITH_ONLINE_LESSONS_HEADER")}
      </LessonsHeader>
      <LessonsGridContainer>
        {videoListIds.map((id) => {
          return (
            <VideoWrapper key={id}>
              <StyledIframe
                src={`https://www.youtube.com/embed/${id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`YouTube video ${id}`}
              />
            </VideoWrapper>
          );
        })}
      </LessonsGridContainer>
    </>
  );
};

export default Lessons;
