import styles from "./Footer.module.css";
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
import React from "react";
import Image from "next/image";

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

export default function Footer() {
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
    { icon: "Notes", text: STRINGS.CENTER_DETAIL },
    { icon: "Email", text: STRINGS.CENTER_EMAIL },
    { icon: "SmartPhone", text: STRINGS.CENTER_PHONE },
    { icon: "Location", text: STRINGS.RANANA_GIVAT_SHMUEL },
  ];

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerDirection}>
        <div className={styles.leftContent}>
          {footerInfo.map(({ icon, text }, idx) => {
            const Icon = icon ? iconMap[icon] : null;
            return (
              <div key={idx} className={styles.row}>
                <div className={styles.icon}>
                  {Icon && <Icon width={22} height={22} />}
                </div>
                <p className={styles.text}>{text}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.rightContent}>
          {socialLinks.map(({ SocialIcon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="social link"
            >
              <SocialIcon width={50} height={50} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.businessLogo}>
        <p className={styles.businessLogoText}>
          Designed & Developed by <strong>SEAL Studio</strong> – Web & Mobile
          Experiences | 📱 052-6240776
        </p>
        <Image
          src="/images/SEAL_Studio_Design_logo.png"
          alt="SEAL Studio logo"
          width={190}
          height={68}
          className={styles.logoImage}
        />
        {/* <p className={styles.businessLogoText}>
          Designed by SEAL Studio Design & Web Development sealstudio.co.il | ✉️
          tamar@sealstudio.co.il | 📱 052-6240776
        </p> */}
      </div>
    </div>
  );
}
