import React from "react";
import styles from "./index.module.css";
import Navbar from "../../components/navbar";

export default function Events(){



    return (
        <>
            <Navbar/>
            <div className={styles.root}>
                <p>Initial</p>
            </div>
        </>
    )
}