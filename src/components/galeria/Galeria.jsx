import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import styles from './Galeria.module.css'

export default function Galeria(){
     useEffect(() => {
              AOS.init({
                duration: 1000, // duração da animação (em ms)
                once: false, // se a animação deve acontecer só uma vez
              });
          }, []);
    return (
        <div className={styles.componente_galeria} data-aos="fade-down">
            <h3>Galeria de Fotos</h3>
        </div>
    )
}