import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/subjects">Subjects</Link>
        </li>
        <li>
          <Link href="/ask-for-review">Ask for Review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
