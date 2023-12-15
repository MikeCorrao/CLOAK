import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Signal.module.css";

export default function Signal() {
  return (
    <div className="pageContainer">
      <div className="text">
        <p>
          The CLOAK is a tool of obfuscation. It works not by rendering itself
          undetectable, but rather by creating a surface which conceals the 
          actions beneath. These actions remain visible in the broader sense, 
          but their details are masked. The observer may notice the russling of 
          fabric, the moving of limbs, but they are unable to discern what is russling, 
          what limbs are moving, what these movements may lead to. Projected through
          this surface, the gestures of the hand become decoys, ploys, stratagem 
          against the observer.
        </p>

        <p>A blurring flourish / a stealth weapon / a vestigial skin</p>

        <p>
          Across this medium, the many mediums contained within it, 
          the literary-object becomes multi-functional. First, as an independent 
          entity. Something that's value is not tethered to the subject. 
          Autonomous / at times unobserved. Then, as a subject-in-itself, 
          projecting its will back onto the reader. Turning them into something 
          viewed, read, watched. A participant, willing or not, in the creation 
          and perpetuation of the artwork.
        </p>

        <p>The body of work / The body of the work / The work of the body</p>

        <p>
          The CLOAK engenders visibility on the terms of the observed. 
          It's creation is inevitably digital, not unlike most contemporary
          literature. The text is written on a computer. In Microsoft Word, 
          Google Docs, Notepad, Libre. Its appearance is designed on InDesign, 
          Powerpoint, Affinity, Twine, Rhino. Its form is produced by IngramSpark, 
          Itch.io, KDP, BookMobile, Friesens. It is not only important to recognize 
          these constraints within the creation of the text, but find ways in 
          which they can be warped to benefit the objects of their inception.
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
        We would like to thank German Sierra, Daymian Snowden, Logan Berry, William Watson, Danika Stegeman LeMay, Sam Machell, Mariana Marangoni, Michael and Adrienne Gower, Chase P-G, Tristan James, Feral Dove, Logan Jones, Jace Britain, Jake Reber, Jared Billings, and Alec Vohnoutka for their support.
        </p>
        
      </div>
    </div>
  );
}
