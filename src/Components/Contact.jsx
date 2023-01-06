import styles from "../styles/main.module.css"
import { ReactComponent as Decoration } from '../static/images/decoration-star.svg';
import contact from "../static/images/contact.png";

const Contact = () => {
    return ( <div className="concactContainer">
            <div id="contact" className={`${styles.formOne}`}>
                <Decoration 
                    className={`${styles.decorationStar}`}
                />
                <Decoration 
                    className={`${styles.decorationStarTwo}`}
                />
                <div className={`${styles.container} container`}>
                    <div className="row">
                        <div className={`col-lg-6 ${styles.col}`}>
                            <div className={`${styles.imageContainer}`}>
                                <img className="img-fluid" src={contact} alt="alternative"></img>
                            </div> 
                        </div> 
                        <div className={`${styles.col} col-lg-6`}>
                            <div className={`${styles.textContainer}`}>
                                <h2>Contact us for a quote using the following form</h2>

                            
                                <form>
                                    <div className={`${styles.formGroup}`}>
                                        <input type="text" className={`${styles.formControlInput}`} placeholder="Name" required></input>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <input type="email" className={`${styles.formControlInput}`} placeholder="Email" required></input>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <textarea className={`${styles.formControlTextArea}`} placeholder="Message" required></textarea>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <button type="submit" className={`${styles.formControlSubmit}`}>Submit</button>
                                    </div>
                                </form>
                                
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div>  
            


    </div>)
}

export default Contact;
