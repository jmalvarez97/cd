import styles from "../styles/main.module.css"
import project1 from "../static/images/project-1.jpg"
import project2 from "../static/images/project-2.jpg"
import project3 from "../static/images/project-3.jpg"
import project4 from "../static/images/project-4.jpg"
import project5 from "../static/images/project-5.jpg"
import project6 from "../static/images/project-6.jpg"


const Products = () => {
    return (
    <div className="ProductsContainer">
            
        <div id="projects" className={styles.cards2}>
            <div className={`${styles.container} container`}>
                <div className="row">
                    <div className={`col-lg-12 ${styles.col}`}>
                        <h2 className={`h2-heading ${styles.h2Heading}`}>Projects we developed</h2>
                    </div> 
                </div> 
                <div className="row">
                    <div className={`col-lg-12 ${styles.col}`}>

                        
                        <div className={`card ${styles.card}`}>
                            <img className="img-fluid" src={project1} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Office space for banking</h5>
                                <p className="card-text">Suffer should if waited common person little ans words are needed oh <a className="blue no-line" href="article.html">...Read more</a></p>
                            </div>
                        </div>
                        

                    
                        <div className={`card ${styles.card}`}>
                            <img className="img-fluid" src={project2} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Colors and materials update</h5>
                                <p className="card-text">Instantly remaining up certainly to necessary as over walk dull into son <a className="blue no-line" href="article.html">...Read more</a></p>
                            </div>
                        </div>
                        
                        <div className={`card ${styles.card}`}>
                            <img className="img-fluid" src={project3} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Planning and design for startup</h5>
                                <p className="card-text">In to am attended desirous raptures declared diverted confined at collected <a className="blue no-line" href="article.html">...Read more</a></p>
                            </div>
                        </div>
                        
                        <div className={`card ${styles.card}`}>
                            <img className="img-fluid" src={project4} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Analysis and floor design</h5>
                                <p className="card-text">Vent new at or happiness commanded daughters as is handsome an <a className="blue no-line" href="article.html">...Read more</a></p>
                            </div>
                        </div>
                        
                        <div className={`card ${styles.card}`}>
                            <img className="img-fluid" src={project5} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Office spaces decoration</h5>
                                <p className="card-text">Vicinity subjects more words into miss on he over been late pain an only <a className="blue no-line" href="article.html">...Read more</a></p>
                            </div>
                        </div>
                        
                        <div className={`card ${styles.card}`}>
                            <img className="img-fluid" src={project6} alt="alternative"></img>
                            <div className={styles.cardBody}>
                                <h5 className={styles.cardTitle}>Playground for kinder garden</h5>
                                <p className="card-text">Match round scale now sex style far times your me past and who now much <a class="blue no-line" href="article.html">...Read more</a></p>
                            </div>
                        </div>
                        
                    </div> 
                </div> 
            </div> 
        </div> 
        


    </div>

    )

}

export default Products;