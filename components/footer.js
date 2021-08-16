import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <img
          src={"/images/patreon-creators-patreon.png"}
          width={100}
          height={100}
          className={styles.footerImage}
        />
      </div>
      <div className={styles.footerCenterLeft}></div>
      <div className={styles.footerCenterRight}>
        <div className={styles.text}>
          In order to best support our collaborators,CLOAK is funded exclusively
          through our Patreon, with 100 percent of royalties being paid to
          authors & artists.
        </div>
      </div>
      <div className={styles.footerRight}>
        <div></div>
      </div>
    </div>
  );
}
