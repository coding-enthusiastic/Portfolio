import { Copyright, TopArrow } from "../../assets/icons/siteIcons";
import { siteDetails } from "../../data/about";
import { myName } from "../../data/data";
import styles from "./About.module.css";

function About() {
  const siteInfo = {
    disclaimer: `All rights are reserved by ${myName}.`,
    icon: <Copyright style={{ fontSize: "17px" }} />,
    year: "2025",
  };

  return (
    <>
      <div id="info" className="commonCSS">
        <div className={styles['footerArea']}>
          <h5>
            {siteDetails}
          </h5>
          <a className={styles['arrow']} href="#header">
            <TopArrow style={{ fontSize: "30px" }} />
          </a>
          <div>
            <p>{siteInfo.year}</p>
            <span>{siteInfo.icon}</span>
            <p>{siteInfo.disclaimer}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
