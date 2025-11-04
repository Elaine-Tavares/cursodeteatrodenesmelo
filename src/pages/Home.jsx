
import ComponentSwiper from '../components/swiper/ComponentSwiper'
import Galeria from '../components/galeria/Galeria';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import styles from './Home.module.css'

export default function Home(){
      useEffect(() => {
          AOS.init({
            duration: 1000, // duração da animação (em ms)
            once: false, // se a animação deve acontecer só uma vez
          });
      }, []);

      return(
        <main className={styles.page_home} >
          <h1>Teatro, escola para a vida!</h1>
          <div className={styles.container_main} data-aos="fade-right">
            <div className={styles.container_main_swiper}>
                <ComponentSwiper/>
            </div>
            <div className={styles.container_main_text}>
              <h2>SOBRE O PROF. DENES MELO:</h2>
              <p>Denes Melo é Professor, Autor, Ator e Diretor de teatro, Locutor, Jornalista. Credenciado ao Sindicado dos Artistas RJ SATED RJ e ao Sindicato dos Radialistas RJ SINRADTV RJ</p>
              <p>Denes Melo iniciou no teatro com 17 anos no ano de 2000 e começou a ministrar aula em 2002 para crianças e depois para adultos. Com mais de 10 peças de teatro entre elas O auto da Compadecida de Ariano Suassuna, Marido fiel para sempre de Nelson Rodrigues adaptação de Denes Melo Idéias de canários de Machado de Assis.
              </p>
              <p>Tem formação profissional em teatro. Licenciado em Filosofia, Bacharel em teologia, pós-graduado em psicopedagogia, pós-graduado em teatro, expressividade e dinamismo no ambiente escolar.</p>
            </div>
          </div>

          <section className={styles.secao_frase_de_efeito}>
            <h3 data-aos="fade-left">O teatro é a escola para a vida, trabalha todo o desenvolvimento do ser humano. Por isso existe um provérbio que diz que o mundo é um teatro.</h3>
          </section>

          <div >
            <Galeria/>
          </div>
        </main>
        
    )
}