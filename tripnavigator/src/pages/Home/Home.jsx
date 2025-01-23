
import styles from './Home.module.css';
import { AboutHome } from '../../ui/partials/Home/AboutHome/AboutHome';
import { NatureAdventuresHome } from '../../ui/partials/Home/NatureAdventuresHome/NatureAdventuresHome'; 
import Header from '../../ui/components/surfaces/Header/Header';
import { Footer } from '../../ui/components/surfaces/Footer/Footer';


export function Home() {
    return (
        <>
            <main className={styles.home}>
                <Header />
                <AboutHome />
                <NatureAdventuresHome /> 
                <Footer />
            </main>
        </>
    );
}