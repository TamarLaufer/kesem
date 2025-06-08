"use client";

import { useTranslation } from "react-i18next";
import {
  FooterContainer,
  LeftContent,
  RightContent,
  Text,
  IconLink,
} from "./Footer.styles";
import { Facebook, Youtube, Instegram } from "@/assets/icons";

type SocialLinksType = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
};

const Footer = () => {
  const { t } = useTranslation("common");
  const socialLinks: SocialLinksType[] = [
    {
      Icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61566827575213",
    },
    {
      Icon: Youtube,
      url: "https://www.youtube.com/@%D7%A7%D7%A1%D7%9D-%D7%9E%D7%A8%D7%9B%D7%96-%D7%9C%D7%9E%D7%99%D7%93%D7%94",
    },
    { Icon: Instegram, url: "https://www.instagram.com/kesem_gs/" },
  ];

  const text = t("FOOTER");

  return (
    <FooterContainer>
      <LeftContent>
        {text.split("\n").map((line, index) => {
          return <Text key={index}>{line}</Text>;
        })}
      </LeftContent>
      <RightContent>
        {socialLinks.map(({ Icon, url }, index) => (
          <IconLink
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon width={50} height={50} />
          </IconLink>
        ))}
      </RightContent>
    </FooterContainer>
  );
};

export default Footer;
