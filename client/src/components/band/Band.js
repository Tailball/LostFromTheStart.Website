import React from 'react';

import BandMember from './BandMember';

import hilde from '../../images/hildepic.jpg';
import seppe from '../../images/seppepic.jpg';
import jochen from '../../images/jochenpic.jpg';
import robby from '../../images/robbypic.jpg';
import robson from '../../images/robsonpic.jpg';

const bandmembers = {
    Hilde: {
        img: hilde,
        name: 'Hilde Vranken',
        funFacts: [
            'Does the best dolphin impersonations.',
            'Although succesfully disguised as a woman, she\'s definitely one of the guys.',
            'Tries to play guitar with her voice but sounds like a flute.'
        ]
    },
    Jochen: {
        img: jochen,
        name: 'Jochen Panjaer',
        funFacts: [
            'Always shows his true colors (it\'s currently blue by the way).',
            'Punkrock-cover master.', 
            'Knows how to surf the concrete waves in the skatepark.'
        ]
    },
    Seppe: {
        img: seppe,
        name: 'Seppe Dausi',
        funFacts: [
            'Creates a guitar sound so sweet and tasty, words cannot describe. That\'s why we call it Seppilicious!',
            'Has more technical difficulties during a single show than a 1967 Chevy Impala in a lifetime.',
            'Makes the best limoncello and whiskey cola\'s you can imagine.'
        ]
    },
    Robby: {
        img: robby,
        name: 'Robby Vanwetswinkel',
        funFacts: [
            'Has moves that could kill (or at least hurt you a lot).',
            'Is the best tourmanager we could afford.',
            'Loved the carousel as a kid, and hasn\'t stopped turning around ever since.'
        ]
    },
    Robson: {
        img: robson,
        name: 'Robby Mangelschots',
        funFacts: [
            'Would sell your wife to buy new equipment for his home studio.',
            'Has listened to so much click-track in his life, his mind works in 1/8\'s.',
            'Owns the largest collection of pokéball shirts of anyone (current count: one shirt).'
        ]
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
            case 'robson':
                member = bandmembers.Robson;
                break;
            default:
                member = bandmembers.Hilde;
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
                        <li onClick={this.changeMember} data-member="robson">Robson<br />Sticks</li>
                    </ul>
                </div>

                <BandMember isMobile={false} selectedMember={this.state.selectedMember} />
                
                <BandMember isMobile={true} selectedMember={bandmembers.Hilde} />
                <BandMember isMobile={true} selectedMember={bandmembers.Seppe} />
                <BandMember isMobile={true} selectedMember={bandmembers.Jochen} />
                <BandMember isMobile={true} selectedMember={bandmembers.Robby} />
                <BandMember isMobile={true} selectedMember={bandmembers.Robson} />
                
            </section>
        );
    }
}

export default Band;