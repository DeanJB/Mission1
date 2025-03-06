// Imports
import React from "react";
import styles from "./Nav1.module.css";

function Nav1() {
      return (
            // Nav Container + text
            <div className={styles.navContainer}>
                  <div className={styles.text}>
                        <h1>Cars</h1>
                        <span>|</span>
                        <h1>Trucks & Machinery</h1>
                        <span>|</span>
                        <h1>Damaged & End of Life</h1>
                        <span>|</span>
                        <h1>Motorcycles</h1>
                        <span>|</span>
                        <h1>General Goods</h1>
                        <span>|</span>
                        <h1>Buses, Caravans & Motorhomes</h1>
                        <span>|</span>
                        <h1>Boats & Marine</h1>
                  </div>
            </div>
      );
}

export default Nav1;
