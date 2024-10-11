import React from "react";

import Header from "../Components/Layouts/Header";
import Navbar from "../Components/Layouts/NavBar";
import SOSButton from "../Components/Specific/SOSButton";
import Map from "../Components/Specific/Map";

import Styles from "./Home.module.css";

function Home () {
    return (
        <div className={Styles.container}>

            <Header/>
            <Map/>
            <SOSButton className={Styles.SOSButton}/>
            <Navbar />
        </div>
    )
}

export default Home;