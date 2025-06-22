"use client";
import Link from "next/link";
import {
  HeaderContainer,
  LogoContainer,
  LinkContainer,
  LogoText,
  ButtonsContainer,
  Hamburger,
  MobileMenu,
  Ul,
} from "./Header.styles";
import Image from "next/image";
import { theme } from "@/theme";
import { useState } from "react";
import { STRINGS } from "@/strings/common";

type LinkType = {
  href: string;
  name: string;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/`, name: STRINGS.HEADER.NAV_BAR.HOME_PAGE },
    { href: `/enroll`, name: STRINGS.HEADER.NAV_BAR.ENROLL_TO_KESEM },
    { href: `/lessons`, name: STRINGS.HEADER.NAV_BAR.ONLINE_LESSONS },
    { href: `/come-join-us`, name: STRINGS.HEADER.NAV_BAR.COME_JOIN_US },
    { href: `/our-partners`, name: STRINGS.HEADER.NAV_BAR.OUR_PARTNERS },
    { href: `/about-us`, name: STRINGS.HEADER.NAV_BAR.ABOUT_US },
  ];

  const handleLInkPress = () => {
    setIsOpen(!isOpen);
  };

  const renderLinks = links.map((oneLink: LinkType) => {
    return (
      <li key={oneLink.name}>
        <Link href={oneLink.href} onClick={handleLInkPress}>
          {oneLink.name}
        </Link>
      </li>
    );
  });

  return (
    <HeaderContainer className="hamburger">
      <Hamburger onClick={handleLInkPress}>☰</Hamburger>
      <LogoContainer>
        <Image src="/images/logo.png" alt="logo" width={120} height={60} />
        <LogoText>{STRINGS.HEADER.NAV_BAR.YOUR_WAY_TO_SUCCESS}</LogoText>
      </LogoContainer>
      {isOpen && <MobileMenu>{renderLinks}</MobileMenu>}
      <nav>
        <Ul>{renderLinks}</Ul>
      </nav>
      <ButtonsContainer>
        <LinkContainer href={`/enroll`} $backgroundColor={theme.colors.gold}>
          {STRINGS.HEADER.TO_ENROLL}
        </LinkContainer>
        <LinkContainer
          $backgroundColor={theme.colors.turquoise}
          href={`/contact`}
        >
          {STRINGS.HEADER.CONTACT_US}
        </LinkContainer>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
