import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Band from './Band';
import Media from './Media';
import Merch from './Merch';
import Contact from './Contact';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="mainContainer">
          <Navbar />
          
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/Band" component={Band} />
              <Route path="/Media" component={Media} />
              <Route path="/Merch" component={Merch} />
              <Route path="/Contact" component={Contact} />
            </Switch>
          
          <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
