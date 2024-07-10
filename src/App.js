import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPages/LandingPage";
import LoginFormPage from "./Components/Login/LoginFormPage";
import RegisterPage from "./Components/Register/RegisterPage";
import LandingPageUser from "./Components/LandingPageUser/LandingPageUser";
import BuatPesanan from "./Components/BuatPesanan/BuatPesanan";
import BuatPesanan2 from "./Components/BuatPesanan2/BuatPesanan";
import CekPesananPage from "./Components/CekPesanan/CekPesananPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<LandingPageUser />} />
          <Route path="/jokivalorant" element={<BuatPesanan />} />
          <Route path="/jokivalorant2" element={<BuatPesanan2 />} />
          <Route path="/cekpesanan" element={<CekPesananPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
