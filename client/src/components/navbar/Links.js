import React from 'react';
import {Link} from 'react-router-dom';

class Links extends React.Component {
    render () {
        return (
            <div className="navbar-links-items" id={this.props.componentId}>
                <Link to="/"        onClick={this.props.onClick}>home</Link>
                <Link to="/band"    onClick={this.props.onClick}>band</Link>
                <Link to="/media"   onClick={this.props.onClick}>media</Link>
                {/*}
                <Link to="/merch">merch</Link>
                */}
                <Link to="/contact" onClick={this.props.onClick}>contact</Link>
            </div>
        );
    }
}

export default Links;