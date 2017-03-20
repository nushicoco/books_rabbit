import React, { Component } from 'react';


const BookListItem = ({book}) => {

   // console.log(book);

    return <li>
        <div>
            <h5>{book.title}:</h5>
            <h6>{book.author}</h6>
            <p> {book.description}</p>
        </div>
    </li>
};
export default BookListItem;