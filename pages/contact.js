import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className="pageContainer">
      <div className="text">
        <p>
          CLOAK can be contacted via email at{" "}
          <span className={styles.email}>
            CLOAK.PUBLISHING.PROJECT [AT] GMAIL [DOT] COM
          </span>{" "}
          for both general inquires and submissions.
        </p>
        <p>
          {" "}
          Submissions are open to unconventional works concerned with
          concealment, visibility, and/or surveillance. We are open to all forms
          from Print Books, PDFs, Browser-Based, Executables, or whatever other
          medium conceived.
        </p>
        <br />
        <a href="https://www.instagram.com/cloak_wtf/" target="_blank" rel="noreferrer">
          INSTAGRAM
        </a>
        <br />
        <br />
        <a href="https://www.twitter.com/cloak_wtf/" target="_blank" rel="noreferrer">
          TWITTER
        </a>
      </div>
    </div>
  );
}
