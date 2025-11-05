import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import foto1 from '/componente_galeria/1.png'
import foto2 from '/componente_galeria/2.jpeg'
import foto3 from '/componente_galeria/3.png'
import foto4 from '/componente_galeria/4.jpeg'
import foto5 from '/componente_galeria/5.jpeg'
import foto6 from '/componente_galeria/6.jpeg'
import foto7 from '/componente_galeria/7.jpeg'
import foto8 from '/componente_galeria/8.jpeg'
import foto9 from '/componente_galeria/9.jpeg'
import foto10 from '/componente_galeria/10.jpeg'
import foto11 from '/componente_galeria/11.jpeg'
import foto12 from '/componente_galeria/12.jpeg'
import foto13 from '/componente_galeria/13.jpeg'
import foto14 from '/componente_galeria/14.jpeg'
import foto15 from '/componente_galeria/15.jpeg'
import foto16 from '/componente_galeria/16.jpeg'
import foto17 from '/componente_galeria/17.jpeg'
import foto18 from '/componente_galeria/18.jpeg'
import foto19 from '/componente_galeria/19.jpeg'
import foto20 from '/componente_galeria/20.jpeg'
import foto21 from '/componente_galeria/21.jpeg'
import foto22 from '/componente_galeria/22.jpeg'
import foto23 from '/componente_galeria/23.jpeg'
import foto24 from '/componente_galeria/24.jpeg'
import foto25 from '/componente_galeria/25.jpeg'
import foto26 from '/componente_galeria/26.jpeg'
import foto27 from '/componente_galeria/27.jpeg'
import foto28 from '/componente_galeria/28.jpeg'
import foto29 from '/componente_galeria/29.jpeg'
import foto30 from '/componente_galeria/30.jpeg'
import foto31 from '/componente_galeria/31.jpeg'
import foto32 from '/componente_galeria/32.jpeg'
import foto33 from '/componente_galeria/33.jpeg'
import foto34 from '/componente_galeria/34.jpeg'
import foto35 from '/componente_galeria/35.jpeg'
import foto36 from '/componente_galeria/36.jpeg'
import foto37 from '/componente_galeria/37.jpeg'
import foto38 from '/componente_galeria/38.jpeg'
import foto39 from '/componente_galeria/39.jpeg'
import foto40 from '/componente_galeria/40.jpeg'
import foto41 from '/componente_galeria/41.jpeg'
import foto42 from '/componente_galeria/42.jpeg'
import foto43 from '/componente_galeria/43.jpeg'
import foto44 from '/componente_galeria/44.jpeg'
import foto45 from '/componente_galeria/45.jpeg'
import foto46 from '/componente_galeria/46.jpeg'

import styles from './Galeria.module.css'

export default function Galeria(){
const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, 
               foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20, 
               foto21, foto22, foto23, foto24, foto25, foto26, foto27, foto28, foto29, foto30, 
               foto31, foto32, foto33, foto34, foto35, foto36, foto37, foto38, foto39, foto40, 
               foto41, foto42, foto43, foto44, foto45, foto46
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
                    {fotos.map((foto, index) => (
                <img key={index} src={foto} alt={foto} />
            ))}
            </div> 
        </div>
    )
 }