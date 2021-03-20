import ReactDOM from 'react-dom'
import Head  from 'next/head'; //TODO
import styles from "./Layout.module.css";
import React from "react";
import IconButton from '../common/IconButton';

const buttonsImage = ['facebook', 'twitter'];

const showButtons =() => {
    return (
        <div>
            {
                buttonsImage.map((button) => {
                    return (
                        <IconButton
                            /* onClick={doStuff(button)}*/
                            iconClass={button}/>
                    );
                })
            }

        </div>
    );
};

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
               <header className={styles.rightHeader}>
                   <div>
                       {showButtons()}

                   </div>
               </header>
               <section className={styles.content}>
                   <div>
                       <h2 className={styles.subtitle}>Safety App for Women</h2>
                   </div>
                   <div>
                       <h3 className={styles.paragraph}>Women Safety app is the best app to inform and update your close ones if you are in an unsafe place. The app is the fastest and easiest way to update your close ones about your location and other details.</h3>
                        <h3 className={styles.paragraph}>You will never feel unsafe with this app. Keep it installed and stay alert!</h3>                           
                   </div>
                   <div>
                       <button> Get More Info</button>
                       <button> Install BeSafe</button>
                   </div>
               </section>
           </div>

       </div>
    );
};

export default Layout;