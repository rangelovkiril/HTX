import Navbar from "./navbar";
import Footer from "./Footer";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Navbar />
      <div>
        <h1>Welcome to the Home Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
