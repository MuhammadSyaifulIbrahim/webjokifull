import "../../style/LandingPage.css";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import MyCarousel from "./MyCarousel";
import JokiRank from "./JokiRank";

function LandingPage() {
  return (
    <div>
      {/*intro section*/}
      <div className="myBG">
        <NavigationBar />
      </div>

      <div className="Carousel">
        <MyCarousel />
      </div>

      <div className="Joki">
        <JokiRank />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
