import { STRINGS } from "@/strings/common";
import {
  HomeContainer,
  BackgroundVideo,
  Header,
  ContentContainer,
  SecondaryText,
  EnrollButton,
  Paragraph,
  ParagraphContainer,
} from "./HomePage.styles";

export default async function Page() {
  const paregraph = STRINGS.HOME_PAGE.PAREGRAPH;

  function renderTextWithBreaks(text: string) {
    return text
      .split("\n")
      .map((line, idx) =>
        line === "" ? <br key={idx} /> : <Paragraph key={idx}>{line}</Paragraph>
      );
  }

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
        <ParagraphContainer>
          {renderTextWithBreaks(paregraph)}
        </ParagraphContainer>
        <EnrollButton href={`/enroll`}>
          {STRINGS.HOME_PAGE.ADD_ME_TO_SUCCESS}
        </EnrollButton>
      </ContentContainer>
    </HomeContainer>
  );
}
