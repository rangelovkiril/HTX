import React from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import Link from "next/link";
import { Box, Button, Typography, Grid } from "@mui/material";

<<<<<<< HEAD:src/components/screens/Subjects/Subjects.tsx
import styles from './subjects.module.scss'

// TODO: Rename file and clear logic !!!

=======
>>>>>>> parent of e927b4d (Refactor front-end architecture):src/pages/subjects.tsx
const SubjectBox = ({ name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "50px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        "&:hover": {
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Typography variant="h6" component="div">
        {name}
      </Typography>
      <Button variant="contained" color="secondary">
        Join community
      </Button>
    </Box>
  );
};

const SubjectsPage = () => {
  const subjects = [
    "Математика",
    "Физика",
    "Химия",
    "Биология",
    "Програмиране",
    "История",
    "Английски език",
  ];

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" component="div">
          Subjects
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
            flexWrap: "wrap",
          }}
        >
<<<<<<< HEAD:src/components/screens/Subjects/Subjects.tsx
          {/* Map through subjects array */}
=======
>>>>>>> parent of e927b4d (Refactor front-end architecture):src/pages/subjects.tsx
          {subjects.map((subject, index) => (
            <SubjectBox key={index} name={subject} />
          ))}
        </Box>
      </Box>
<<<<<<< HEAD:src/components/screens/Subjects/Subjects.tsx
    </div>
=======
      <Footer />
    </>
>>>>>>> parent of e927b4d (Refactor front-end architecture):src/pages/subjects.tsx
  );
};

export default SubjectsPage;
