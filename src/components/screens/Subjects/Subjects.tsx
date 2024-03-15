import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Box, Button, Typography, Grid } from "@mui/material";

import styles from './subjects.module.scss'

// TODO: Rename file and clear logic !!!

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
    <div>
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
          {/* Map through subjects array */}
          {subjects.map((subject, index) => (
            <SubjectBox key={index} name={subject} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default SubjectsPage;
