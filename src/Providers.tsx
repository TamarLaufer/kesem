"use client";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { initI18n } from "@/i18n/client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import { useParams } from "next/navigation";
import { i18n } from "i18next";

export function Providers({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const lng = typeof params.lng === "string" ? params.lng : "he";
  const [i18nInstance, setI18nInstance] = useState<i18n | null>(null);

  useEffect(() => {
    initI18n(lng).then(setI18nInstance);
  }, [lng]);

  if (!i18nInstance) return null;

  return (
    <I18nextProvider i18n={i18nInstance}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </I18nextProvider>
  );
}
