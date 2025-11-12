import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import styles from './Footer.module.css';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>      
          <div className={styles.info}>
            <nav className={styles.links} aria-label="Links para redes sociais">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Enviar e-mail para Denes Melo" 
                >
               <MdEmail className={styles.email}/>
              <span>cursodeteatrodenesmelo@gmail.com</span>
              </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Enviar whats para Denes Melo"
              
            >
              <RiWhatsappFill className={styles.whats}/>
              <span>(21) 98299-6612</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="Acessar Instagram de Denes Melo"
            >
              <FaSquareInstagram className={styles.instagram}/>
              <span>https://www.instagram.com/cursodeteatrodenesmelo/</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
               title="Acessar YouTube de Denes Melo"
            >
                <FaYoutube className={styles.youtube}/>
                <span>https://www.youtube.com/@cursodeteatrodenesmelo</span>
            </a>
              </nav>
            <p style={{alignSelf: "center", marginTop: "15px", fontWeight: "bold"}}>Prof. Denes Melo ©{anoAtual}</p>    
        </div>     
    </footer>
  );
}
