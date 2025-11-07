import foto1 from '/componente_galeria/Galeria_1/2.jpeg'
import foto2 from '/componente_galeria/Galeria_1/3.png'
import foto3 from '/componente_galeria/Galeria_1/4.jpeg'
import foto4 from '/componente_galeria/Galeria_1/6.jpeg'
import foto5 from '/componente_galeria/Galeria_1/8.jpeg'
import foto6 from '/componente_galeria/Galeria_1/9.jpeg'
import foto7 from '/componente_galeria/Galeria_1/10.jpeg'
import foto8 from '/componente_galeria/Galeria_1/11.jpeg'
import foto9 from '/componente_galeria/Galeria_1/12.jpeg'
import foto10 from '/componente_galeria/Galeria_1/13.jpeg'
import foto11 from '/componente_galeria/Galeria_1/14.jpeg'
import foto12 from '/componente_galeria/Galeria_1/20.jpeg'
import foto13 from '/componente_galeria/Galeria_1/22.jpeg'
import foto14 from '/componente_galeria/Galeria_1/24.jpeg'
import foto15 from '/componente_galeria/Galeria_1/25.jpeg'
import foto16 from '/componente_galeria/Galeria_1/36.jpeg'
import foto17 from '/componente_galeria/Galeria_1/37.jpeg'
import foto18 from '/componente_galeria/Galeria_1/40.jpeg'
import foto19 from '/componente_galeria/Galeria_1/42.jpeg'
import foto20 from '/componente_galeria/Galeria_1/43.jpeg'
import foto21 from '/componente_galeria/Galeria_1/46.jpeg'

import logo from '/logo_cursodeteatrodenesmelo.webp'

import { useState } from 'react'

import styles from './Album.module.css'
import { Link } from 'react-router-dom'

export default function Album1(){
    const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20, foto21]

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

    return(
        <>
         <header className={styles.header}>
                <nav className={styles.navbar}>
                    <Link to="/"><img  className={styles.logo} src={logo} alt="Logo do site" /></Link>
                    <Link to="/" className={styles.btn}>Home</Link>
                </nav>
            </header>
                  <main className={styles.page_album}>
            <h1>Álbum 1</h1>
            <div className={styles.container_page_album}>
                {fotos.map((foto) => 
                    <img className={styles.foto_pequena} onClick={() => abrirFoto(foto)} id={foto} key={foto} src={foto} alt="Foto do Album 1" />
                )}
            </div>
            {isOpen && <div className={styles.overlay} onClick={() => fecharFoto()}>
              <img className={styles.foto_ampliada} src={fotoSelecionada} alt="" />
            </div>}
                  
        </main>
            </>
      
    )
}