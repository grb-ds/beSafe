import ReactDOM from 'react-dom'
import Head  from 'next/head';
import styles from "./Layout.module.css";
//import { KeyboardArrowDownRounded } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

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
                   <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                   <FontAwesomeIcon icon={faFacebook} />
                  {/* // Solid
                   <FontAwesomeIcon icon={["fas", "coffee"]} />
                   <div>Name</div>

                   <KeyboardArrowDownRounded />
*/}
               </header>
           </div>

       </div>
    );
};

export default Layout;