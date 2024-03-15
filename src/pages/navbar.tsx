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
<<<<<<< HEAD
        <li>
          <Link href="/ask-for-review">Ask for Review</Link>
        </li>
        <li>
          <Link href = "/feedback">Feedback</Link>
        </li>
=======
>>>>>>> parent of e927b4d (Refactor front-end architecture)
      </ul>
    </nav>
  );
};

export default Navbar;
