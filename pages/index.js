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
          CLOAK is an interdisciplinary publishing project, 
          exploring themes of visibility, concealment, and surveillance 
          through our catalogue of print & digital works.
          <br />
          <br />
          With each release, we aim to explore unconventional approaches to literature and design, 
          finding unique methods to convey / obscure / project meaning onto the text.
          <br />
          <br />
          <a href="https://www.etsy.com/shop/Cloakwtf?ref=seller-platform-mcnav" target="_blank" rel="noreferrer">CHECK OUT OUR MERCH</a>
          <br />
          <br />
          <a href="https://bookshop.org/p/books/vesicapiscis-aubrey-birch/21353838?ean=9798218411626" target="_blank" rel="noreferrer">CHECK OUT OUR LATEST RELEASE</a>
          <br />
          <br />
          We are open for submissions, with a particular interest in themes of visibility, concealment, 
          memetic construction, surveillance, sousveillance, moods of terror, panopticism, stigmata, 
          climate anxiety, anticapitalism, brackish water, xenoarchitecture, industrialized fear, beheading, 
          crying for months, crying for free, lo-res footage of plane crashes, virulent hyperstition, 
          burning houses, burning oil rigs, burning precincts, entombment, exit wounds, investing in bombs, 
          bloodletting, unionization, demonology, distorted karaoke, subterranean leakage, underground fires, 
          asbestos, nauseous hallways, self-reflection, vibe deception, immaculate conception, rogue signals, 
          mounting tensions, and self-immolation.
          <br />
          <br />
          Our titles are now available through <a href="https://asterismbooks.com/publisher/cloak" target="_blank" rel="noreferrer">Asterism</a>, alongside all major online distributors.
        </p>
      </div>
    </>
  );
}
