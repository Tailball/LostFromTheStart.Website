import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faYoutubeSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';


import logo from '../images/logo.png';


class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <img src={logo} 
             alt="Lost From The Start logo"
             id="logo" />

        <div id="items">
          <h1>few and far between</h1>
          <h2>2018.09.29</h2>
        </div>

        <div id="socialMedia">
          <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
          <FontAwesomeIcon className="icon" icon={faYoutubeSquare} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
      </div>
    );
  }
}

export default App;
