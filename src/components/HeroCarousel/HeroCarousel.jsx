import React from "react";
import styles from "./HeroCarousel.module.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function HeroCarousel() {
      return (
            <div className={styles.wrappedContainer}>
                  <div className={styles.carouselContainer}>
                        {/* <button className={styles.buttonPrev}></button>
                  <button className={styles.buttonNext}></button> */}
                        <button>
                              <ArrowBackIosNewOutlinedIcon />
                        </button>
                        <div className={styles.imageSlide}>
                              <img src="src\assets\car.jpg"></img>
                        </div>
                        <div className={styles.imageSlide}>{/* <img src="src\assets\test2.jpg"></img> */}</div>
                        <div className={styles.imageSlide}>{/* <img src="src\assets\test3.jpg"></img> */}</div>

                        <button>
                              <ArrowForwardIosOutlinedIcon />
                        </button>
                  </div>
                  <div className={styles.textContainer}>
                        <div className={styles.text}>
                              <h1>1000's of Quality Cars for Sale - 20 Locations Nationwide</h1>

                              <p>
                                    Turners Cars is the largest used car network in New Zealand with 20 car dealer
                                    locations nationwide. With a huge range of around 3,000 cars for sale (and another
                                    1,500 being prepared for sale at any one time) there is truly something for
                                    everyone. We’ve been helping Kiwis buy and sell used cars for almost 60 years. And
                                    if you want car finance or car insurance, we can sort that out for you as well.
                              </p>
                        </div>
                  </div>
            </div>
      );
}

export default HeroCarousel;
