import React from 'react';

import isMobile from '../util/local';

import Navbar from './Navbar';
import News from './News';
import Shows from './Shows';
import Footer from './Footer';

import logo from '../images/logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Navbar />

        <section id="hero" className={isMobile() ? 'bg-mobile' : 'bg-desktop'}>
          <img src={logo} 
               alt="Lost From The Start logo"
               id="logo" />
        </section>

        <News />
        <Shows />
  
        <Footer />
        
      </div>
    );
  }
}

export default App;
