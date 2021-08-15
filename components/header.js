import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import IconLink from "./icon_link.js";

export default function Header() {
  return (
    <div className={styles.header}>
      <img
        src="images/cloak_logo.png"
        width="600"
        height="550"
        className={styles.icon}
      />
      <div className={styles.nav}>
        <IconLink icon={"entrance.png"} location={"/"} text={"Entrance"} />
        <IconLink
          icon={"catalogue.png"}
          location={"/catalogue"}
          text={"Catalogue"}
        />
        <IconLink
          icon={"signal.png"}
          location={"/signal"}
          text={"Tune into the Signal"}
        />
        <IconLink
          icon={"contact.png"}
          location={"/contact"}
          text={"Contact Us"}
        />
      </div>
    </div>
  );
}
