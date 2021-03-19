import ReactDOM from 'react-dom'
import Head  from 'next/head';
import styles from "./Layout.module.css";
//import { KeyboardArrowDownRounded } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import React from "react";

const Layout = ({children}) => {
    return (
       <div className={styles.container}>
           <div className={styles.left}>
               <header>
                   <h1 className={styles.title}>BeSafe</h1>
               </header>
               <footer>
                   <p className={styles.footer}>Copyright BeSafe © 2021</p>
               </footer>

           </div>
           <div className={styles.right}>
               <header className={styles.iconHeader}>
                   <FontAwesomeIcon className={styles.icon} icon={faTwitterSquare} size="4x" />
                   <FontAwesomeIcon className={styles.icon} icon={faFacebookSquare} size="4x" />

               </header>
           </div>

       </div>
    );
};

export default Layout;