"use client";
import { useTranslation } from "react-i18next";
import {
  HomeContainer,
  BackgroundVideo,
  Header,
  ContentContainer,
  SecondaryText,
  EnrollButton,
} from "./HomePage.styles";
import { useParams } from "next/navigation";

const HomePage = () => {
  const { lng } = useParams();
  const { t } = useTranslation("common");

  return (
    <HomeContainer>
      <BackgroundVideo
        src="/videos/students.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <ContentContainer>
        <Header>{t("HOME_PAGE.WELCOME_TO_KESEM")}</Header>
        <SecondaryText>
          {t("HOME_PAGE.EDUCATIONAL_CENTER_FOR_YOU")}
        </SecondaryText>
        <EnrollButton href={`/${lng}/enroll`}>
          {t("HOME_PAGE.ADD_ME_TO_SUCCESS")}
        </EnrollButton>
      </ContentContainer>
    </HomeContainer>
  );
};

export default HomePage;
