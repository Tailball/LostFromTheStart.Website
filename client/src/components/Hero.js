import React from 'react';

import isMobile from '../util/local';
import logo from '../images/logo.png';

const Hero = () => {
    return (
        <section id="hero" className={isMobile() ? 'bg-mobile' : 'bg-desktop'}>
            <img src={logo} 
                 alt="Lost From The Start logo"
                 id="logo" />
        </section>
    );
}

export default Hero;