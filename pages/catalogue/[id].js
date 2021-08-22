import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Projects.module.css";
import { projects } from "../../public/projects.js";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const projectObject = projects[id];

  // Takes in the 'id' param, access the value in the projects JSON (if it exists)
  // If the object exists it generated the HTML from the JSON, otherwise returns
  // some 404 text.
  if (projectObject !== undefined) {
    return (
      <div className="pageContainer">
        <div className={styles.projectImage}>
          <img src={projectObject["imgUrl"]} height={900} width={800} />
        </div>
        <div className="text">
          <p>Page Count — Dimensions</p>
          <p>Color or B&W</p>
        </div>
        <a href={projectObject["projectUrl"]}>
          <div className={styles.purchaseLink}>PURCHASE LINK</div>
        </a>
        <div className={styles.projectDescription}>
          <div className="text">{projectObject.text}</div>
        </div>
      </div>
    );
  } else {
    return <div className="text">404 Sorry, project not found.</div>;
  }
};

export default Project;