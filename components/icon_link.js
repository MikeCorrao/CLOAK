import Head from "next/head";
import Image from "next/image";
import styles from "../styles/IconLink.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function IconLink(props) {
  const Router = useRouter();
  function pageTitle(location, text) {
    if (Router.pathname === location) {
      return <span className={styles.pageTitle}>{text}</span>;
    }
  }

  return (
    <div className={styles.navLink}>
      <a href={props.location}>
        <img
          src={"/icons/" + props.icon}
          width="80"
          height="80"
          className={styles.icon}
        />
      </a>
      {pageTitle(props.location, props.text)}
    </div>
  );
}
