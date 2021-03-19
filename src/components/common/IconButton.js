import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import styles from "../common/IconButton.module.css";

const iconComponents = {
    facebook: faFacebookSquare,
    twitter: faTwitterSquare
};

const IconButton = ({iconClass}) => {
    return (
        <button className={styles.iconButton} >
            {/* without component */}
            {/* <FontAwesomeIcon className={styles.icon} icon={faTwitterSquare} size="4x" />*/}
            <FontAwesomeIcon icon={iconComponents[iconClass]} size="6x" />
        </button>
    );
};






export default IconButton;
