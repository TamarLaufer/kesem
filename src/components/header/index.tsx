"use client";
import Link from "next/link";
import {
  ContainerStyle,
  Nav,
  LogoContainer,
  LinkContainer,
  LogoText,
} from "./Header.styles";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

const Header = () => {
  return (
    <ContainerStyle>
      <LogoContainer>
        <Image src={logo} alt="לוגו" width={120} height={60} />
        <LogoText>הדרך שלך להצלחה</LogoText>
      </LogoContainer>
      <Nav>
        <Link href="/">דף הבית</Link>
        <Link href="/enroll">הרשמה למרכז קסם</Link>
        <Link href="/lessons">שיעורים בוידאו</Link>
        <Link href="/come-join-us">בואו להיות מורים</Link>
        <Link href="/our-partners">השותפים שלנו</Link>
      </Nav>
      <LinkContainer>
        <Link href="/enroll">להרשמה</Link>
      </LinkContainer>
    </ContainerStyle>
  );
};

export default Header;
