import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import fewandfarbetweenalbum from '../images/album cover.jpg';


Modal.setAppElement('#reactContainer');
class News extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            showPreorderButton: false,
            preorderBoxOpen: false,
            preorderStatus: 'request',
            preorder: {
                email: '',
                name: '',
                packageChoice: 'cd',
                shirtSize: ''
            },
            preorderMessage: ''
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
            preorderStatus: 'request',
            preorder: {
                email: '',
                name: '',
                packageChoice: 'cd',
                shirtSize: ''
            }
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

    changePackage = (evt) => {
        console.log(evt.target.value);

        this.setState({
            preorder: {
                ...this.state.preorder,
                packageChoice: evt.target.value
            }
        });
    }

    changeSize = (evt) => {
        console.log(evt.target.value);

        this.setState({
            preorder: {
                ...this.state.preorder,
                shirtSize: evt.target.value
            }
        });
    }

    placeOrder = (e) => {
        e.preventDefault();

        if(this.state.preorder.name === '') {
            this.setState ({
                preorderMessage: 'Please enter your name'
            });
            return;
        }

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(this.state.preorder.email.toLowerCase())) {
            this.setState ({
                preorderMessage: 'Please enter a valid email address'
            });
            return;
        }

        this.setState({
            preorderStatus: 'sending'
        });

        axios.post('/api/preorder', {
            name: this.state.preorder.name,
            email: this.state.preorder.email,
            packageChoice: this.state.preorder.packageChoice,
            shirtSize: this.state.preorder.shirtSize
        })
        .then ((response) => {
            setTimeout(() => {
                if(response.data.success) {
                    this.setState({
                        preorderStatus: 'completed'
                    });
                } else {
                    this.setState({
                        preorderMessage: response.data.message
                    })
                }
            }, 350);
        })
        .catch((exc) => {
            this.setState({
                preorderMessage: exc.Message
            });
        })
    };

    hasShirtSelected = () => {
        return this.state.preorder.packageChoice !== 'cd' && this.state.preorder.packageChoice !== 'cd-ep';
    }

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

                                <div className="formlabels">
                                    <p>Choose preorder package</p>
                                    { this.hasShirtSelected() &&
                                        <p>Choose shirt size</p>    
                                    }
                                </div>
                            
                                <div className="formselects">
                                    <select onChange={this.changePackage} value={this.state.preorder.packageChoice}>
                                        <option value="cd">Cd only</option>
                                        <option value="cd-ep">Cd and EP</option>
                                        <option value="cd-shirt-m">Cd and shirt (male)</option>
                                        <option value="cd-shirt-f">Cd and shirt (female)</option>
                                    </select>

                                    { this.hasShirtSelected() &&
                                        <select onChange={this.changeSize} value={this.state.preorder.shirtSize}>
                                            <option value="XS">XS</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                    }
                                </div>

                                <div className="formactions">
                                    <button className="button-low" onClick={this.closePreorder}>Cancel order</button>
                                    <button className="button-high" onClick={this.placeOrder}>Place order!</button>
                                </div>
                            </form>
                        }

                        { this.state.preorderMessage !== '' && 
                            <p className="error">{this.state.preorderMessage}</p>
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
                { this.state.showPreorderButton &&
                    <button onClick={this.openPreorder}>Preorder now</button>
                }
            </section>
        );
    }
}

export default News;