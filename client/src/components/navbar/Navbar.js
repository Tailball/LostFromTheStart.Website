import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faYoutubeSquare, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

import Links from './Links';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };
    }

    toggleNavMenu = (alwaysClose = false) => {
        const menu = document.querySelector('#menuItems');
        const open = this.state.menuOpen;

        if (open || !alwaysClose) {
            menu.style.display = 'none';
            this.setState({
                menuOpen: false
            });
        } else {
            menu.style.display = 'flex';
            this.setState({
                menuOpen: true
            });
        }
    }

    closeNavMenu = () => {
        this.toggleNavMenu(true);
    }

    render() {
        return (
            <div className="navbar">
                    
                <div className="navbar-social">
                    <a href="https://www.facebook.com/lostfromthestartband" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                    </a>
                    <a href="https://www.instagram.com/lostfromthestartband" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </a>
                    <a href="https://open.spotify.com/artist/6AVT9tIkQ0U18vDZbsIoha?si=4ya5wP8CTJqmVOfGFoLUTw" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" icon={faSpotify} />
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLdIGABl3LGR_zbTUdMHIGFmipVeiWadQV" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
                    </a>

                    <div id="navbar-bars">
                        <FontAwesomeIcon onClick={this.toggleNavMenu} className="icon" icon={this.state.menuOpen ? faCaretSquareDown : faCaretSquareUp} />
                        <p>menu</p>
                    </div>
                </div>

                <div className="navbar-title">
                    <h1>lostfromthestart.com</h1>
                </div>

                <div className="navbar-links desktop">
                    <Links onClick={this.closeNavMenu} />
                </div>

                <div className="navbar-links mobile">
                    <Links componentId="menuItems" onClick={this.closeNavMenu} />
                </div>
            </div>
        );
    }
};

export default Navbar;