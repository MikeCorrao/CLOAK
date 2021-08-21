import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Projects.module.css";
import { projects } from "../../public/projects.js";

export default function Sample() {
  return (
    <div className="pageContainer">
      <div className={styles.projectImage}>
        <Image src="/images/cloak_logo.png" height={900} width={800} />
      </div>
      <div className="text">
        <p>Page Count — Dimensions</p>
        <p>Color or B&W</p>
      </div>
      <a href="">
        <div className={styles.purchaseLink}>PURCHASE LINK</div>
      </a>
      <div className={styles.projectDescription}>
        <div className="text">
          Project Description - Rum laboria plaut eum re licid ut aut dernatio.
          Aligentiunt omnisquias et etumet et mo volutaCone consequ aspelitam
          dol- lore stiunt, tem estrum am in cus si coribeaquas ut
          voluptatEpeditat ion- sequi nonecti nvelestiis atis magnis- que nonet
          atur? Sed untibus dolorei- ur sit litiand issimin consequam quiam
          dignisto quatis dit untiorrovid eium voluptatur? Quiaerum invellent
          exero ma sequat. Porio voles expe maiorentis estisin velestr umquiatur
          modis deniae eos es- temperia de venisimi, auda nobitet do- lore
          niento te volupta turerundior sin consecaesti siment laceaquatur?
          Aspiciam sintis none labore mint et dundebi tendele nducienisit est
          ali- atio magnatur, nullupta voluptas as essunt laceperior magnam dio
          que re
        </div>
      </div>
    </div>
  );
}
