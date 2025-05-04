import { useState } from "react";
import { ProjectsInfo } from "../../data/projects";
import styles from "./Project.module.css";

function Projects() {
  const [expandId, setExpandId] = useState(null);

  return (
    <>
      <div id="projects" className="commonCSS">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className={styles.projectList}>
          {ProjectsInfo.map((item, index) => (
            <div
              key={index}
              className={`${styles.projectCard} description ${
                expandId === index ? styles.expandProjectCard : ""
              }`}
              onClick={() => setExpandId(expandId === index ? null : index)}
            >
              <div className={styles.projectImage}>
                <span>{item.image}</span>
              </div>

              <div className={styles.projectItem}>
                <h1 className="cardTitles">{item.title}</h1>
                {item.tech.map((tech, techIndex) => (
                  <div key={techIndex} className={styles.techCard}>
                    {tech}
                  </div>
                ))}
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
