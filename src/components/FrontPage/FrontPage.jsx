import {
  about,
  facebookURL,
  githubURL,
  leetCodeURL,
  linkedinURL,
  mailID,
  myName,
} from "../../data/data";
import {
  Linkedin,
  Github,
  Mail,
  Facebook,
  Leetcode,
  ChangedLeetCode,
  ChangedMail,
} from "../../assets/icons/contactIcons";
import styles from "./FrontPage.module.css";
import { useState } from "react";

function FrontPage() {
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const lines = about.split("\n");

  const icons = [
    {
      icon: <Linkedin className={styles.blue} style={{ fontSize: "25px" }} />,
      url: linkedinURL,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: (
        <Leetcode className={styles.leetcode} style={{ fontSize: "25px" }} />
      ),
      url: leetCodeURL,
      target: "_blank",
      rel: "noopener noreferrer",
      changeSVG: true,
      newSVG: <ChangedLeetCode style={{ fontSize: "25px" }} />,
    },
    {
      icon: <Github style={{ fontSize: "25px" }} />,
      url: githubURL,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <Facebook className={styles.blue} style={{ fontSize: "25px" }} />,
      url: facebookURL,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <Mail className={styles.multiColor} style={{ fontSize: "27px" }} />,
      url: mailID,
      target: "_blank",
      rel: "noopener noreferrer",
      isMail: true,
      changeSVG: true,
      newSVG: <ChangedMail style={{ fontSize: "27px" }} />,
    },
  ];

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=`;

  return (
    <>
      <div id="main" className="commonCSS">
        <div className={styles.page}>
          <div className={styles.mainTitle}>
            <p>{myName}</p>
          </div>

          <div className={styles.icons}>
            {icons.map((item, index) => (
              <div
                className={styles.iconBox}
                key={index}
                onMouseEnter={() => {
                  if (item.changeSVG) {
                    if (index === 1) setIsHoveredOne(true);
                    if (index === 4) setIsHoveredTwo(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item.changeSVG) {
                    if (index === 1) setIsHoveredOne(false);
                    if (index === 4) setIsHoveredTwo(false);
                  }
                }}
              >
                {item.changeSVG ? (
                  (index === 1 && isHoveredOne) ||
                  (index === 4 && isHoveredTwo) ? (
                    <a
                      href={item.isMail ? `${gmail} ${item.url}` : item.url}
                      target={item.target}
                      rel={item.rel}
                    >
                      {item.newSVG}
                    </a>
                  ) : (
                    <a
                      href={item.isMail ? `${gmail} ${item.url}` : item.url}
                      target={item.target}
                      rel={item.rel}
                    >
                      {item.icon}
                    </a>
                  )
                ) : (
                  <a
                    href={item.isMail ? `${gmail} ${item.url}` : item.url}
                    target={item.target}
                    rel={item.rel}
                  >
                    {item.icon}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className={`${styles.description} description`}>
            {lines.map((line, index) => (
              <p key={index}>{line.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
