
import styles from './AboutHome.module.css';
import DisplayBox from '../../../components/displays/DisplayBox';
import imgTravel1 from '../../../../assets/travel1.png';
import imgTravel3 from '../../../../assets/travel3.png';
import imgTravel4 from '../../../../assets/travel4.png';

export function AboutHome() {

  return (
      <div className={styles.container_about_home}>
        <h1> Viajar para <br/>todos os lugares </h1>
        <div className={styles.container_about_home_box}>
        <DisplayBox
                imgSrc={imgTravel1}
                altText="Exploração pelo mundo"
                text="Nossa missão é transformar cada viagem em uma experiência inesquecível. Desde nosso início, buscamos conectar pessoas a destinos incríveis, oferecendo planejamento personalizado, conforto e segurança em cada etapa do caminho."
            />
            <DisplayBox
                imgSrc={imgTravel3}
                altText="Conheça novos lugares"
                text="Acreditamos que viajar é mais do que visitar lugares; é descobrir histórias, culturas e criar memórias. Nossa equipe dedica-se a tornar sua jornada única, refletindo seus sonhos e interesses em cada roteiro."
            />
            <DisplayBox
                imgSrc={imgTravel4}
                altText="Momentos especiais"
                text="Conectamos pessoas aos destinos dos seus sonhos. Seja para explorar o desconhecido ou redescobrir lugares amados, estamos aqui para inspirar, planejar e fazer de cada viagem uma realização pessoal."
            />
        </div>
      </div>
  );
}