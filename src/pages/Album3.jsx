import foto1 from '/componente_galeria/Galeria_3/21.jpeg'
import foto2 from '/componente_galeria/Galeria_3/35.jpeg'
import foto3 from '/componente_galeria/Galeria_3/38.jpeg'
import foto4 from '/componente_galeria/Galeria_3/39.jpeg'
import foto5 from '/componente_galeria/Galeria_3/41.jpeg'
import foto6 from '/componente_galeria/Galeria_3/44.jpeg'
import foto7 from '/componente_galeria/Galeria_3/45.jpeg'


import logo from '/logo_cursodeteatrodenesmelo.webp'

import { useState } from 'react'

import styles from './Album.module.css'
import { Link } from 'react-router-dom'

export default function Album3(){
    const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7]

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
            <h1>Álbum 3</h1>
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