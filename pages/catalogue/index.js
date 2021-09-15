import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Catalogue.module.css";
import { projects } from "../../public/projects.js";

export default function Catalogue() {
  // Iterates over the JSON of projects and creates an entry for each of them.
  function workEntries() {
    let worksHtml = [];
    for (const entry in projects) {
      let currentEntry = projects[entry];
      worksHtml.push(
        <div className={styles.workEntry} key={currentEntry.title}>
          <Link href={"catalogue/" + currentEntry.title}>
            <img
              src={currentEntry.imgUrl}
              className={styles.entryImage}
              height={currentEntry["thumbHeight"] || 300}
              width={currentEntry["thumbWidth"] || 300}
            />
          </Link>
          <div className={styles.entryText}>{projects[entry].shortText}</div>
        </div>
      );
    }

    return worksHtml;
  }

  return <div className="pageContainer">{workEntries()}</div>;
}
