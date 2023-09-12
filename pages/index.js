import Head from "next/head";
import Image from "next/image";
import ObjectViewer from "../components/objectViewer.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.objectViewer}>
        <ObjectViewer title={"CLOAK3DSCULPTURE"} />
      </div>

      <div className={styles.homeText}>
        <p>
          CLOAK is an interdisciplinary publishing project focused on
          visibility, concealment, and surveillance.
          <br />
          <br />
          Each work we publish is designed to best fit the medium of its
          release. Whether book, executable, or pdf.
          <br />
          <br />
          Our titles are now available through <a href="https://asterismbooks.com/publisher/cloak" target="_blank" rel="noreferrer">ASTERISM</a>
          <br />
          <br />
          <a href="https://bookshop.org/p/books/panopticon-fragments-jeremy-bentham/20536933?ean=9798218267605" target="_blank" rel="noreferrer">CHECK OUT OUR LATEST RELEASE</a>
        </p>
      </div>
    </>
  );
}
