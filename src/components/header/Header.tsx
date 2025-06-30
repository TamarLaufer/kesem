"use client";
import Link from "next/link";
import {
  HeaderContainer,
  LogoContainer,
  LinkContainer,
  LogoText,
  ButtonsContainer,
  Hamburger,
  Ul,
  NavBar,
  LogoAndHam,
  HamburgerContainer,
  Li,
  MenuButton,
  MobileMenuMotion,
  Overlay,
  CloseButton,
} from "./Header.styles";
import Image from "next/image";
import { theme } from "@/theme";
import { useState } from "react";
import { STRINGS } from "@/strings/common";
import { AnimatePresence } from "framer-motion";

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
      <Li key={oneLink.name}>
        <Link href={oneLink.href} onClick={handleLInkPress}>
          {oneLink.name}
        </Link>
      </Li>
    );
  });

  return (
    <HeaderContainer>
      <LogoAndHam>
        <HamburgerContainer>
          <Hamburger onClick={handleLInkPress}>☰</Hamburger>
        </HamburgerContainer>
        <LogoContainer>
          <Image src="/images/logo.png" alt="logo" width={120} height={60} />
          <LogoText>{STRINGS.HEADER.NAV_BAR.YOUR_WAY_TO_SUCCESS}</LogoText>
        </LogoContainer>
      </LogoAndHam>
      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay onClick={handleLInkPress} />
            <MobileMenuMotion
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
            >
              <CloseButton onClick={handleLInkPress}>×</CloseButton>
              {renderLinks}
              <MenuButton href="/contact" onClick={handleLInkPress}>
                {STRINGS.HEADER.CONTACT_US}
              </MenuButton>
            </MobileMenuMotion>
          </>
        )}
      </AnimatePresence>
      <NavBar>
        <Ul>{renderLinks}</Ul>
      </NavBar>
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
