import { EducationData } from "../../data/personal";
import styles from "./Education.module.css";

function Education() {
  return (
    <>
      <div id="education" className="commonCSS">
        <div className="title">
          <h1>Education</h1>
        </div>

        <div className={styles.educationList}>
          {EducationData.map((item, index) => (
            <div key={index} className={styles.educationCard}>
              <div>
                <h1 className="cardTitles">{item.course}</h1>
                <h3>{item.institute}</h3>
                <p className={styles.eduYears}>{item.year}</p>
              </div>

              <div className="description">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
