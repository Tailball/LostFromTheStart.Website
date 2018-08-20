import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faYoutubeSquare, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

class Navbar extends React.Component {
    constructor (props) {
        super (props);
    }

    toggleNavMenu = (open) => {
        const down = document.querySelector('#menuToggleIconDown');
        const up = document.querySelector('#menuToggleIconUp');
        const menu = document.querySelector('#menuItems');

        if (open) {
            down.style.display = 'none';
            up.style.display = 'inline';
            menu.style.display = 'flex';
        } else {
            down.style.display = 'inline';
            up.style.display = 'none';
            menu.style.display = 'none';
        }
    }

    showNavMenu = () => {
        this.toggleNavMenu(true);
    }

    hideNavMenu = () => {
        this.toggleNavMenu(false);
    }

    render() {
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

                <div className="navbar-links desktop">
                    <div className="navbar-links-items">
                        <a href="/">band</a>
                        <a href="/media">media</a>
                        <a href="#" target="_blank">merch</a>
                        <a href="/contact">contact</a>
                    </div>
                </div>

                <div className="navbar-links mobile">
                    <h3 id="menuToggle">Show menu&nbsp;&nbsp;&nbsp;
                        <span id="menuToggleIconDown">
                            <FontAwesomeIcon 
                                icon={faAngleDoubleDown} 
                                onClick={this.showNavMenu} />
                        </span>
                        <span id="menuToggleIconUp">
                            <FontAwesomeIcon 
                                icon={faAngleDoubleUp} 
                                onClick={this.hideNavMenu} />
                        </span>
                    </h3>
                    <div className="navbar-links-items" id="menuItems">
                        <a href="/">band</a>
                        <a href="/media">media</a>
                        <a href="#" target="_blank">merch</a>
                        <a href="/contact">contact</a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;