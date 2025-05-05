import { useEffect, useState } from "react";
import styles from "./Resume.module.css";

function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const pdfLink = "/CV.pdf";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.pdfScreen}>
      {isLoading ? (
        <p>Loading Resume...</p>
      ) : (
        <object
          data={pdfLink}
          type="application/pdf"
          width="100%"
          height="1000px"
          onError={() => console.error("Failed to load PDF..!")}
        >
          <p className={styles.pdfErrorText}>
            Your browser does not support PDFs. You can{<br />}
            <a href="/CV.pdf">Download the PDF</a>
          </p>
        </object>
      )}
    </div>
  );
}

export default Resume;
