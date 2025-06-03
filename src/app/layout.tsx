import { Assistant } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const assistant = Assistant({
  subsets: ["hebrew"],
  variable: "--font-assistant",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Suez+One&family=Playpen+Sans+Hebrew:wght@100..800&display=swap&subset=hebrew"
          rel="stylesheet"
        />
      </head>
      <body className={`${assistant.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
