"use client";
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
  Clock,
  SmartPhone,
  Location,
  Email,
  Notes,
} from "@/assets/icons";
import { STRINGS } from "@/strings/common";

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
  ];

  const footerInfo: { icon: keyof typeof iconMap | null; text: string }[] = [
    // { icon: "Clock", text: STRINGS.CENTER_HOURS },
    // { icon: "Location", text: STRINGS.CENTER_LOCATION },
    { icon: "Notes", text: STRINGS.CENTER_DETAIL },
    { icon: "Email", text: STRINGS.CENTER_EMAIL },
    { icon: "SmartPhone", text: STRINGS.CENTER_PHONE },
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
