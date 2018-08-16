import React from 'react';

import isMobile from '../util/local';

import Navbar from './Navbar';
import Shows from './Shows';
import Footer from './Footer';

import logo from '../images/logo.png';
import fewandfarbetweenalbum from '../images/album cover.png';

class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Navbar />

        <section id="hero" className={isMobile() ? 'bg-mobile' : 'bg-desktop'}>
          <img src={logo} 
               alt="Lost From The Start logo"
               id="logo" />
        </section>

        <section id="news">
          <img src={fewandfarbetweenalbum} alt="Few And Far Between album cover" />
          <h1>few and far between</h1>
          <h2>2018.09.29</h2>
          <p>The first full-length, featuring singles 'Out Of Left Field' and 'Off The Hook'</p>
          <button>Preorder now</button>
        </section>

        <Shows />

        <Footer />

      </div>
    );
  }
}

export default App;
