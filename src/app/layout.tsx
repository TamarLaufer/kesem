import "./globals.css";
import { Providers } from "@/Providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ReactNode } from "react";
import { WhatsApp } from "@/assets/icons";
import Script from "next/script";

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
        {/* Google Analytics script #1 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FB3R9YDTCB"
          strategy="afterInteractive"
        />
        {/* Google Analytics script #2 */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FB3R9YDTCB');
          `}
        </Script>
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
            </a>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
