import Head  from 'next/head';
import styles from "./Layout.module.css"


const Layout = ({children}) => {
    return (
       <div className={styles.container}>
           <div className={styles.left}>
               <header>
                   <h1 className={styles.titel}>BeSafe</h1>
               </header>
               
                   
               

           </div>
           <div className={styles.right}>

           </div>
       </div>
    );
};

export default Layout;