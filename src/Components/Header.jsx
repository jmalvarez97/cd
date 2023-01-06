import { ReactComponent as Decoration } from '../static/images/decoration-star.svg';
import styles from "../styles/main.module.css"
import header from "../static/images/header.png"

const Header = () =>{
    return (
        <div className="headerContainer">
            <header id="header" className={styles.header}>
            <Decoration 
                className={styles.decorationStar}
            />
            <Decoration 
                className={styles.decorationStarTwo}
            />
            <div className={`${styles.container} container`}>
            <div className="row">
                <div className={`col-lg-7 col-xl-5 ${styles.col} `}>
                    <div className={`text-container ${styles.textContainer}`}>
                        <h1 className={`h1-large ${styles.h1Large} `}>Beautifying office spaces</h1>
                        <p className={`p-large ${styles.pLarge}`}>Is education residence conveying and sore. Suppose shyness say ten behaved morning had. Any propose assist compliment occasional too reasonably</p>
                        <a className= {`btn-solid-lg ${styles.btnSolidLg}`}  href="#introduction">More details</a>
                        <a className={`btn-outline-lg ${styles.btnOutlineLg}`} href="#contact">Contact us</a>
                    </div> 
                </div> 
                <div className={`col-lg-5 col-xl-7 ${styles.col}`}>
                    <div className={`image-container ${styles.imageContainer}`}>
                        <img className="img-fluid" src={header} alt="alternative"></img>
                    </div> 
                </div> 
            </div> 
        </div>
        
                
                

            </header>
        </div>
    )
}

export default Header;