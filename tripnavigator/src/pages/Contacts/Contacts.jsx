import { Footer } from '../../ui/components/surfaces/Footer/Footer';
import Header from '../../ui/components/surfaces/Header/Header';
import styles from './Contacts.module.css';

export function Contacts(){
    return(
        <>
        <Header />
        <div className={styles.container_contacts}>
            Teste
        </div>
        <Footer />
        </>
    );
}