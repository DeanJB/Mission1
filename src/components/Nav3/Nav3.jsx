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
            // Input + button rendered when scrn size <= 1024px
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
                                                                  {item === "How to Buy" && (
                                                                        <>
                                                                              <p>View our cars</p>
                                                                              <p>Ways to Buy</p>
                                                                              <p>Book a test drive</p>
                                                                              <p>How to Pay</p>
                                                                              <p>FAQs about Buying</p>
                                                                              <p>Turner Live</p>
                                                                              <p>Website Tools</p>
                                                                        </>
                                                                  )}
                                                                  {/* content for sell your car dropdownMenu */}
                                                                  {item === "Sell your Car" && (
                                                                        <>
                                                                              <p>Ways to sell</p>
                                                                              <p>Book an appraisal</p>
                                                                              <p>FAQs about Selling</p>
                                                                        </>
                                                                  )}
                                                                  {item === "Finance & Insurance" && (
                                                                        <>
                                                                              <p>Ways to sell</p>
                                                                              <p>Book an appraisal</p>
                                                                              <p>FAQs about Selling</p>
                                                                        </>
                                                                  )}
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
                                                {/* dropdown menu for items in array above ^^ */}
                                                {openDropdown === item && (
                                                      <div className={styles.dropdownMenu}>
                                                            {/* content for auction dropdownMenu */}
                                                            {item === "Auctions" && (
                                                                  <>
                                                                        <p>All car auctions</p>
                                                                        <p>Whangarei</p>
                                                                        <p>North West Auckland</p>
                                                                        <p>Central/South Auckland</p>
                                                                        <p>Hamilton</p>
                                                                        <p>Tauranga</p>
                                                                  </>
                                                            )}
                                                            {/* content for service & info dropdownMenu */}
                                                            {item === "Service & Info" && (
                                                                  <>
                                                                        <p>5 Day Moneyback Guarantee</p>
                                                                        <p>Turner Group Overview</p>
                                                                        <p>Terms & Conditions</p>
                                                                        <p>Buyers & sellers fees</p>
                                                                        <p>Shipping costs</p>
                                                                        <p>Careers at Turners</p>
                                                                  </>
                                                            )}
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
