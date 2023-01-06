import { ReactComponent as Decoration } from "../static/images/decoration-star.svg";
import styles from "../styles/main.module.css";
import chanchito from "../static/images/ch.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <header id="header" className={styles.header}>
        <Decoration className={styles.decorationStar} />
        <Decoration className={styles.decorationStarTwo} />
        <div className={`${styles.container} container`}>
          <div className="row">
            <div className={`col-lg-7 col-xl-5 `}>
              {/* <div className={`text-container ${styles.textContainer}`}> */}
                <h1 className={`h1-large ${styles.h1Large} `}>
                  Una empresa en constante crecimiento
                </h1>
                <p className={`p-large ${styles.pLarge}`}>
                  Nuestra empresa, ubicada en Alberti, Provincia de
                  Buenos Aires, se dedica a la elaboración de
                  embutidos de cerdo. Nuestros productos son elegidos por la
                  gente gracias a la combinación exclusiva de ingredientes y
                  nuestra minuciosa dedicación a su elaboración. Utilizamos
                  materias primas de excelente calidad y tenemos un sistema de
                  distribución propio que nos permite satisfacer la creciente
                  demanda de nuestros clientes en la provincia de Buenos Aires.
                  ¡Te invitamos a conocer a Chacinados David, una empresa en
                  constante crecimiento!
                </p>
                <a
                  className={`btn-solid-lg ${styles.btnSolidLg}`}
                  href="#products"
                >
                  Nuestros Productos
                </a>
                <a
                  className={`btn-outline-lg ${styles.btnOutlineLg}`}
                  href="#contact"
                >
                  Contactanos!
                </a>
              {/* </div> */}
            </div>
            <div className={`col-lg-5 col-xl-7 ${styles.rightColumn}`}>
              <div className={`image-container ${styles.imageContainer}`}>
                <img className={`img-fluid ${styles.piggy}`} src={chanchito} alt="alternative"></img>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
