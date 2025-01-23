import styles from './NatureAdventuresHome.module.css';
import imgTravel5 from '../../../../assets/travel5.png';

export function NatureAdventuresHome() {
  return (
    <div className={styles.adventures_container}>
      <div className={styles.adventures_container_about}>
        <h2>Nature Adventures</h2>
        <p>
          Bem-vindo ao portal das aventuras na natureza! Explore paisagens deslumbrantes, trilhas emocionantes, 
          e experiências inesquecíveis ao ar livre. Descubra destinos que inspiram, desde montanhas majestosas 
          a praias paradisíacas. Aqui, celebramos a conexão com o mundo natural, incentivando você a embarcar 
          em jornadas que alimentam o corpo, a mente e o espírito. Prepare-se para se aventurar e criar memórias 
          incríveis em cada passo!
        </p>
      </div>
      <div className={styles.adventures_container_image}> 
            <img src={imgTravel5} alt="Paisagens naturais" />
      </div>
    </div>
  );
}
