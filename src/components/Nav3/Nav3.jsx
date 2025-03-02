import React, { useState, useEffect } from "react";
import styles from "./Nav3.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SearchIcon from "@mui/icons-material/Search";

function Nav3() {
      const [openDropdown, setOpenDropdown] = useState(null);

      const handleToggle = (menu) => {
            setOpenDropdown(openDropdown === menu ? null : menu);
      };

      return (
            <div className={styles.navContainer}>
                  <div className={styles.navTextLeft}>
                        {["Find a Car", "How to Buy", "Sell your Car", "Finance & Insurance"].map((item, index) => (
                              <div key={index} className={styles.navItem}>
                                    <h1 onClick={() => handleToggle(item)}>
                                          {item}{" "}
                                          {item === "Find a Car" && (
                                                <SearchIcon sx={{ fontSize: 18, marginLeft: "18px" }} />
                                          )}
                                          {openDropdown === item ? (
                                                <ExpandLessIcon sx={{ fontSize: 12 }} />
                                          ) : (
                                                <ExpandMoreIcon sx={{ fontSize: 12 }} />
                                          )}
                                    </h1>
                                    {openDropdown === item && (
                                          <div className={styles.dropdownMenu}>
                                                <h2>Dropdown content for {item}</h2>
                                          </div>
                                    )}
                              </div>
                        ))}
                  </div>

                  <div className={styles.navTextRight}>
                        {["Auctions", "Service & Info"].map((item, index) => (
                              <div key={index} className={styles.navItem}>
                                    <h1 onClick={() => handleToggle(item)}>
                                          {item}
                                          {openDropdown === item ? (
                                                <ExpandLessIcon sx={{ fontSize: 12 }} />
                                          ) : (
                                                <ExpandMoreIcon sx={{ fontSize: 12 }} />
                                          )}
                                    </h1>
                                    {openDropdown === item && (
                                          <div className={styles.dropdownMenu}>
                                                <h2>Dropdown content for {item}</h2>
                                          </div>
                                    )}
                              </div>
                        ))}
                  </div>
            </div>
      );
}

export default Nav3;
