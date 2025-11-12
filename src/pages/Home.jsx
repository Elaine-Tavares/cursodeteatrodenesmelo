
import ComponentSwiper from '../components/swiper/ComponentSwiper'
import Galeria from '../components/galeria/Galeria'
import logo from '/logo_cursodeteatrodenesmelo.webp'
import { RiWhatsappFill } from "react-icons/ri";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/navbar/Navbar'
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
        <>
        <Navbar/>
        <main className={styles.page_home} id="home" data-aos="fade-right">
          <h1 >Teatro, escola para a vida!</h1>
          <div className={styles.container_main}>
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
            <h2 data-aos="fade-right">O teatro é a escola para a vida, trabalha todo o desenvolvimento do ser humano. Por isso existe um provérbio que diz que o mundo é um teatro.</h2>
          </section>

          <div id="galeria"/>
          <section className={styles.secao_galeria}  data-aos="fade-up">
            <Galeria/>
          </section>

          <section className={styles.secao_logo} id="contato" >
            <div className={styles.container_logo}>
                <img src={logo} alt="" />
                <p>TEL: (21) 3183-2757</p>
                <p>www.cursodeteatrodenesmelo.com</p>
                <a href="#">
                  <RiWhatsappFill className={styles.whats}/>(21) 98299-6612
                
                </a>
            </div>   
          </section>

          <section className={styles.secao_funcionamento}>
            <div className={styles.container_funcionamento}>
              <h4 >Endereços e horários:</h4>
              <p>
                Av. Dom Hélder Câmara, 1184, Benfica RJ, na Bliblioteca Parque Manguinhos<br/>
                Quinta às 19h<br/>
                Sábado às 14h
              </p>
                <p>------------------------</p>
              <p>Rua Arquias Cordeiro, 296, Sala 303, Méier RJ, Centro comercial Jardim do Méier<br/>
                FALTA DIA E HORÁRIO<br/>
                FALTA DIA E HORÁRIO
              </p>
            </div>
          </section>
        </main>   
           <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          title="Enviar whats para Denes Melo"
          
        >
          <RiWhatsappFill className={styles.whats_fixed}/>
        </a>
      </>
    )
}