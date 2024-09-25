import React from "react";
import styles from "./Footer.module.scss"; // CSS Modules import

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<p>&copy; 2024 Mit Projekt. Alle rettigheder forbeholdes.</p>
				<p>Udviklet af: Omid, Michael og Rolf</p>
			</div>
		</footer>
	);
};

export default Footer;
