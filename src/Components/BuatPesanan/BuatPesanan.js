import NavigationBar from "./NavigationBar";
import "../../style/BuatPesanan.css";
import Footer from "./Footer";
import Checkout from "./Checkout";

function BuatPesanan() {
  return (
    <div>
      {/*intro section*/}
      <div className="myBG">
        <NavigationBar />
      </div>

      <div className="Footer">
        <Footer />
      </div>

      <div className="Checkout">
        <Checkout />
      </div>
    </div>
  );
}

export default BuatPesanan;
