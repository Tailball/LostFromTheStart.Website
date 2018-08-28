import React from 'react';

import bprlogo from '../../images/beardedpunklogo.png';

const Contact = () => {
    return (
        <section id="contact">
            <h1>Contact Lost From The Start</h1>

            <div className="contactbox">
                
                <div className="contactbox-contact-lfts">
                    <div className="contactbox-contact-lfts-item">
                        <h2>Management &amp; booking</h2>
                        <p>lostfromthestartband@gmail.com</p>
                    </div>

                    <div className="contactbox-contact-lfts-item">
                        <h2>Media &amp; design</h2>
                        <p>lostfromthestartband@gmail.com</p>
                    </div>

                    <div className="contactbox-contact-lfts-item">
                        <h2>Website</h2>
                        <a href="http://www.jochenpanjaer.be" 
                           target="_blank" 
                           rel="noopener noreferrer">JP Graphics</a>
                    </div>

                    <div className="contactbox-contact-lfts-item">
                        <h2>Band members</h2>
                        <p>Drop hier persoonlijke instagram / twitter accounts?</p>
                    </div>
                </div>
                
                <a href="http://www.beardedpunk.com" 
                   target="_blank" 
                   className="contactbox-contact-label"
                   rel="noopener noreferrer">

                    <img src={bprlogo} alt="Beared Punk Records logo" />
                    <p>Bearded Punk Records</p>
                </a>
            </div>
        </section>
    );
}

export default Contact;