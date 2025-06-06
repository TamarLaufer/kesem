"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import i18n from "@/i18n";

const LanguageSync = () => {
  const params = useParams();
  const lng = typeof params.lng === "string" ? params.lng : "he";

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  return null; // Nothing to render
};

export default LanguageSync;
