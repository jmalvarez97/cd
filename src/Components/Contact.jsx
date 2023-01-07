import styles from "../styles/main.module.css"
import { ReactComponent as Decoration } from '../static/images/decoration-star.svg';
import { useRef, useEffect } from "react";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 
mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hbHYiLCJhIjoiY2xjbHh5eTNlMW02YTNwcDh6eHAwcW12MiJ9.16H6PbPrliW6jrtAWDmHHw';


const Contact = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    
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


                            {useEffect(() => {
                                if (map.current) return; // initialize map only once
                                map.current = new mapboxgl.Map({
                                    container: mapContainer.current,
                                    style: 'mapbox://styles/mapbox/streets-v12',
                                    center: [-60.2888, -35.0324],
                                    zoom: 13.79
                                });
                                new mapboxgl.Marker()
                                            .setLngLat([-60.2888, -35.0324])
                                            .addTo(map.current);
                            })}
                                        
                            </div> 
                            <div ref={mapContainer} className={styles.mapContainer} />
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
