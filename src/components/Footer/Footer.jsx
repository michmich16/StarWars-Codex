import React from "react";
import styles from "./Footer.module.scss"; // CSS Modules import


export const Footer = () => {
	return (
		<footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h4>Profile</h4>
          <ul>
            <li>FAQ's</li>
            <li>Pricing plans</li>
            <li>Order tracking</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Recent Posts</h4>
          <ul>
            <li>Touch of uniqueness</li>
            <li>Offices you won't forget</li>
            <li>Cilician</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Customer</h4>
          <ul>
            <li>Help & contact us</li>
            <li>Return</li>
            <li>Online stores</li>
            <li>Terms & condition</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Contact</h4>
          <div className={styles.socialIcons}>
            {/* Icons kan tilføjes her */}
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.copyright}>
        <p>&copy; 2024 StarWars GraphQL Projekt. </p>
        <p>Udviklet af: Omid, Michael og Rolf</p>
      </div>

		</footer>
	);
};


