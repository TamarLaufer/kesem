import Link from "next/link";
import styles from "./HomePage.module.css";
import { STRINGS } from "@/strings/common";
import { renderTextWithBreaks } from "@/functions";
import ImagesListComponent from "@/components/imagesListComponent/ImagesListComponent";

function Text({ children }: { children: React.ReactNode }) {
  return <p className={styles.text}>{children}</p>;
}
function TextRight({ children }: { children: React.ReactNode }) {
  return <p className={styles.textRight}>{children}</p>;
}

export default function Page() {
  const text1 = STRINGS.HOME_PAGE.HOME_PARAGRAPH;
  const text2 = STRINGS.HOME_PAGE.DETAILED_PARAGRAPH;
  const text3 = STRINGS.HOME_PAGE.MORE_TEXT;

  return (
    <main className={styles.homeContainer}>
      {/* 
      <video className={styles.backgroundVideo} src="/videos/students.mp4" autoPlay muted loop playsInline />
      <div className={styles.backgroundVideoOverlay} />
      */}
      <div className={styles.contentContainer}>
        <h1 className={styles.header}>{STRINGS.HOME_PAGE.WELCOME_TO_KESEM}</h1>
        <h2 className={styles.secondaryText}>
          {STRINGS.HOME_PAGE.SECONDARY_HEADER}
        </h2>
        {renderTextWithBreaks(text1, Text)}
        <div className={styles.textContainer}>
          <div className={styles.bulletBlock}>
            {renderTextWithBreaks(text2, TextRight)}
          </div>
        </div>
        {renderTextWithBreaks(text3, Text)}
        <Link href="/enroll" className={styles.enrollButton}>
          {STRINGS.HOME_PAGE.ADD_ME_TO_SUCCESS}
        </Link>
        <ImagesListComponent />
      </div>
    </main>
  );
}
