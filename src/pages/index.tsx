import Navbar from "./navbar";
import Footer from "./Footer";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Navbar />
      <div className={styles.content}>
        <h1>Добре дошли!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;