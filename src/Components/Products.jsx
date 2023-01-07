import styles from "../styles/main.module.css"
import seco from "../static/images/products/seco.jpeg";
import pimienta from "../static/images/products/pimienta.jpeg"
import salameConQueso from "../static/images/products/salameConQueso.jpeg"
import lomitoFH from "../static/images/products/lomitoFH.jpeg"
import criollo from "../static/images/products/criollo.jpeg"
import mortdadela from "../static/images/products/mortadela.jpeg"


const Products = () => {
    return (
    <div className="ProductsContainer">
            
        <div id="products" className={styles.cards2}>
            <div className={`${styles.container} container`}>
                <div className="row">
                    <div className={`col-lg-12`}>
                        <h2 className={`h2-heading ${styles.h2Heading}`}>Nuestros productos</h2>
                    </div> 
                </div> 
                <div className={`row`}>
                    <div className={`col-lg-12 ${styles.cardContainer}`}>

                        
                        <div className={`card ${styles.card}`}>
                            <img className={`img-fluid`} src={seco} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Chorizo Seco</h5>
                                {/* <p className="card-text">Suffer should if waited common person little ans words are needed oh <a className="blue no-line" href="article.html">...Read more</a></p> */}
                            </div>
                        </div>
                        

                    
                        <div className={`card ${styles.card}`}>
                            <img className={`img-fluid`} src={pimienta} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Salame a la pimienta</h5>
                                {/* <p className="card-text">Instantly remaining up certainly to necessary as over walk dull into son <a className="blue no-line" href="article.html">...Read more</a></p> */}
                            </div>
                        </div>
                        
                        <div className={`card ${styles.card}`}>
                            <img className={`img-fluid`} src={criollo} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Salame Criollo</h5>
                                {/* <p className="card-text">Vicinity subjects more words into miss on he over been late pain an only <a className="blue no-line" href="article.html">...Read more</a></p> */}
                            </div>
                        </div>
                        
                        <div className={`card ${styles.card}`}>
                            <img className={`img-fluid`} src={salameConQueso} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Salame con queso </h5>
                                {/* <p className="card-text">In to am attended desirous raptures declared diverted confined at collected <a className="blue no-line" href="article.html">...Read more</a></p> */}
                            </div>
                        </div>
                        
                        <div className={`card ${styles.card}`}>
                            <img className={`img-fluid`} src={lomitoFH} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Lomo a las finas Hierbas</h5>
                                {/* <p className="card-text">Vent new at or happiness commanded daughters as is handsome an <a className="blue no-line" href="article.html">...Read more</a></p> */}
                            </div>
                        </div>
                        
                        <div className={`card ${styles.card}`}>
                            <img className={`img-fluid`} src={mortdadela} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Mortadela</h5>
                                {/* <p className="card-text">Match round scale now sex style far times your me past and who now much <a class="blue no-line" href="article.html">...Read more</a></p> */}
                            </div>
                        </div>
                        
                    </div> 
                    <a className={`btn-solid-lg ${styles.btnSolidLg} ${styles.btnVerMas}`}
                        href="#contact">
                        Consultar todo el catalogo
                    </a>
                </div> 
            </div> 
        </div> 
        


    </div>

    )

}

export default Products;