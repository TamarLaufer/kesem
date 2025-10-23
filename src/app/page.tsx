import Link from "next/link";
import s from "./HomePage.module.css";
import { STRINGS } from "@/strings/common";
import { renderTextWithBreaks } from "@/functions";
import ImagesListComponent from "@/components/imagesListComponent/ImagesListComponent";

function Text({ children }: { children: React.ReactNode }) {
  return <p className={s.text}>{children}</p>;
}
function TextRight({ children }: { children: React.ReactNode }) {
  return <p className={s.textRight}>{children}</p>;
}

export default function Page() {
  const text1 = STRINGS.HOME_PAGE.HOME_PARAGRAPH;
  const text2 = STRINGS.HOME_PAGE.DETAILED_PARAGRAPH;
  const text3 = STRINGS.HOME_PAGE.MORE_TEXT;

  return (
    <main className={s.homeContainer}>
      {/* אם תרצי להחזיר וידאו/אוברליי:
      <video className={s.backgroundVideo} src="/videos/students.mp4" autoPlay muted loop playsInline />
      <div className={s.backgroundVideoOverlay} />
      */}
      <div className={s.contentContainer}>
        <h1 className={s.header}>{STRINGS.HOME_PAGE.WELCOME_TO_KESEM}</h1>
        <h2 className={s.secondaryText}>
          {STRINGS.HOME_PAGE.SECONDARY_HEADER}
        </h2>
        {renderTextWithBreaks(text1, Text)}
        <div className={s.textContainer}>
          <div className={s.bulletBlock}>
            {renderTextWithBreaks(text2, TextRight)}
          </div>
        </div>
        {renderTextWithBreaks(text3, Text)}
        <Link href="/enroll" className={s.enrollButton}>
          {STRINGS.HOME_PAGE.ADD_ME_TO_SUCCESS}
        </Link>
        <ImagesListComponent />
      </div>
    </main>
  );
}
