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
                       <h4 className={styles.paragraph}>If you could count the skeletons in my closet.
                           Under my bed and up under my faucet. Then you would know I've completely lost it.
                           Is he nuts? No, he's insane. If you could count the skeletons in my closet.
                           Under my bed and up under my faucet. Then you would know I've completely lost it.
                           Is he nuts? No, he's insane.</h4>
                   </div>
               </section>
           </div>

       </div>
    );
};

export default Layout;