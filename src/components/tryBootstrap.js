/**
 * Created by User on 26/03/2017.
 */


import React from 'react';


const tryBootstrap = () => {
    return (
        <div className="panel panel-primary">
            <div className="panel-body">
                <h5>Trying out Bootstrap</h5>
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" className="btn btn-default">Left</button>
                    <button type="button" className="btn btn-default">Middle</button>
                    <button type="button" className="btn btn-default">Right</button>
                </div>
            </div>
        </div>
    );
};

export default tryBootstrap;