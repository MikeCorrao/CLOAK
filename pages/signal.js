import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Signal.module.css";

export default function Signal() {
  return (
    <div className="pageContainer">
      <div className="text">
        <p>
          The CLOAK is a means of obfuscation. Not by rendering itself
          undetectable, but rather by creating a surface which conceals its
          contents. Allowing for the user to detect action, but not to discern
          what that particular action really is.
        </p>

        <p>A blurring flourish / stealth weapon / a vestigial skin</p>

        <p>
          The role of the object is two-fold. First to position itself as
          something independent of the user (which does
          not rely on the subject’s capacity to interface). And second, to observe /
          document its environment—looking back as it is looked upon.
          Articulating a multi-directionality within the acts of READING &
          VIEWING.
        </p>

        <p>
          The CLOAK is an anti-solarist tool. Its creation is distinctly
          digital. The text is written on a computer. In Word, Google Drive,
          Notepad. Its shape is arranged on InDesign, PowerPoint, Rhino. Its
          body is produced by IngramSpark, KDP, BookMobile.
        </p>

        <Link href="/catalogue/CLOAK" target="_blank" rel="noreferrer">
          <p className={styles.signalLink}>
            To learn more, consider purchasing our introductory release.
          </p>
        </Link>

        <p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
         We would like to thank German Sierra, Daymian Snowden, Logan Berry, William Watson, Danika Stegeman LeMay, Michael and Adrienne Gower, Chase P-G, Tristan James, Feral Dove, Logan Jones, Jace Britain, Jake Reber, Jared Billings, and Alec Vohnoutka for their support as material witnesses to the mass beneath the cloak.
        </p>

      </div>
    </div>
  );
}
