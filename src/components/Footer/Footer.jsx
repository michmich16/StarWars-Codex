import React from "react";
import styles from "./Footer.module.scss"; // CSS Modules import


export const Footer = () => {
	return (
		<footer className={styles.footer}>
      <hr className={styles.divider} />
      <div className={styles.copyright}>
        <p>&copy; 2024 StarWars Codex GraphQL Projekt. </p>
        <p>Udviklet af: Omid, Michael og Rolf</p>
      </div>
		</footer>
	);
};