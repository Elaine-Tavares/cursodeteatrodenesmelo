import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import foto1 from '/componente_galeria/capagaleria1.png';
import foto2 from '/componente_galeria/capagaleria2.jpeg';
import foto3 from '/componente_galeria/capagaleria3.jpeg';

import styles from './Galeria.module.css'
import { Link } from 'react-router-dom';

export default function Galeria(){
const fotos = [foto1, foto2, foto3
            ]

     useEffect(() => {
              AOS.init({
                duration: 1000, // duração da animação (em ms)
                once: false, // se a animação deve acontecer só uma vez
              });
          }, []);
    return (
        <div className={styles.componente_galeria}>
           <h3>Galeria de Fotos</h3>
            <div className={styles.container_galeria}>

                <Link to="/album1" className={styles.container_album}>
                    <span>Álbum 1</span>
                    <img src={fotos[0]} alt="" />
                </Link>
                <Link to="/album2" className={styles.container_album}>
                   <span>Álbum 2</span>
                   <img src={fotos[1]} alt="" />
                </Link>
                <Link to="/album3" className={styles.container_album}>
                   <span>Álbum 3</span>
                   <img src={fotos[2]} alt="" />
                </Link>
                
            </div> 
        </div>
    )
 }