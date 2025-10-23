"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";
import { STRINGS } from "@/strings/common";

type LinkType = { href: string; name: string };

const links: LinkType[] = [
  { href: "/", name: STRINGS.HEADER.NAV_BAR.HOME_PAGE },
  { href: "/enroll", name: STRINGS.HEADER.NAV_BAR.ENROLL_TO_KESEM },
  { href: "/lessons", name: STRINGS.HEADER.NAV_BAR.ONLINE_LESSONS },
  { href: "/come-join-us", name: STRINGS.HEADER.NAV_BAR.COME_JOIN_US },
  { href: "/our-partners", name: STRINGS.HEADER.NAV_BAR.OUR_PARTNERS },
  { href: "/about-us", name: STRINGS.HEADER.NAV_BAR.ABOUT_US },
];

export default function HeaderClient() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const handleLinkPress = () => {
    setOpen(!isOpen);
  };

  return (
    <menu className={styles.header}>
      <div className={styles.logoAndHam}>
        <button className={styles.hamburger} onClick={handleLinkPress}>
          ☰
        </button>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={120}
              height={60}
              priority
            />
          </Link>
          <p className={styles.logoText}>
            {STRINGS.HEADER.NAV_BAR.YOUR_WAY_TO_SUCCESS}
          </p>
        </div>
      </div>

      {/* Mobile overlay & menu */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />
      <menu
        className={`${styles.mobileMenu} ${isOpen ? styles.show : ""}`}
        aria-hidden={!isOpen}
      >
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          ×
        </button>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={handleLinkPress}
          className={`${styles.navLink} ${pathname === "/contact" ? styles.navLinkActive : ""}`}
        >
          {STRINGS.HEADER.CONTACT_US}
        </Link>
      </menu>

      {/* Desktop nav */}
      <nav className={styles.navBar}>
        <ul className={styles.ul}>
          {links.map((link) => (
            <li key={link.href} className={styles.li}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.buttons}>
        <Link href="/enroll" className={`${styles.cta} ${styles.ctaGold}`}>
          {STRINGS.HEADER.TO_ENROLL}
        </Link>
        <Link href="/contact" className={`${styles.cta} ${styles.ctaTurq}`}>
          {STRINGS.HEADER.CONTACT_US}
        </Link>
      </div>
    </menu>
  );
}
