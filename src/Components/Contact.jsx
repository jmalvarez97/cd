import styles from "../styles/main.module.css"
import { ReactComponent as Decoration } from '../static/images/decoration-star.svg';
import { useRef, useEffect, useState } from "react";

import {BsInstagram} from "react-icons/bs" 
import {AiOutlineWhatsApp} from "react-icons/ai"
import chanchito from "../static/images/ch.png";

import emailjs from "@emailjs/browser"

import 'mapbox-gl/dist/mapbox-gl.css'; 
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 
mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hbHYiLCJhIjoiY2xjbHh5eTNlMW02YTNwcDh6eHAwcW12MiJ9.16H6PbPrliW6jrtAWDmHHw';



const Contact = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const form = useRef();

    const [emailSent, setEmailSent] = useState(false);

    const EmailSent = () => {
        return (
            <div className={styles.sent}>
                <p>Informacion enviada!</p>
            </div>
        )
    }


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dl2e8rt', 'template_sioaphp', form.current, 'ntxsUWZliG1s1JlJB')
          .then((result) => {
              setEmailSent(true);
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    
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

                            <h2>¿Dónde nos ubicamos?</h2>

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
                                <h2>Contactanos para la venta de nuestros productos</h2>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className={`${styles.formGroup}`}>
                                        <input type="text" 
                                               required
                                               className={`${styles.formControlInput}`} 
                                               placeholder="Nombre" 
                                               name="name"
                                               />
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <input type="text"
                                               required
                                               className={`${styles.formControlInput}`} 
                                               placeholder="Telefono"
                                               name="phone" 
                                               />
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <input type="email" 
                                               className={`${styles.formControlInput}`} 
                                               placeholder="E-mail (opcional)"
                                               name="email"
                                               />
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <input className={`${styles.formControlTextArea}`} 
                                                  type='textarea'
                                                  placeholder="Mensaje"
                                                  name="message"
                                                  
                                                  />
                                    </div>
                                    <div className={`${styles.formGroup}`}>
                                        <button type="submit" className={`${styles.formControlSubmit}`}>Enviar</button>
                                    </div>
                                    
                                {emailSent ? <EmailSent /> : null}

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
                                    <a href="https://api.whatsapp.com/send/?phone=5492346555080"> <p className={styles.networkP}>+549 2346 555080</p></a>
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
