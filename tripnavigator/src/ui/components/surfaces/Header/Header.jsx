import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo3.png";

const NavBar = ({ handleClick, text }) => (
  <li className={styles.navbar_text} onClick={handleClick}>
    {text}
  </li>
);

const Header = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);
  const handleLandingNavigation = () => handleNavigation("/");
  const handleHomeNavigation = () => handleNavigation("/home");
  const handleAboutNavigation = () => handleNavigation("/sobre");
  const handleContactsNavigation = () => handleNavigation("/contato");

  return (
    <header className={styles.container_header}>
     <img
        src={logo}
        alt="Logo Rosa dos Ventos"
        className={styles.navbar_img}
        onClick={handleLandingNavigation}
      />
      <ul className={styles.navbar_box}>
        <NavBar handleClick={handleHomeNavigation} text="Home" />
        <NavBar handleClick={handleAboutNavigation} text="Sobre" />
        <NavBar handleClick={handleContactsNavigation} text="Contatos" />
      </ul>
    </header>
  );
};

export default Header;
