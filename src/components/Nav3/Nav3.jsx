// Imports
import React, { useState, useEffect } from "react";
import styles from "./Nav3.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SearchIcon from "@mui/icons-material/Search";

function Nav3() {
      // Variables
      const [openDropdown, setOpenDropdown] = useState(null);
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

      // Toggle dropdown menu
      const handleToggle = (menu) => {
            setOpenDropdown(openDropdown === menu ? null : menu);
      };
      // updates isMobile state for window resize (1024px)
      useEffect(() => {
            const handleResize = () => {
                  setIsMobile(window.innerWidth <= 1024);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      return (
            // Input + button rendered when scrn size = 1024px
            <div className={styles.navContainer}>
                  {isMobile ? (
                        <div className={styles.searchContainer}>
                              <input type="text" placeholder="type here" className={styles.searchInput} />
                              <button className={styles.searchButton}>SEARCH</button>
                        </div>
                  ) : (
                        <>
                              <div className={styles.navTextLeft}>
                                    {["Find a Car", "How to Buy", "Sell your Car", "Finance & Insurance"].map(
                                          // Mapping through an array
                                          (item, index) => (
                                                <div key={index} className={styles.navItem}>
                                                      <h1 onClick={() => handleToggle(item)}>
                                                            {item === "Find a Car" && (
                                                                  <SearchIcon
                                                                        sx={{ fontSize: 18, marginLeft: "0px" }}
                                                                  />
                                                            )}
                                                            {item} {/*SearchIcon will render before items in array */}
                                                            {openDropdown === item ? (
                                                                  <ExpandLessIcon sx={{ fontSize: 12 }} />
                                                            ) : (
                                                                  <ExpandMoreIcon sx={{ fontSize: 12 }} />
                                                            )}
                                                      </h1>
                                                      {/* dropdown menu for items in array */}
                                                      {openDropdown === item && (
                                                            <div className={styles.dropdownMenu}>
                                                                  <h2>Dropdown content for {item}</h2>
                                                            </div>
                                                      )}
                                                </div>
                                          )
                                    )}
                              </div>

                              <div className={styles.navTextRight}>
                                    {/* Mapping through array of items for right side nav */}
                                    {["Auctions", "Service & Info"].map((item, index) => (
                                          <div key={index} className={styles.navItem}>
                                                <h1 onClick={() => handleToggle(item)}>
                                                      {item} {/* MUI icons will render AFTER items */}
                                                      {openDropdown === item ? (
                                                            <ExpandLessIcon sx={{ fontSize: 12 }} />
                                                      ) : (
                                                            <ExpandMoreIcon sx={{ fontSize: 12 }} />
                                                      )}
                                                </h1>
                                                {/* dropdown menu for items in array */}
                                                {openDropdown === item && (
                                                      <div className={styles.dropdownMenu}>
                                                            <h2>Dropdown content for {item}</h2>
                                                            <h2>Dropdown content for {item}</h2>
                                                            <h2>Dropdown content for {item}</h2>
                                                            <h2>Dropdown content for {item}</h2>
                                                      </div>
                                                )}
                                          </div>
                                    ))}
                              </div>
                        </>
                  )}
            </div>
      );
}

export default Nav3;
