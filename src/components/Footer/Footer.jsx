import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_text}>© 2024 GG Store. All rights reserved</p>
        </footer>
    )
}

export default Footer;