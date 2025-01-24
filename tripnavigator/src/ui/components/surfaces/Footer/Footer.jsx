// import { useNavigate } from "react-router-dom";
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  // const navigate = useNavigate();
  // const handleNavigation = (path) => navigate(path);
  // const handleAboutNavigation = () => handleNavigation("/sobre");
  // const handleContactsNavigation = () => handleNavigation("/contato");
  return (
    <div className={style.containerFooter}>
      <FontAwesomeIcon
        onClick={() => (window.location.href = "https://github.com/")}
        icon={faGithub}
        className={style.icon}
      />
      <FontAwesomeIcon
        onClick={() => (window.location.href = "https://www.facebook.com")}
        icon={faFacebook}
        className={style.icon}
      />
      <FontAwesomeIcon
        onClick={() => (window.location.href = "https://www.instagram.com")}
        icon={faInstagram}
        className={style.icon}
      />
      <p>Todos os direitos reservados © isb-op</p>
    </div>
  );
}
