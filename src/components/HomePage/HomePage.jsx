import Nav1 from "../Nav1/Nav1";
import Nav2 from "../Nav2/Nav2";
import Nav3 from "../Nav3/Nav3";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import "../../App.css";
import CustomVisionAI from "../CustomVisionAI/CustomVisionAI";

function HomePage() {
      return (
            <>
                  <Nav1></Nav1>
                  <Nav2></Nav2>
                  <Nav3></Nav3>
                  <HeroCarousel></HeroCarousel>
                  <CustomVisionAI></CustomVisionAI>
            </>
      );
}

export default HomePage;
