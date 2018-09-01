import React from 'react';
import Modal from 'react-modal';

import albumEcho from '../../images/album-echoavenue.jpg';
import albumBetween from '../../images/album-fewandfarbetween.jpg';
import videoLeftField from '../../images/video-outofleftfield.jpg';

class Media extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalContent: <div>empty...</div>
        };
    }

    openModal = (content) => {
        this.setState({
            showModal: true,
            modalContent: content
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <section id="media">
                <Modal isOpen={this.state.showModal}
                       shouldCloseOnOverlayClick={true}
                       onRequestClose={this.closeModal}>
                    {this.state.modalContent}
                </Modal>
    
                <div className="music">
                    <h1>Music</h1>
                    <div className="music-wrapper">

                        <div className="music-album">
                            <div className="music-album-header">
                                <h2>Echo Avenue</h2>
                                <p className="release">2017 - self</p>
                            </div>

                            <div className="music-album-details">
                                <img src={albumEcho} alt="Echo Avenue album cover" />
                            
                                <div className="music-album-details-tracklisting">
                                    
                                    <iframe src="https://open.spotify.com/embed/album/62QH1onVL0INqctURfgtej" 
                                            frameBorder="0" 
                                            allowtransparency="true"
                                            allow="encrypted-media" />
                                </div>
                            </div>
                        </div>

                        <div className="music-album">
                            <div className="music-album-header">
                                <h2>Few And Far Between</h2>
                                <p className="release">2018 - Bearded Punk Records</p>
                            </div>

                            <div className="music-album-details">
                                <img src={albumBetween} alt="Few And Far between album cover" />
                            
                                <div className="music-album-details-tracklisting">
                                    <h3>Tracklisting</h3>
                                    <ul>
                                        <li>This is getting out of hand</li>
                                        <li>How things turned out</li>
                                        <li>Out Of Left Field</li>
                                        <li>sore throat, weak knees</li>
                                        <li>april showers bring may flowers</li>
                                        <li>castles</li>
                                        <li>monitor the world</li>
                                        <li>off the hook</li>
                                        <li>cold shoulder</li>
                                        <li>just another con artist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
    
                <div className="video">
                    <h1>Videos</h1>

                    <div className="video-list">
                        <a href="#" 
                        onClick={() => this.openModal(<iframe width="560" height="315" src="https://www.youtube.com/embed/bA3STgJYs7A?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>)}>
                            <img src={videoLeftField} alt="Video for out of left field" />
                        </a>
                    </div>
                </div>
            
            </section>
        );
    }
}

export default Media;