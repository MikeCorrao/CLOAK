import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Projects.module.css";
import { projects } from "../../public/projects.js";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const projectObject = projects[id];

  if (projectObject !== null) {
    return (
      <div className="pageContainer">
        <div className={styles.projectImage}>
          <Image src={projectObject.imgUrl} height={900} width={800} />
        </div>
        <div className="text">
          <p>Page Count — Dimensions</p>
          <p>Color or B&W</p>
        </div>
        <a href="">
          <div className={projectObject.url}>PURCHASE LINK</div>
        </a>
        <div className={styles.projectDescription}>
          <div className="text">{projectObject.text}</div>
        </div>
      </div>
    );
  } else {
    return <p>Sorry, page not found.</p>;
  }
};

export default Project;
