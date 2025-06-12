import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import { Providers } from "@/Providers";
import Header from "@/components/header/Header";
import { Assistant } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/footer/Footer";

const assistant = Assistant({
  subsets: ["hebrew"],
  variable: "--font-assistant",
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&family=Rubik+Dirt&family=Suez+One&family=Playpen+Sans+Hebrew:wght@100..800&display=swap&subset=hebrew"
          rel="stylesheet"
        />
      </head>
      <body className={assistant.variable}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
