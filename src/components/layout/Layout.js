import Head  from 'next/head';
import styles from "./Layout.module.css"
import { ReactComponent as Logo } from '../../assets/images/super_woman.svg';

const Layout = ({children}) => {
    return (
       <div className={styles.container}>
           <div className={styles.left}>
               <header>
                   <h1>BeSafe</h1>
               </header>
               <section>
                   <Logo className={styles.logo}/>
               </section>

           </div>
           <div className={styles.right}>

           </div>
       </div>
    );
};

export default Layout;