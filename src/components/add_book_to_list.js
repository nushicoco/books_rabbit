/**
 * Created by einav on 3/20/17.
 */

import React from 'react';


const addBookToList = () => {
    return (
        <div>
            <div  className="add-button">
            <button>+</button>
            </div>
            <div className="dropdown-content">
                <p>search for a book</p>
                <input />
            </div>
        </div>

    );
};

export default addBookToList;

