import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import IconLink from "./icon_link.js";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>footer</p>
    </div>
  );
}
