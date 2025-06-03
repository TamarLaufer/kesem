"use client";
import {
  HomeContainer,
  BackgroundVideo,
  Text,
  OverlayContent,
  SecondaryText,
} from "./HomePage.styles";

const HomePage = () => {
  return (
    <HomeContainer>
      <BackgroundVideo
        src="/videos/students.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <OverlayContent>
        <Text>ברוכים הבאים למרכז קסם</Text>
        <SecondaryText>מרכז ללימודי מתמטיקה המותאם בשבילך</SecondaryText>
      </OverlayContent>
    </HomeContainer>
  );
};

export default HomePage;
