import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/"><img src="/instagram.png" alt="Instagram" /></a>
        <a href="mailto:example@gmail.com"><img src="/gmail.png" alt="Gmail" /></a>
        <a href="https://www.facebook.com/"><img src="/facebook.png" alt="Facebook" /></a>
      </div>
    </footer>
  );
};

export default Footer;