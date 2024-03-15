import React from 'react';
import styles from './Footer.module.scss';

export default function Footer () {
  return (
    <footer className={styles.footer}>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="mailto:example@gmail.com">Gmail</a>
        <a href="https://www.facebook.com/">Facebook</a> 
    </footer>
  );
};

