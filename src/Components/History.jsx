import styles from "../styles/main.module.css"
import details from "../static/images/details-1.png"
import { ReactComponent as Decoration } from '../static/images/decoration-star.svg';

const History = () => {

    return (
        <div className="historyContainer">
            <div id="details" className={`basic-2 ${styles.basic2}`}>
                <Decoration 
                    className={`${styles.decorationStar} ${styles.basic2}`}
                />
                <div className={`${styles.container} container`}>
                    <div className="row">
                        <div className={`col-lg-6 col-xl-5 ${styles.col}`}>
                            <div className="image-container">
                                <img className="img-fluid" src={details} alt="alternative"></img>
                            </div> 
                        </div> 
                        <div className={`col-lg-6 col-xl-7 ${styles}`}>
                            <div className="text-container">
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dignissimos!</h2>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit deleniti repellat dignissimos quae delectus et libero? Modi neque, magni temporibus vero nam magnam numquam laudantium omnis unde. Quis autem dolor labore maiores illo exercitationem. Fugit, maxime obcaecati cumque consectetur nam adipisci nihil fuga ea praesentium quam voluptatum nobis totam facere? Repellendus, itaque reiciendis! Consequuntur mollitia ratione alias earum enim illum dolorem, iusto culpa ipsum nobis, pariatur autem veritatis obcaecati nemo nulla explicabo cumque excepturi veniam? Quibusdam reprehenderit nobis iure.
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
            

            </div>
    )

}

export default History