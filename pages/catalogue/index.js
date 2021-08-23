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
      worksHtml.push(
        <div className={styles.workEntry} key={projects[entry].title}>
          <Link href={"catalogue/" + projects[entry].title}>
            <img src={projects[entry].imgUrl} className={styles.entryImage} />
          </Link>
          <div className={styles.entryText}>
            Some generic text to show Steve how this works.
          </div>
        </div>
      );
    }

    return worksHtml;
  }

  return <div className="pageContainer">{workEntries()}</div>;
}

// <div className={styles.entryText}>{projects[entry].text}</div>
