import { Footer } from '../../ui/components/surfaces/Footer/Footer';
import Header from '../../ui/components/surfaces/Header/Header';
import style from './Contacts.module.css';

export function Contacts(){
    return(
        <>
        <Header />
        <div className={style.containerContacts}>
                <div className={style.contactBox}>
                    <h1>Fale conosco!</h1>
                    <div className={style.contactform}>
                        <form>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="E-mail" />
                        <input type="tel" placeholder="Telefone" />
                        <textarea placeholder="Texto"></textarea>
                        <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
        </div>
        <Footer />
        </>
    );
}