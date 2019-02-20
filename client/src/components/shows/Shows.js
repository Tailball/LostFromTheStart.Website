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
                new: [],
                showOld: false
            }
        };
    }

    componentDidMount() {
        axios.get('/api/shows')
            .then (showData => {
                this.setState({
                    shows: {
                        ...this.state.shows,
                        old: showData.data.old,
                        new: showData.data.new
                    }
                });
            })
            .catch(exc => {
                console.log(exc.message);
            });
    }

    onClickOldShows = () => {
        this.setState((prevstate) => {
            return {
                shows: {
                    ...prevstate.shows,
                    showOld: !prevstate.shows.showOld
                }
            };
        });
    }

    render () {
        return (
            <section id="shows" className={isMobile() ? 'bg-mobile' : 'bg-desktop'}>
                <h1>Shows &amp; tours</h1>
            
                <h2>Upcoming
                    <br/>
                {
                    (!this.state.shows.new || this.state.shows.new.length === 0) &&
                    <span className="click-to-show">
                        (Stay tuned for our upcoming shows!)
                    </span>
                }
                </h2>
                
                {
                    (this.state.shows.new && this.state.shows.new.length > 0) &&
                    <ShowList shows={this.state.shows.new} />
                }

                <h2>Previous
                    <br/>
                    <span className="click-to-show" onClick={this.onClickOldShows}>
                        (click to {this.state.shows.showOld ? 'hide' : 'show'})
                    </span>
                </h2>
                { this.state.shows.showOld &&
                    <ShowList shows={this.state.shows.old} />
                }
            </section>
        );
    }
}

export default Shows;
