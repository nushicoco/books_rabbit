import React, { Component } from 'react';


const BookListItem = ({book}) => {

   // console.log(book);

    return <tr>
        <td>
            <img src="../../style/img_src/book-flat.png" className="egc-icon"/>
        </td>
        <td>
        <div className="list-rows">
            <h5 className="headline">{book.title}:</h5>
            <h6>{book.author}</h6>
            <p> {book.description}</p>
        </div>
        </td>
    </tr>
};
export default BookListItem;