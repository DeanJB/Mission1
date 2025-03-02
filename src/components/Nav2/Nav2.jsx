import React, { useState, useEffect } from "react";
import styles from "./Nav2.module.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

function Nav2() {
      const [isMobile2, setIsMobile2] = useState(false);
      const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => {
            setMenuOpen((prevState) => !prevState);
      };

      useEffect(() => {
            const handleResize = () => {
                  setIsMobile2(window.innerWidth <= 1024);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      return (
            <div className={styles.navWrapper}>
                  <div className={styles.navContainer}>
                        <div className={styles.navLeft}>
                              <img src="src\assets\TurnersLogo.jpg"></img>
                        </div>

                        <div className={styles.hamMuiIcons}>
                              <LocationOnIcon />
                              <PersonIcon />
                              <PhoneIcon />
                              <SearchIcon />
                        </div>
                        {isMobile2 && (
                              <div
                                    className={`${styles.hamMenu} ${menuOpen ? styles.active : ""} `}
                                    onClick={toggleMenu}
                              >
                                    <div className={styles.sideBar}></div>
                                    <div className={styles.sideBar}></div>
                                    <div className={styles.sideBar}></div>
                                    <div className={styles.sideBar}></div>
                                    <div className={styles.sideBar}></div>
                              </div>
                        )}

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
