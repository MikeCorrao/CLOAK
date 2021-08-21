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
          concealment, visibility, and surveillance. We are open to all forms
          from Print Books, PDFs, Browser-Based, Executables, or whatever other
          medium conceived.
        </p>
      </div>
    </div>
  );
}
