import React from "react";
import Layout from "./layout";
import Footer from "../components/Footer/Footer";
import Home from "../components/screens/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import SubjectsPage from "../components/screens/Subjects/Subjects";

export default function App(){
    return(
        <Layout>
            <Navbar/>
            
            {
                // Routing between Header and navbar
            }
            <SubjectsPage/>

            <Footer/>
        </Layout>
    )
}