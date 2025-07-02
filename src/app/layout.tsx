import "./globals.css";
import { Providers } from "@/Providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ReactNode } from "react";
import { WhatsApp } from "@/assets/icons";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title:
    "מרכז קסם – מתמטיקה בקבוצות קטנות לילדים בגבעת שמואל ורעננה| יחס אישי ושיעורים פרטיים",
  description:
    "לימודי מתמטיקה מותאמים אישית בגבעת שמואל ורעננה, לכל הרמות והגילאים.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&?family=Varela+Round&family=Rubik+Dirt&family=Suez+One&family=Playpen+Sans+Hebrew:wght@100..800&display=swap&subset=hebrew"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main>
            {children}
            <a href="https://wa.me/972535566509">
              <WhatsApp
                width={65}
                height={65}
                style={{
                  position: "fixed",
                  bottom: 40,
                  left: 27,
                  zIndex: 1000,
                }}
              />
              {/* <div
                style={{
                  padding: "0.5rem 0.8rem",
                  backgroundColor: "#5CB338",
                  borderColor: theme.colors.white,
                  borderWidth: "2px",
                  position: "fixed",
                  bottom: 10,
                  left: 5,
                  zIndex: 100,
                  borderRadius: "26px",
                  color: theme.colors.white,
                  // fontFamily: "font-family: 'M 2PLUS Rounded 1c', sans-serif;",
                  fontSize: 14,
                }}
              >
                <p>{STRINGS.TALK_WITH_US_WHATSAPP}</p>
              </div> */}
            </a>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
