import React from 'react';


const welcomeComp = ({userName}) => {
    return (
        <div className="about-me-class">
        <h1> Welcome {userName} </h1>
        </div>
    );
};

export default welcomeComp;