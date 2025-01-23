import styles from "./DisplayBox.module.css";
const DisplayBox = ({ imgSrc, altText, text }) => {
    return(
            <div className={styles.displayBoxAdjust}>
              <div className={styles.displayBox}>
                <img src={imgSrc} alt={altText} />
                <p>{text}</p>
              </div>
            </div>
  );
};
export default DisplayBox;