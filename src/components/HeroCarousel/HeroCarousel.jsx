import React from "react";
import styles from "./HeroCarousel.module.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function HeroCarousel() {
      return (
            <div className={styles.carouselContainer}>
                  {/* <button className={styles.buttonPrev}></button>
                  <button className={styles.buttonNext}></button> */}
                  <button>
                        <ArrowBackIosNewOutlinedIcon />
                  </button>
                  <div className={styles.imageSlide}>
                        <img src="src\assets\test.jpg"></img>
                  </div>
                  <div className={styles.imageSlide}>{/* <img src="src\assets\test2.jpg"></img> */}</div>
                  <div className={styles.imageSlide}>{/* <img src="src\assets\test3.jpg"></img> */}</div>

                  <button>
                        <ArrowForwardIosOutlinedIcon />
                  </button>
            </div>
      );
}

export default HeroCarousel;
