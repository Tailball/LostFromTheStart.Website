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
                        <li onClick={this.changeMember} data-member="hilde">Hilde - Mic</li>
                        <li onClick={this.changeMember} data-member="seppe">Seppe - 6-string</li>
                        <li onClick={this.changeMember} data-member="jochen">Jochen - 6-string</li>
                        <li onClick={this.changeMember} data-member="robby">Robby - 4-string</li>
                        <li onClick={this.changeMember} data-member="laurens">Laurens - Sticks</li>
                    </ul>
                </div>
                <div className="bandmember">
                    <img src={this.state.selectedMember.img} />

                    <div className="bandmember-description">
                        <h3>{this.state.selectedMember.name}</h3>
                        <p>{this.state.selectedMember.description}</p>
                        <p>Influenced by: {this.state.selectedMember.influences}</p>
                        <p>Fun fact: {this.state.selectedMember.funFact}</p>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default Band;