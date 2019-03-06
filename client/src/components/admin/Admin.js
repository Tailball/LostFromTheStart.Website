import React from 'react';
import Axios from 'axios';

class Admin extends React.Component {
    constructor(props) {
        super(props);

        //this.apiLocation = 'http://localhost:5000/api';
        this.apiLocation = '../api';

        this.state = {
            createShow: {
                date: this.getDateNow(),
                name: '',
                location: ''
            },
            shows: [],
            validation: '',
            authentication: {
                loggedIn: false,
                logInResult: '',
                username: '',
                password: ''
            }
        };
    }

    componentDidMount() {
        //get shows is now only called after logging in
    }

    getDateNow = () => {
        const dte = new Date();
        const y = dte.getFullYear().toString();
        const m = (dte.getMonth() + 1).toString();
        const d = dte.getDate().toString();

        return `${y}-${m.length === 1 ? (0 + m) : m}-${d.length === 1 ? (0 + d) : d}`;
    }

    getShows = () => {
        Axios.get(`${this.apiLocation}/shows?mode=admin`)
            .then(showData => {
                this.setState({ shows: showData.data.payload });
            })
            .catch(err => console.log(err));
    }

    deleteShow = (id) => {
        Axios.post(`${this.apiLocation}/shows`, 
                   { 
                       auth: { 
                           username: this.state.authentication.username,
                           password: this.state.authentication.password
                       },
                       action: 'DELETE', 
                       id: id 
                    })
             .then(() => this.getShows())
             .catch(err => console.log(err));
    }

    createShow = (e) => {
        e.preventDefault();

        if(!this.state.createShow.date || !this.state.createShow.name || !this.state.createShow.location) {
            this.setState({
                validation: 'Fields cannot be blank! Dates must be formed like yyyy-mm-dd!'
            });
            return;
        }

        Axios.post(`${this.apiLocation}/shows`, 
            { 
                auth: {
                    username: this.state.authentication.username,
                    password: this.state.authentication.password
                },
                action: 'POST', 
                date: this.state.createShow.date, 
                name: this.state.createShow.name, 
                location: this.state.createShow.location 
            })
            .then(() => {
                this.setState({
                    validation: '',
                    createShow: {
                        date: this.getDateNow(),
                        name: '',
                        location: ''
                    }
                }, () => this.getShows());
            })
            .catch(err => console.log(err));
    }

    renderShows = () => {
        return this.state.shows.map(show => {
            return (
                <tr key={show._id} 
                    className="show">

                    <td>{show.date.split('T')[0]}</td>
                    <td>{show.name}</td>
                    <td>{show.location}</td>
                    <td><button onClick={() => this.deleteShow(show._id)}>delete</button></td>

                </tr>
            );  
        });
    }

    updateDate = (e) => {
        this.setState({
            createShow: {
                ...this.state.createShow,
                date: e.target.value
            }
        });
    }

    updateName = (e) => {
        this.setState({
            createShow: {
                ...this.state.createShow,
                name: e.target.value
            }
        });
    }

    updateLocation = (e) => {
        this.setState({
            createShow: {
                ...this.state.createShow,
                location: e.target.value
            }
        });
    }

    updateUsername = (e) => {
        this.setState({
            authentication: {
                ...this.state.authentication,
                username: e.target.value
            }
        });
    }

    updatePassword = (e) => {
        this.setState({
            authentication: {
                ...this.state.authentication,
                password: e.target.value
            }
        });
    }

    login = () => {
        Axios.post(`${this.apiLocation}/auth/login`, 
            { 
                username: this.state.authentication.username, 
                password: this.state.authentication.password 
            })
            .then(result => {
                const data = result.data;
                console.log('result', result.data);

                if (data.loginResult === 'success') {
                    this.setState({
                        authentication: {
                            ...this.state.authentication,
                            loggedIn: true,
                            logInResult: data.loginResult
                        }
                    }, () => this.getShows());
                }
                else if (data.loginResult === 'failed') {
                    this.setState({
                        authentication: {
                            ...this.state.authentication,
                            loggedIn: false,
                            logInResult: data.loginResult
                        }
                    });
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>

                <section id="admin">
                    <div className="authentication">
                        <p className="username">Logged in as <span>{this.state.authentication.username}</span></p>
                    </div>

                    <div className="createShow">
                        <h1>Create new show</h1>

                        <div className="formgroup">
                            <label>Date</label>
                            <input type="date" onChange={this.updateDate} value={this.state.createShow.date} />
                        </div>

                        <div className="formgroup">
                            <label>Name</label>
                            <input type="text" onChange={this.updateName} value={this.state.createShow.name} />
                        </div>

                        <div className="formgroup">
                            <label>Location</label>
                            <input type="text" onChange={this.updateLocation} value={this.state.createShow.location} />
                        </div>
                        
                        { this.state.validation &&
                            <p id="error">{this.state.validation}</p>
                        }

                        <button onClick={this.createShow}>Create show!</button>

                    </div>

                    <div className="editShows">
                        <h1>Edit shows</h1>

                        <table>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                            {this.renderShows()}
                            </tbody>
                        </table>
                    </div>
                </section>

                { !this.state.authentication.loggedIn &&
                    <div className="loginbox">
                        <h1>Log in to receive admin privileges</h1>
                        
                        <div className="formgroup">
                            <label>Username</label>
                            <input type="text" onChange={this.updateUsername} value={this.state.authentication.username} />
                        </div>

                        <div className="formgroup">
                            <label>Password</label>
                            <input type="password" onChange={this.updatePassword} value={this.state.authentication.password} />
                        </div>

                        { this.state.authentication.logInResult === 'failed' &&
                            <p id="login-error">Couldn't log in with your credentials</p>
                        }

                        <button onClick={this.login}>Log in!</button>
                    </div>
                }

            </React.Fragment>
        );
    }
};

export default Admin;