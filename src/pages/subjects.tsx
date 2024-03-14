import Navbar from "../pages/navbar";
import Footer from "../pages/Footer";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

const SubjectBox = ({ name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        width: "200px",
        height: "200px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <Typography variant="h6" component="div">
        {name}
      </Typography>
      <Button variant="contained" color="primary">
        Ask for review
      </Button>
      <Button variant="contained" color="secondary">
        Join community
      </Button>
    </Box>
  );
};

const SubjectsPage = () => {
  const subjects = ["Math", "Physics", "Chemistry", "Biology"];

  return (
    <div>
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
          }}
        >
          {subjects.map((subject, index) => (
            <SubjectBox key={index} name={subject} />
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default SubjectsPage;
