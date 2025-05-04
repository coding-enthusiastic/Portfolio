import { Languages, TechSkills } from "../../data/skills";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <>
      <div id="skills" className="commonCSS">
        <div className="title">
          <h1>Skills</h1>
        </div>

        <div className={styles.skillSet}>
          <div className={styles.techSkills}>
            <h1 className="cardTitles">Technical Skills</h1>
            {TechSkills.map((item, index) => (
              <div key={index} className={`${styles.techCardSet} description`}>
                <div className={styles.techCard}>
                  <span>{item.logo}</span>
                  <p>{item.techName}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.languageSet}>
            <h1 className="cardTitles">Languages</h1>
            {Languages.map((item, index) => (
              <div key={index} className={`${styles.languages} description`}>
                <div>
                  <p>{item.language}</p>
                  <span>[{item.level}]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
