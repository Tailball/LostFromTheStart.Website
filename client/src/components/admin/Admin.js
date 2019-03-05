import React from 'react';
import Axios from 'axios';

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createShow: {
                date: this.getDateNow(),
                name: '',
                location: ''
            },
            shows: [],
            validation: ''
        };
    }

    componentDidMount() {
        this.getShows();
    }

    getDateNow = () => {
        const dte = new Date();
        const y = dte.getFullYear().toString();
        const m = (dte.getMonth() + 1).toString();
        const d = dte.getDate().toString();

        return `${y}-${m.length === 1 ? (0 + m) : m}-${d.length === 1 ? (0 + d) : d}`;
    }

    getShows = () => {
        Axios.get('../api/shows?mode=admin')
            .then(showData => {
                this.setState({ shows: showData.data.payload });
            })
            .catch(err => console.log(err));
    }

    deleteShow = (id) => {
        Axios.post('../api/shows', 
                   { action: 'DELETE', id: id })
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

        Axios.post('../api/shows', 
            { 
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

    render() {
        return (
            <section id="admin">
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
        );
    }
};

export default Admin;