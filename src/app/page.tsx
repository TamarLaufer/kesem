import { STRINGS } from "@/strings/common";
import {
  HomeContainer,
  BackgroundVideo,
  Header,
  ContentContainer,
  SecondaryText,
  EnrollButton,
} from "./HomePage.styles";

export default async function Page() {
  return (
    <HomeContainer>
      <BackgroundVideo
        src="/videos/students.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <ContentContainer>
        <Header>{STRINGS.HOME_PAGE.WELCOME_TO_KESEM}</Header>
        <SecondaryText>
          {STRINGS.HOME_PAGE.EDUCATIONAL_CENTER_FOR_YOU}
        </SecondaryText>
        <EnrollButton href={`/enroll`}>
          {STRINGS.HOME_PAGE.ADD_ME_TO_SUCCESS}
        </EnrollButton>
      </ContentContainer>
    </HomeContainer>
  );
}
