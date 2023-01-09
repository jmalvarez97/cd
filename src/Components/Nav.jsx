import styles from "../styles/main.module.css"
import logo from "../static/images/logo.png"
import {FaWhatsapp} from "react-icons/fa"

const Nav = () => {
    return(
        <div className={`navContainer`}>
            <nav id="navbarExample" className={`navbar navbar-expand-lg fixed-top navbar-light ${styles.navbar}`} aria-label="Main navigation">
                <div className={`container ${styles.container}`}>

                    <img src={logo} className={`navbar-brand logo-image ${styles.navbar} ${styles.navbarBrand} ${styles.logoImage}`} alt=""/>
                    
                    <a href="https://api.whatsapp.com/send/?phone=5492346555080" class={styles.wppfloat} target="_blank" rel="noreferrer">
                        <FaWhatsapp 
                            className={styles.myFloat}/>
                    </a>
                                
                    
                </div> 
            </nav>
        </div>
    )

}

export default Nav