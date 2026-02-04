import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link className="logo-link" to="/">
        <img src={logo} alt="Logo" height={100} />
      </Link>
      <h1 className="dashboard-title">Investment Dashboard</h1>
    </header>
  );
};

export default Header;
