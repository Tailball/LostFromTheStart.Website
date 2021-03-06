import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Band from './band/Band';
import Media from './media/Media';
import Merch from './merch/Merch';
import Contact from './contact/Contact';

import Admin from './admin/Admin';

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

              <Route path="/Admin" component={Admin} />
            </Switch>
          
          <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
