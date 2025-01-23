import styles from './AboutUs.module.css';
import { Footer } from '../../ui/components/surfaces/Footer/Footer';
import Header from '../../ui/components/surfaces/Header/Header';
export function AboutUs(){
    return(
        <>
        <Header />
                <div className={styles.container_aboutus}>
                    Teste
                </div>
        <Footer />
        </>
    );
}