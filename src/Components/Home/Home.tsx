import styles from "./Home.module.css";
import image from "./assets/headphone man svg.svg"
import data from '../../../data.json'

const Home: React.FC = () => {
    return (
      <div className={styles.HomeWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h1>Revamp the Future</h1>
            <h2>with Inspira Marian IEDC X µlearn MCE</h2>
            <p>Inspira Marian IEDC and µLearn MCE are collaborating to advance innovation, skill development and empower future entrepreneurs.</p>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    );
  };
  

export default Home;