import { useState } from 'react';
import { FilloutPopupEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import styles from "./ExploreLC.module.css";
import image from "./assets/saly-explore.png";



const ExploreLC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.explore} id="explore">
      <div className={styles.imageContainer}>
        <img src={image} alt="Explore illustration" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Discover our Networks</h2>
        <p className={styles.description}>
          Explore Our Communities. Connect, collaborate and grow your skills with µLearn. 
          Share your groundbreaking ideas and shape the future with IEDC.
        </p>
        <div className={styles.buttonGroup}>
          <a href="https://mulearn.org/" target="_blank" className={styles.button}>
            Join µLearn
          </a>
          <button onClick={() => setIsOpen(true)} className={styles.button}>
            IEDC Portal
          </button>
        </div>
      </div>
      {isOpen && (
        <FilloutPopupEmbed
          filloutId="e15cUVRMRVus"
          onClose={() => setIsOpen(false)}
        />
      )}
    </section>
  );
};

export default ExploreLC;