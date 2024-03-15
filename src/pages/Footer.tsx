import styles from '../styles/Footer.module.css'

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
    return (
        <footer className={styles.footer}>
            <div>
                <a href="https://www.instagram.com/df4s.2024/">Instagram</a>
                <a href="https://mail.google.com/mail/u/5/#inbox">Gmail</a>
                <a href="https://www.facebook.com/">Facebook</a>
            </div>
        </footer>
    )
}

export default Footer
