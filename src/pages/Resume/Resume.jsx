import styles from "./Resume.module.css";

function Resume() {
  return (
    <div className={styles.pdfScreen}>
      <object
        data="/src/assets/pdf/CV.pdf"
        type="application/pdf"
        width="100%"
        height="1000px"
      >
        <p className={styles.pdfErrorText}>
          Your browser does not support PDFs. You can{<br />}
          <a href="/src/assets/pdf/CV.pdf">Download the PDF</a>.
        </p>
      </object>
    </div>
  );
}

export default Resume;
