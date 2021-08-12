import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Image
        src={"/images/patreon-creators-patreon.png"}
        width={130}
        height={130}
        className={styles.footerImage}
      />
      <div className={styles.text}>
        In order to best support our collaborators,CLOAK is funded exclusively
        through our Patreon, with 100 percent of royalties being paid to authors
        & artists.
      </div>
    </div>
  );
}
