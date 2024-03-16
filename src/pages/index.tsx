import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import ConnectWallet from "../app/ConnectWallet";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Navbar />
      <div className={styles.content}>
        <h1>Бъди <br></br> Активен Ученик</h1>
        <p> Изразявайте мнението си,
           предлагайте подобрения в образованието и сътрудничете по 
           домашни работи чрез dF4s.
        </p>
        <ConnectWallet></ConnectWallet>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;