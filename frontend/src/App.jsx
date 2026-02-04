import Header from "./components/Header.jsx";
import MainPage from "./pages/MainPage.jsx";
import CalculationPage from "./pages/CalculationPage.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/calculation" element={<CalculationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
