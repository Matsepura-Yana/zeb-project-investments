import "../styles/MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <main className="main-page">
      <h2 className="main-page-title">Calculate Your Future</h2>
      <p className="main-page-description">
        How will your investment grow over time? Enter your data and instantly
        get a clear overview of potential returns. Our investment calculator
        helps you compare different scenarios and make confident decisions
        aligned with your financial goals.
      </p>
      <Link to="/calculation">
        <button className="main-page-button">Start calculation</button>
      </Link>
    </main>
  );
};

export default MainPage;
