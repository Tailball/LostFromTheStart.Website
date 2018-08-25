import React from 'react';

import Hero from './Hero';
import News from './News';
import Shows from './shows/Shows';

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <News />
            <Shows />
        </div>
    );
}

export default LandingPage;