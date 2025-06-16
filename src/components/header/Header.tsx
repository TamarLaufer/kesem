"use client";
import Link from "next/link";
import {
  HeaderContainer,
  Nav,
  LogoContainer,
  LinkContainer,
  LogoText,
  ButtonsContainer,
  Hamburger,
  MobileMenu,
  Select,
  Option,
} from "./Header.styles";
import Image from "next/image";
import { theme } from "@/theme";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useState } from "react";

type LinkType = {
  href: string;
  name: string;
};

const Header = () => {
  const { t } = useTranslation("common");
  const params = useParams();
  const lng = typeof params.lng === "string" ? params.lng : "he";
  const [language, setLanguage] = useState<string>(lng);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  console.log("LANG:", lng);
  console.log("t", t("HEADER.NAV_BAR.HOME_PAGE"));

  const links = [
    { href: `/${lng}`, name: t("HEADER.NAV_BAR.HOME_PAGE") },
    { href: `/${lng}/enroll`, name: t("HEADER.NAV_BAR.ENROLL_TO_KESEM") },
    { href: `/${lng}/lessons`, name: t("HEADER.NAV_BAR.ONLINE_LESSONS") },
    { href: `/${lng}/come-join-us`, name: t("HEADER.NAV_BAR.COME_JOIN_US") },
    { href: `/${lng}/our-partners`, name: t("HEADER.NAV_BAR.OUR_PARTNERS") },
    { href: `/${lng}/about-us`, name: t("HEADER.NAV_BAR.ABOUT_US") },
  ];

  const handleLInkPress = () => {
    setIsOpen(isMobile && !isOpen);
  };

  const renderLinks = links.map((oneLink: LinkType) => {
    return (
      <Link key={oneLink.name} href={oneLink.href} onClick={handleLInkPress}>
        {oneLink.name}
      </Link>
    );
  });

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    window.location.href = `/${selectedLang}`;
  };

  return (
    <HeaderContainer className="hamburger">
      <Hamburger
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMobile(!isMobile);
        }}
      >
        ☰
      </Hamburger>
      <LogoContainer>
        <Image src="/images/logo.png" alt="logo" width={120} height={60} />
        <LogoText>{t("HEADER.NAV_BAR.YOUR_WAY_TO_SUCCESS")}</LogoText>
      </LogoContainer>
      {isOpen && <MobileMenu>{renderLinks}</MobileMenu>}
      <Nav>{renderLinks}</Nav>
      <ButtonsContainer>
        <LinkContainer
          href={`/${lng}/enroll`}
          $backgroundColor={theme.colors.gold}
        >
          {t("HEADER.TO_ENROLL")}
        </LinkContainer>
        <LinkContainer
          $backgroundColor={theme.colors.turquoise}
          href={`${lng}/enroll`}
        >
          {t("HEADER.CONTACT_US")}
        </LinkContainer>
        <Select value={language} onChange={handleLanguageChange}>
          <Option value="he">{t("HEADER.HEBREW")}</Option>
          <Option value="en">{t("HEADER.ENGLISH")}</Option>
        </Select>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
