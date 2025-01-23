
import styles from './Landing.module.css';
import { DefaultButton } from '../../ui/components/inputs/DefaultButton/DefaultButton';
import { useNavigate } from "react-router-dom";

export function Landing() {
    const navigate = useNavigate();
    const handleNavigation = (path) => navigate(path);
    const handleHomeNavigation = () => handleNavigation("/home");
    return (
        <>
            <div className={styles.landingpage_container}>
                <div className={styles.tabs}>
                    <input id="home1" type="radio" name="slider" defaultChecked />
                    <input id="home2" type="radio" name="slider" />
                    <input id="home3" type="radio" name="slider" />
                    <div className={styles.buttons}>
                        <DefaultButton handleClick={handleHomeNavigation} text="Conheça agora" />
                    </div>
                    <div className={styles.buttons}>
                        <label htmlFor="home1"></label>
                        <label htmlFor="home2"></label>
                        <label htmlFor="home3"></label>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.box}>
                            <div className={styles.contentBx}>
                                <h2>Viagens: um convite para <br />viver histórias!</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.contentBx}>
                                <h2>Descubra o mundo: <br /> um passo além <br /> do que você conhece.</h2>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.contentBx}>
                                <h2>Viajar é reinventar-se: <br /> cada destino é uma nova<br /> versão de você.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}