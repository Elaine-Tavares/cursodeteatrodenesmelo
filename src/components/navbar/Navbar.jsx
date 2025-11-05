import { useState } from "react";

import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from '/logo_cursodeteatrodenesmelo.webp'

import styles from  './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }
 
    return(
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <a href="/"><img  className={styles.logo} src={logo} alt="Logo do site" /></a>
               
                <div className={styles.container_menu_mobile}>
                    <GiHamburgerMenu 
                        className={styles.btn_menu} 
                        onClick={handleMenu}
                    />
                    <div 
                    className={`${styles.overlay} 
                    ${isOpen ? styles.open : ""}`} 
                    onClick={handleMenu} 
                    >
                     <ul>
                         <IoIosCloseCircle 
                                className={styles.btn_close}
                                onClick={handleMenu}
                         />
                        <li>
                          <a href="#home" className={styles.btn}>Sobre o Prof. Denes Melo</ a>
                        </li>
                        <li>
                          <a href="#galeria" className={styles.btn}>Galeria de Fotos</a>
                        </li>
                        <li>
                          <a href="#contato" className={styles.btn}>Contato</a>
                        </li>
                      </ul> 
                    </div>
                </div>

                <div className={styles.container_menu_desktop}>
                    <ul>     
                      <li>
                        <a href="#home" className={styles.btn}>SOBRE O PROF. DENES MELO</ a>
                      </li>
                      <li>
                        <a href="#galeria" className={styles.btn}>Galeria de Fotos</a>
                      </li>
                      <li>
                        <a href="#contato" className={styles.btn}>Contato</a>
                      </li>  
                    </ul> 
                </div>
            </nav>
        </header>
    )
}