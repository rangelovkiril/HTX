import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="mailto:example@gmail.com">Gmail</a>
        <a href="https://www.facebook.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;