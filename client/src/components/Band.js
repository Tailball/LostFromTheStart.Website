import React from 'react';

import hilde from '../images/hildepic.jpg';
import seppe from '../images/seppepic.jpg';
import jochen from '../images/jochenpic.jpg';
import robby from '../images/robbypic.jpg';
import laurens from '../images/laurenspic.jpg';

const bandmembers = {
    Hilde: {
        img: hilde,
        name: 'Hilde Vranken',
        description: 'Vocal powerhouse. Writer of poetry.',
        influences: 'Silverstein, Yellowcard, Fall Out Boy',
        funFact: 'Does the best dolphin impersonations.'
    },
    Jochen: {
        img: jochen,
        name: 'Jochen Panjaer',
        description: 'add description',
        influences: 'Bad Religion, NOFX, A Day To Remember, Yellowcard, Neck Deep',
        funFact: 'add funfact'
    },
    Seppe: {
        img: seppe,
        name: 'Seppe Dausi',
        description: 'add description',
        influences: 'add influences',
        funFact: 'add funfact'
    },
    Robby: {
        img: robby,
        name: 'Robby Vanwetswinkel',
        description: 'add description',
        influences: 'add influences',
        funFact: 'add funfact'
    },
    Laurens: {
        img: laurens,
        name: 'Laurens Vanbuel',
        description: 'add description',
        influences: 'add influences',
        funFact: 'add funfact'
    }
}

class Band extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedMember: bandmembers.Hilde
        };
    }

    changeMember = (e) => {
        let member = bandmembers.Hilde;

        switch(e.target.dataset.member) {
            case 'seppe':
                member = bandmembers.Seppe;
                break;
            case 'jochen':
                member = bandmembers.Jochen;
                break;
            case 'robby': 
                member = bandmembers.Robby;
                break;
            case 'laurens':
                member = bandmembers.Laurens;
                break;
        }

        this.setState({
            selectedMember: member
        });
    }

    render () {
        return (
            <section id="band">

                <div className="history">    
                    <h1>Who is Lost From The Start?</h1>

                    <p><i>Lost From The Start is an energetic poppunk quintet hailing from Limburg (BE).</i></p>
                    <p>
                        By utilising melodic guitar parts and catchy, yet thoughtful lyrics, the band reaches out to everyone trying to find their way. 
                        A fair warning though, the songs might get stuck in your head for days.
                        <br/>
                        Lost From The Start found inspiration in bands they listened to back in the days, while still managing to keep a fresh and unique sound.
                    </p> 
                    
                    <p><i>A trip down memory lane.</i></p>
                </div>

                <div className="featuring">
                    <h2>Featuring...</h2>
                    <ul>
                        <li onClick={this.changeMember} data-member="hilde">Hilde<br />Mic</li>
                        <li onClick={this.changeMember} data-member="seppe">Seppe<br />6-string</li>
                        <li onClick={this.changeMember} data-member="jochen">Jochen<br />6-string</li>
                        <li onClick={this.changeMember} data-member="robby">Robby<br />4-string</li>
                        <li onClick={this.changeMember} data-member="laurens">Laurens<br />Sticks</li>
                    </ul>
                </div>
                <div className="bandmember">
                    <img src={this.state.selectedMember.img} />

                    <div className="bandmember-description">
                        <h3>{this.state.selectedMember.name}</h3>
                        <p className="bandmember-description-description">{this.state.selectedMember.description}</p>
                        <p className="bandmember-description-influence">Influenced by: {this.state.selectedMember.influences}</p>
                        <p className="bandmember-description-funfact">Fun fact: {this.state.selectedMember.funFact}</p>
                    </div>
                </div>

                <div className="bandmember-mobile">
                    <img src={bandmembers.Hilde.img} />

                    <div className="bandmember-mobile-description">
                        <h3>{bandmembers.Hilde.name}</h3>
                        <p className="bandmember-mobile-description-description">{bandmembers.Hilde.description}</p>
                        <p className="bandmember-mobile-description-influence">Influenced by<br />{bandmembers.Hilde.influences}</p>
                        <p className="bandmember-mobile-description-funfact">Fun fact<br />{bandmembers.Hilde.funFact}</p>
                    </div>
                </div>

                <div className="bandmember-mobile">
                    <img src={bandmembers.Seppe.img} />

                    <div className="bandmember-mobile-description">
                        <h3>{bandmembers.Seppe.name}</h3>
                        <p className="bandmember-mobile-description-description">{bandmembers.Seppe.description}</p>
                        <p className="bandmember-mobile-description-influence">Influenced by<br />{bandmembers.Seppe.influences}</p>
                        <p className="bandmember-mobile-description-funfact">Fun fact<br />{bandmembers.Seppe.funFact}</p>
                    </div>
                </div>

                <div className="bandmember-mobile">
                    <img src={bandmembers.Jochen.img} />

                    <div className="bandmember-mobile-description">
                        <h3>{bandmembers.Jochen.name}</h3>
                        <p className="bandmember-mobile-description-description">{bandmembers.Jochen.description}</p>
                        <p className="bandmember-mobile-description-influence">Influenced by<br />{bandmembers.Jochen.influences}</p>
                        <p className="bandmember-mobile-description-funfact">Fun fact<br />{bandmembers.Jochen.funFact}</p>
                    </div>
                </div>

                <div className="bandmember-mobile">
                    <img src={bandmembers.Robby.img} />

                    <div className="bandmember-mobile-description">
                        <h3>{bandmembers.Robby.name}</h3>
                        <p className="bandmember-mobile-description-description">{bandmembers.Robby.description}</p>
                        <p className="bandmember-mobile-description-influence">Influenced by<br />{bandmembers.Robby.influences}</p>
                        <p className="bandmember-mobile-description-funfact">Fun fact<br />{bandmembers.Robby.funFact}</p>
                    </div>
                </div>

                <div className="bandmember-mobile">
                    <img src={bandmembers.Laurens.img} />

                    <div className="bandmember-mobile-description">
                        <h3>{bandmembers.Laurens.name}</h3>
                        <p className="bandmember-mobile-description-description">{bandmembers.Laurens.description}</p>
                        <p className="bandmember-mobile-description-influence">Influenced by<br />{bandmembers.Laurens.influences}</p>
                        <p className="bandmember-mobile-description-funfact">Fun fact<br />{bandmembers.Laurens.funFact}</p>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default Band;