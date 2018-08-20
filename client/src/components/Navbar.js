import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutubeSquare, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar">
                
            <div className="navbar-social">
                <a href="https://www.facebook.com/lostfromthestartband" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                </a>
                <a href="https://www.instagram.com/lostfromthestartband/" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
                <a href="https://open.spotify.com/artist/6AVT9tIkQ0U18vDZbsIoha?si=4ya5wP8CTJqmVOfGFoLUTw" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faSpotify} />
                </a>
                <a href="https://www.youtube.com/playlist?list=PLdIGABl3LGR_zbTUdMHIGFmipVeiWadQV" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
                </a>
            </div>

            <div className="navbar-title">
                <h1>lostfromthestart.com</h1>
            </div>

            <div className="navbar-links">
                <a href="/">band</a>
                <a href="/media">media</a>
                <a href="#" target="_blank">merch</a>
                <a href="/contact">contact</a>
            </div>
        </div>
    );
};

export default Navbar;