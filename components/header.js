import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import IconLink from "./icon_link.js";

const IconArray = [
  { icon: "entrance.png", location: "/", text: "Entrance" },
  { icon: "catalogue.png", location: "/catalogue", text: "Catalogue" },
  { icon: "signal.png", location: "/signal", text: "Tune into the Signal" },
  { icon: "contact.png", location: "/contact", text: "Contact Us" },
];

export default function Header() {
  function generateIconLinks() {
    let IconArrayHtml = IconArray.map((entry) => (
      <IconLink icon={entry.icon} location={entry.location} text={entry.text} />
    ));

    return IconArrayHtml;
  }
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <Image src="/images/cloak_logo.png" width="600" height="250" />
      </div>
      <div className={styles.nav}>{generateIconLinks()}</div>
    </div>
  );
}
