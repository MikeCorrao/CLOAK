import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Catalogue.module.css";
import { works } from "../../public/works.js";

export default function Catalogue() {
  function workEntries() {
    let worksHtml = works.map((entry) => (
      <div className={styles.workEntry} key={entry.title}>
        <a target="_blank" rel="noopener noreferrer" href={entry.url}>
          <img src={entry.imgUrl} className={styles.entryImage} />
        </a>
        <div className={styles.entryText}>{entry.text}</div>
      </div>
    ));

    return worksHtml;
  }

  return <div className="pageContainer">{workEntries()}</div>;
}
