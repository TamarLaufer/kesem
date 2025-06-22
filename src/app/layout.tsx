import { Providers } from "@/Providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
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
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
