import { CareerInfo } from "../../data/personal";
import styles from "./Career.module.css";

function Career() {
  return (
    <>
      <div id="career" className="commonCSS">
        <div className="title">
          <h1>Career</h1>
        </div>
        <div className={styles.careerPath}>
          {CareerInfo.map((item, index) => (
            <div key={index} className={styles.careerCard}>
              <div>
                <p className={styles.careerYears}>{item.year}</p>
              </div>
              <div className="description">
                <h1 className="cardTitles">{item.role}</h1>
                <h5>
                  {item.company}, <i>{item.location}</i>
                </h5>
                <p className={styles.careerDetails}>{item.jobDetails}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Career;
