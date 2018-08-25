import React from 'react';
import PropTypes from 'prop-types';

const BandMember = (props) => {
    return (
        <div className={props.isMobile ? 'bandmember-mobile' : 'bandmember'}>
            <img src={props.selectedMember.img} alt={'Picture of ' + props.selectedMember.name} />

            <div className="bandmember-description">
                <h3>{props.selectedMember.name}</h3>
                {
                    props.selectedMember.funFacts.map(fact => {
                        return <p key={fact} className="bandmember-description-funfact">{fact}</p>
                    })
                }
            </div>
        </div>
    );
}

BandMember.propTypes = {
    selectedMember: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired
};

export default BandMember;