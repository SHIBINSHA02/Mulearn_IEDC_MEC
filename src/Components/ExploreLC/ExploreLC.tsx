import styles from "./ExploreLC.module.css";
import image from "./assets/explorelc.svg";

const ExploreLC = () => {
    return (
        <div className={styles.exploreLCWrapper}>
            <div className={styles.imageWrapper}>
                <img src={image} alt="" />
            </div>
            <div className={styles.contentWrapper}>
                <h1>Explore Learning Circles</h1>
                <p>
                    Join IEDC today itself to enhance your new ideas
                </p>
                <a target="_blank" href="https://app.mulearn.org/learning-circle">
                    IEDC portal
                </a>
            </div>
        </div>
    );
};

export default ExploreLC;