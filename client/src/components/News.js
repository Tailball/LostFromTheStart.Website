import React from 'react';
import Modal from 'react-modal';

import fewandfarbetweenalbum from '../images/album cover.png';

Modal.setAppElement('#reactContainer');
class News extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            preorderBoxOpen: false,
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
        console.log('placing order...');

        this.closePreorder();
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