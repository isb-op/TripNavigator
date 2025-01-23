import styles from './AboutUs.module.css';
import { Footer } from '../../ui/components/surfaces/Footer/Footer';
import Header from '../../ui/components/surfaces/Header/Header';
import imgTravel1 from '../../assets/travel1.png';
import imgTravel6 from '../../assets/travel6.png';
import imgTravel8 from '../../assets/travel8.png';



export function AboutUs(){
    return(
        <>
        <Header />
        <div className={styles.container_aboutus}>
            <div className={styles.imgTop}>
                <img src={imgTravel1} alt="Cabeçalho: Imagem de viajantes!"/>
            </div>
            <div className={styles.textTopic}>
                <h1> Nossa missão </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam sapiente harum sint quaerat magni provident repudiandae impedit 
                    sequi dolore expedita quis, corrupti, eos placeat magnam! Architecto 
                    optio sequi necessitatibus minima. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam sapiente harum sint quaerat magni provident repudiandae impedit 
                    sequi dolore expedita quis, corrupti, eos placeat magnam! Architecto 
                    optio sequi necessitatibus minima.<br />
                </p>
            </div>
            <div className={styles.imgTopic}>
                 <img src={imgTravel6} alt="Cabeçalho: Imagem de viajantes!"/>
                 <img src={imgTravel8} alt="Cabeçalho: Imagem de viajantes!"/>

            </div>
            <div className={styles.textTopic}>
                <h1> Nossos objetivos </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam sapiente harum sint quaerat magni provident repudiandae impedit 
                    sequi dolore expedita quis, corrupti, eos placeat magnam! Architecto 
                    optio sequi necessitatibus minima. <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Veniam sapiente harum sint quaerat magni provident repudiandae impedit 
                    sequi dolore expedita quis, corrupti, eos placeat magnam! Architecto 
                    optio sequi necessitatibus minima.<br />
                </p>
            </div>
        </div>
        <Footer />
        </>

    );
}