import styles from "../styles/main.module.css"
import { ReactComponent as Decoration } from '../static/images/decoration-star.svg';
import { useRef, useEffect } from "react";

import {BsInstagram} from "react-icons/bs" 
import {AiOutlineWhatsApp} from "react-icons/ai"
import chanchito from "../static/images/ch.png";


import 'mapbox-gl/dist/mapbox-gl.css'; 
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
                        <div className={`col-lg-6 ${styles.mapColumn}`}>
                            <div className={`${styles.imageContainer}`}>

                            <h1>Donde nos ubicamos?</h1>

                            <p>Sector Industrial II - Alberti - Pcia. de Buenos Aires</p>

                            <div className="map">
                                {useEffect(() => {
                                    if (map.current) return; // initialize map only once

                                    
                                    map.current = new mapboxgl.Map({
                                        container: mapContainer.current,
                                        style: 'mapbox://styles/mapbox/streets-v12',
                                        center: [-60.2890, -35.0430],
                                        zoom: 12.20
                                    });

                                    var popup = new mapboxgl.Popup()
                                                .setText(`Chacinados David`)
                                                .addTo(map.current);

                                    new mapboxgl.Marker({
                                        draggable : false,
                                        color : "#0c9d7c"
                                    })
                                                .setLngLat([-60.29572312809677,-35.03088234658322])
                                                .addTo(map.current)
                                                .setPopup(popup);
                                })}
                                            
                                </div> 
                                <div ref={mapContainer} className={styles.mapContainer} />
                            </div>
                          
                        </div> 
                        <div className={`${styles.col} col-lg-6`}>
                            <div className={`${styles.textContainer}`}>
                                <h1>Contactanos para la venta de nuestros productos</h1>
                                <form>
                                    <div className={`${styles.formGroup}`}>
                                        <input type="text" className={`${styles.formControlInput}`} placeholder="Nombre" required></input>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <input type="text" className={`${styles.formControlInput}`} placeholder="Telefono" required></input>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <input type="email" className={`${styles.formControlInput}`} placeholder="E-mail (opcional)"></input>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <textarea className={`${styles.formControlTextArea}`} placeholder="Mensaje"></textarea>
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <button type="submit" className={`${styles.formControlSubmit}`}>Enviar</button>
                                    </div>
                                </form>
                                <h2 className={styles.textContainer}>Nuestras Redes</h2>
                                <div>
                                    <a href="https://www.instagram.com/chacinadosdavid/" className={styles.networkUl}>
                                        <BsInstagram className={styles.contactIcons}/>
                                        <p className={styles.networkP}>chacinadosdavid</p>
                                    </a>
                                </div>
                                <div className={styles.networkUl}>
                                    <AiOutlineWhatsApp className={styles.contactIcons}/>
                                    <p className={styles.networkP}>+549 2346 555080</p>
                                </div>
                                
                                
                            </div>                            
                        </div> 
                        <div className={`image-container ${styles.imageContainer}`}>
                                <img className={`img-fluid ${styles.piggyContact}`} src={chanchito} alt="alternative"></img>
                        </div> 
                    </div> 
                </div> 
            </div>  
            


    </div>)
}

export default Contact;
