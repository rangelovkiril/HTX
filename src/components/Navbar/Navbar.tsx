import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function NavBar (){
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/subjects">Subjects</Link>
        </li>
      </ul>
    </nav>
  );
};


