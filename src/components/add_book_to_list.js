/**
 * Created by einav on 3/20/17.
 */

import React from 'react';


const addBookToList = () => {
    return (
        <div className="add-button">
            <button>Add</button>
            <div className="dropdown-content">
                <p>search for a book</p>
                <input />
            </div>
        </div>

    );
};

export default addBookToList;

