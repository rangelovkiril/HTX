import Navbar from "../pages/navbar";
import Link from "next/link";
import Footer from "./Footer";
import styles from "../styles/subjects.module.css";

const SubjectsPage = () => {
  const subjects = ["Mathematics", "English", "Chemistry"];

  return (
    <div className={styles["home-page"]}>
      {" "}
      <Navbar />
      <h1>Subjects</h1>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            <Link href={`/subjects/${subject.toLowerCase()}`}>{subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectsPage;
