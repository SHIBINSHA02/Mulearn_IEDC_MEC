import styles from "./ExploreLC.module.css";
import image from "./assets/explorelc.svg";
import { FilloutPopupEmbed } from "@fillout/react";
import { useState } from "react";
import "@fillout/react/style.css";


const ExploreLC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.exploreLCWrapper} id="iedc">
            <div className={styles.imageWrapper}>
                <img src={image} alt="" />
            </div>
            <div className={styles.contentWrapper}>
                <h1>Explore our communities </h1>
                <p>
                    Join IEDC today itself to enhance your new ideas
                </p>
                <>

                    <button onClick={() => setIsOpen(true)}>
                        Join IEDC
                    </button>

                    {isOpen && (
                        <FilloutPopupEmbed
                            filloutId="e15cUVRMRVus"
                            onClose={() => setIsOpen(false)}
                        />
                    )}
                </>
                {
                    /*<a target="_blank" href="https://forms.fillout.com/t/e15cUVRMRVus">
                    IEDC portal
                </a>
                */}
            </div>
        </div>
    );
};

export default ExploreLC;

