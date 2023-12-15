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
          Submissions are open to unconventional works in all forms print and digital concerned with
          themes of visibility and concealment. 
        </p>
        <br />
        <a href="https://www.instagram.com/cloak_wtf/" target="_blank" rel="noreferrer">
          FOLLOW OUR INSTAGRAM
        </a>
        <br />
        <br />
        <a href="https://www.twitter.com/cloak_wtf/" target="_blank" rel="noreferrer">
          FOLLOW OUR TWITTER
        </a>
        <br />
        <br />
        <a href="https://www.patreon.com/CLOAK_?fan_landing=true" target="_blank" rel="noreferrer">
          SUBSCRIBE TO OUR PATREON
        </a>
      </div>
    </div>
  );
}
