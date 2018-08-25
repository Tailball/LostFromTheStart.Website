import React from 'react';
import axios from 'axios';

import isMobile from '../../util/local';

import ShowList from './ShowList';

class Shows extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            shows: {
                old: [],
                new: []
            }
        };
    }

    componentDidMount() {
        axios.get('/api/shows')
            .then (showData => {
                this.setState({
                    shows: {
                        old: showData.data.old,
                        new: showData.data.new
                    }
                });
            })
            .catch(exc => {
                console.log(exc.message);
            });
    }

    render () {
        return (
            <section id="shows" className={isMobile() ? 'bg-mobile' : 'bg-desktop'}>
                <h1>Shows &amp; tours</h1>
            
                <h2>Upcoming</h2>
                <ShowList shows={this.state.shows.new} />

                <h2>Previous</h2>
                <ShowList shows={this.state.shows.old} />
            </section>
        );
    }
}

export default Shows;
