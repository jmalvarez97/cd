import styles from "../styles/main.module.css"
import logo from "../static/images/logo.png"


const Nav = () => {
    return(
        <div className={`navContainer`}>
            <nav id="navbarExample" className={`navbar navbar-expand-lg fixed-top navbar-light ${styles.navbar}`} aria-label="Main navigation">
                <div className={`container ${styles.container}`}>

                    <img src={logo} className={`navbar-brand logo-image ${styles.navbar} ${styles.navbarBrand} ${styles.logoImage}`} alt=""/>
                    
                    <button className={`navbar-toggler p-0 border-0 ${styles.navbarToggler}`} type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`navbar-collapse offcanvas-collapse ${styles.offCanvasCollapse}`} id="navbarsExampleDefault">
                        <ul className="navbar-nav ms-auto navbar-nav-scroll">
                            <li className={`nav-item ${styles.navItem} ${styles.navbar}`}>
                                <a className={`nav-link ${styles.navLink} ${styles.navbar}`} href="#header">Home</a>
                            </li>
                            <li className={`nav-item ${styles.navItem} ${styles.navbar}`}>
                                <a className={`nav-link ${styles.navLink} ${styles.navbar}`} href="#products">Productos</a>
                            </li>
                        </ul>
                        <span className={`nav-item ${styles.navItem} ${styles.navbar}`}>
                            <a className={`btn-outline-sm ${styles.btnOutlineSm} ${styles.navbar}`} href="#contact">Contacto</a>
                        </span>
                    </div> 
                </div> 
            </nav>
        </div>
    )

}

export default Nav