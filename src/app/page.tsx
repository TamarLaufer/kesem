import { STRINGS } from "@/strings/common";
import {
  HomeContainer,
  Text,
  Header,
  ContentContainer,
  SecondaryText,
  EnrollButton,
  TextRight,
  TextContainer,
  BulletBlock,
} from "./HomePage.styles";
import { renderTextWithBreaks } from "@/functions";
import ImagesListComponent from "@/components/imagesListComponent/ImagesListComponent";

const text1 = STRINGS.HOME_PAGE.HOME_PARAGRAPH;
const text2 = STRINGS.HOME_PAGE.DETAILED_PARAGRAPH;
const text3 = STRINGS.HOME_PAGE.MORE_TEXT;

export default async function Page() {
  return (
    <HomeContainer>
      {/* <BackgroundVideo
        src="/videos/students.mp4"
        autoPlay
        muted
        loop
        playsInline
      /> */}
      <ContentContainer>
        <Header>{STRINGS.HOME_PAGE.WELCOME_TO_KESEM}</Header>
        <SecondaryText>{STRINGS.HOME_PAGE.SECONDARY_HEADER}</SecondaryText>
        {renderTextWithBreaks(text1, Text)}
        <TextContainer>
          <BulletBlock>{renderTextWithBreaks(text2, TextRight)}</BulletBlock>
        </TextContainer>
        {renderTextWithBreaks(text3, Text)}
        <EnrollButton href={`/enroll`}>
          {STRINGS.HOME_PAGE.ADD_ME_TO_SUCCESS}
        </EnrollButton>
        <ImagesListComponent />
      </ContentContainer>
    </HomeContainer>
  );
}
