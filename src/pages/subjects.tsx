import React, { useState } from "react";
import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import Link from "next/link";
import { Box, Button, Typography, Grid } from "@mui/material";

const SubjectBox = ({ name, joined }) => {
  const [joinedSubjects, setJoinedSubjects] = useState([]);

  const handleJoin = () => {
    const newJoinedSubjects = [...joinedSubjects, name];
    setJoinedSubjects(newJoinedSubjects);

    alert(`Successfully joined ${name} community!`);
  };

  return (
    <Box
      sx={{
display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "1000px",
        height: "30px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px 1%",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",

      }}
    >
      <Typography variant="h6" component="div" sx={{ display: "inline-block" }}>
        {name}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        disabled={joinedSubjects.includes(name)}
        onClick={handleJoin}
        sx={{ display: "inline-block" }}
      >
        {joinedSubjects.includes(name) ? "Joined" : "Join community"}
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
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            border: "1px white",
            borderRadius: "5px",
            padding: "10px",
            }}
        >
          {subjects.map((subject, index) => (
            <SubjectBox key={index} name={subject} />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SubjectsPage;