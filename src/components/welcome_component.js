import React from 'react';


const welcomeComp = ({userName}) => {
    return (
        <div className="about-me-class">
        <h1 className="headline"> Welcome {userName} </h1>
        </div>
    );
};

export default welcomeComp;