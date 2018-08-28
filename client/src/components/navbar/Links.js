import React from 'react';
import {Link} from 'react-router-dom';

const Links = () => {
    return (
        <div>
            <Link to="/">home</Link>
            <Link to="/band">band</Link>
            {/*}
            <Link to="/media">media</Link>
            <Link to="/merch">merch</Link>
            */}
            <Link to="/contact">contact</Link>
        </div>
    );
}

export default Links;