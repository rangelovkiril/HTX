import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import Link from "next/link";
import styles from "../styles/AskForReviewPage.module.css";
import { useState } from "react";

const AskForReviewPage = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const subjects = [
    "Математика",
    "Физика",
    "Химия",
    "Биология",
    "Програмиране",
    "История",
    "Английски език",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Ask for Review</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Title:</label>
          <input
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Subject:</label>
          <select
            className={styles.input}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Description:</label>
          <textarea
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AskForReviewPage;
