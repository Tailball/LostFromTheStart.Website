import React from 'react';
import {Link} from 'react-router-dom';

const Links = (props) => {
    return (
        <div className="navbar-links-items" id={props.componentId}>
            <Link to="/">home</Link>
            <Link to="/band">band</Link>
            <Link to="/media">media</Link>
            {/*}
            <Link to="/merch">merch</Link>
            */}
            <Link to="/contact">contact</Link>
        </div>
    );
}

export default Links;