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
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fopen.spotify.com%2Fartist%2F6AVT9tIkQ0U18vDZbsIoha%3Fsi%3D4ya5wP8CTJqmVOfGFoLUTw&h=AT2gaWCG0lSPpI5Vu4CaONfe_f39zQYo4vDOzrXsioDcDXpSdzajZuL0iU0B-GL1gA160quyfgffaXZVM0GVgwQx2SW4dx84XHLtMxhxaM6fxUi6TjAEEm7r1JByQIf32xwJYy-4_WwCX94ua939fAUnpQ" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faSpotify} />
                </a>
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fplaylist%3Flist%3DPLdIGABl3LGR_zbTUdMHIGFmipVeiWadQV&h=AT3OiKkN2reiq4yioCGDu1dZ-cRqNRCkhnmVls2TQvFCrLthYQ94AxeP79tsjVFKXgr0kKYHVBHDFmf50hXz0Cv6htopnqTzbIxtDTUDYhTCZvrSIMZt0znnoqogwXunkEZg9t4G5DqCSU5LrrYIFRviLg" target="_blank">
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