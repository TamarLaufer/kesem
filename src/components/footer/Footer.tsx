"use client";

import { useTranslation } from "react-i18next";
import {
  FooterContainer,
  LeftContent,
  RightContent,
  Text,
  IconLink,
} from "./Footer.styles";
import {
  Facebook,
  Youtube,
  Instegram,
  WhatsApp,
  Clock,
  SmartPhone,
  Location,
  Email,
  Notes,
} from "@/assets/icons";

type SocialLinksType = {
  SocialIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
};

type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconType> = {
  Clock,
  Email,
  Location,
  SmartPhone,
  Notes,
};

const Footer = () => {
  const { t } = useTranslation("common");

  const socialLinks: SocialLinksType[] = [
    {
      SocialIcon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61566827575213",
    },
    {
      SocialIcon: Youtube,
      url: "https://www.youtube.com/@%D7%A7%D7%A1%D7%9D-%D7%9E%D7%A8%D7%9B%D7%96-%D7%9C%D7%9E%D7%99%D7%93%D7%94",
    },
    { SocialIcon: Instegram, url: "https://www.instagram.com/kesem_gs/" },
    { SocialIcon: WhatsApp, url: "https://wa.me/972542218057" },
  ];

  const footerInfo: { icon: keyof typeof iconMap | null; text: string }[] = [
    { icon: "Clock", text: t("CENTER_HOURS") },
    { icon: "Location", text: t("CENTER_LOCATION") },
    { icon: "Notes", text: t("CENTER_DETAIL") },
    { icon: "Email", text: t("CENTER_EMAIL") },
    { icon: "SmartPhone", text: t("CENTER_PHONE") },
  ];

  return (
    <FooterContainer>
      <LeftContent>
        {footerInfo.map(({ icon, text }, idx) => {
          const Icon = icon && iconMap[icon];
          return (
            <div
              key={idx}
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              {Icon && <Icon width={22} height={22} />}
              <Text>{text}</Text>
            </div>
          );
        })}
      </LeftContent>
      <RightContent>
        {socialLinks.map(({ SocialIcon, url }, index) => (
          <IconLink
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon width={50} height={50} />
          </IconLink>
        ))}
      </RightContent>
    </FooterContainer>
  );
};

export default Footer;
