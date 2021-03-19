import Head  from 'next/head';
import styles from "./Layout.module.css"


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
               <header>
                   <icon className={styles.titel}>BeSafe</icon>
               </header>
           </div>
       </div>
    );
};

export default Layout;