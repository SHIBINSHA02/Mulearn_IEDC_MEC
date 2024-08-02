import styles from "./ExploreLC.module.css";
import image from "./assets/explorelc.svg";

const ExploreLC = () => {
    return (
        <div className={styles.exploreLCWrapper}>
            <div className={styles.imageWrapper}>
                <img src={image} alt="" />
            </div>
            <div className={styles.contentWrapper}>
                <h1>Explore our communities </h1>
                <p>
                    Join IEDC today itself to enhance your new ideas
                </p>
                {
                    /*<a target="_blank" href="https://forms.fillout.com/t/e15cUVRMRVus">
                    IEDC portal
                </a>
                */}
                <div data-fillout-id="e15cUVRMRVus" data-fillout-embed-type="popup" data-fillout-dynamic-resize data-fillout-inherit-parameters data-fillout-popup-size="medium"> 
                </div>
                <script src="https://server.fillout.com/embed/v1/">
                </script>
            </div>
        </div>
    );
};

export default ExploreLC;

