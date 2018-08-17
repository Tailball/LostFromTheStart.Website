import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import fewandfarbetweenalbum from '../images/album cover.png';


Modal.setAppElement('#reactContainer');
class News extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            preorderBoxOpen: false,
            preorderStatus: 'request',
            preorder: {
                email: '',
                name: ''
            }
        };
    }

    togglePreorder = (open) => {
        this.setState({
            preorderBoxOpen: open
        });
    }

    openPreorder = () => {
        this.togglePreorder(true);
    }

    closePreorder = () => {
        this.togglePreorder(false);
        this.setState({
            preorderStatus: 'request'
        });
    }

    changeEmail = (evt) => {
        this.setState({
            preorder: {
                ...this.state.preorder,
                email: evt.target.value
            }
        });
    }

    changeName = (evt) => {
        this.setState({
            preorder: {
                ...this.state.preorder,
                name: evt.target.value
            }
        });
    }

    placeOrder = (e) => {
        e.preventDefault();

        this.setState({
            preorderStatus: 'sending'
        });

        axios.post('/api/preorder', {
            name: this.state.preorder.name,
            email: this.state.preorder.email,
            choice: 1,
            remarks: 'no remarks'
        })
        .then ((response) => {
            setTimeout(() => {
                this.setState({
                    preorderStatus: 'completed'
                });
            }, 350);
        })
        .catch((exc) => {
            console.log(exc.message);
        })
    };

    render() {
        return (
            <section id="news">

                <Modal isOpen={this.state.preorderBoxOpen}
                       onRequestClose={this.closePreorder}
                       contentLabel="Preorder">

                        <h1>Preorder Few And Far Between</h1>
                        <p>Please fill in the required fields below.<br/>
                           You will be able to pick up your preorder at or after our release show.</p>

                        { this.state.preorderStatus === 'request' &&
                            <form>
                                <div className="forminputs">
                                    <input placeholder="Your email address..." 
                                        value={this.state.preorder.email} onChange={this.changeEmail} />
                                    <input placeholder="Your name..." 
                                        value={this.state.preorder.name} onChange={this.changeName} />
                                </div>

                                <div className="formactions">
                                    <button className="button-low" onClick={this.closePreorder}>Cancel order</button>
                                    <button className="button-high" onClick={this.placeOrder}>Place order!</button>
                                </div>
                            </form>
                        }

                        { this.state.preorderStatus === 'sending' && 
                            <div id="loading">
                                <FontAwesomeIcon className="icon" icon={faSpinner} spin />
                                <p>Sending preorder...</p>
                            </div>
                        }

                        { this.state.preorderStatus === 'completed' && 
                            <div id="completed">
                                <FontAwesomeIcon className="icon" icon={faCheckSquare} />
                                <p>We received your preorder!</p>
                                <button className="button-high" onClick={this.closePreorder}>Close</button>
                            </div>
                        }
                </Modal>

                <img src={fewandfarbetweenalbum} alt="Few And Far Between album cover" />
                <h1>few and far between</h1>
                <h2>2018.09.29</h2>
                <p>The first full-length, featuring singles 'Out Of Left Field' and 'Off The Hook'</p>
                <button onClick={this.openPreorder}>Preorder now</button>
            </section>
        );
    }
}

export default News;