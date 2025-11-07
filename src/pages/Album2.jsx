import foto1 from '/componente_galeria/Galeria_2/5.jpeg'
import foto2 from '/componente_galeria/Galeria_2/7.jpeg'
import foto3 from '/componente_galeria/Galeria_2/15.jpeg'
import foto4 from '/componente_galeria/Galeria_2/16.jpeg'
import foto5 from '/componente_galeria/Galeria_2/17.jpeg'
import foto6 from '/componente_galeria/Galeria_2/18.jpeg'
import foto7 from '/componente_galeria/Galeria_2/19.jpeg'
import foto8 from '/componente_galeria/Galeria_2/23.jpeg'
import foto9 from '/componente_galeria/Galeria_2/26.jpeg'
import foto10 from '/componente_galeria/Galeria_2/27.jpeg'
import foto11 from '/componente_galeria/Galeria_2/28.jpeg'
import foto12 from '/componente_galeria/Galeria_2/29.jpeg'
import foto13 from '/componente_galeria/Galeria_2/31.jpeg'
import foto14 from '/componente_galeria/Galeria_2/32.jpeg'
import foto15 from '/componente_galeria/Galeria_2/33.jpeg'


import logo from '/logo_cursodeteatrodenesmelo.webp'

import { useEffect, useState } from 'react'

import styles from './Album.module.css'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Album2(){
    const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15]

    const[isOpen, setIsOpen] = useState(false)
    const [fotoSelecionada, setFotoSelecionada] = useState("")

    function abrirFoto(foto){
        if(fotos.map((foto) => foto== foto)){
            console.log("foto encontrada", foto)
            setFotoSelecionada(foto)  
            setIsOpen(!isOpen)    
        }
    }

    function fecharFoto(){
        setFotoSelecionada("")
         setIsOpen(!isOpen)   
    }

     useEffect(() => {
                  AOS.init({
                    duration: 1000, // duração da animação (em ms)
                    once: false, // se a animação deve acontecer só uma vez
                  });
              }, []);

    return(
        <>
         <header className={styles.header}>
                <nav className={styles.navbar}>
                    <Link to="/"><img  className={styles.logo} src={logo} alt="Logo do site" /></Link>
                    <Link to="/" className={styles.btn}>Home</Link>
                </nav>
            </header>
                  <main className={styles.page_album} data-aos="fade-right">
            <h1>Álbum 2</h1>
            <div className={styles.container_page_album}>
                {fotos.map((foto) => 
                    <img className={styles.foto_pequena} onClick={() => abrirFoto(foto)} id={foto} key={foto} src={foto} alt="Foto do Album 2" />
                )}
            </div>
            {isOpen && <div className={styles.overlay} onClick={() => fecharFoto()}>
              <img className={styles.foto_ampliada} src={fotoSelecionada} alt="" />
            </div>}
                  
        </main>
            </>
      
    )
}