import React from "react";
import styles from "./Nav2.module.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Nav2() {
      return (
            <div className={styles.navWrapper}>
                  <div className={styles.navContainer}>
                        <div className={styles.navLeft}>
                              <img src="src\assets\TurnersLogo.jpg"></img>
                        </div>
                        <div className={styles.navRight}>
                              <PersonIcon sx={{ "&:hover": { color: "#d50000" } }} />
                              <h1 className={styles.textHighlightL}>LOGIN</h1>
                              OR
                              <h1 className={styles.textHighlightL}>REGISTER</h1>
                              <PhoneIcon sx={{ "&:hover": { color: "#d50000" } }} />
                              <h1 className={styles.textHighlight}>0800 887 637</h1>
                              <LocationOnIcon sx={{ "&:hover": { color: "#d50000" } }} />
                              <h1 className={styles.textHighlight}>Find Us</h1>
                        </div>
                  </div>
            </div>
      );
}

export default Nav2;
