import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../components/book_list_item';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (<BookListItem key={book.id} book={book}/>);
        })
    }


    render() {

        return (
            <div>
                <h1>{this.props.name}:</h1>
                <ul className="">{this.renderList()}</ul>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import BookListItem from '../components/book_list_item';
//
// // class BookList extends Component {
// //     constructor(props) {
// //         super(props);
// //
// //     }
// //
{/*//     render(){*/}
{/*//         return <ul> Blah </ul>*/}
{/*//     }*/}
{/*// }*/}

{/*const BookList = (props) => {*/}
    {/*console.log(props.books);*/}

    {/*const bookItems  = props.books.map(book => {*/}
//         console.log(book);
//         return (<BookListItem key={book.id} book={book}/>);
//
//     });
//
//     return (
//         <div className="center">
//             <h1>{props.name}:</h1>
//             <ul className="">{bookItems}</ul>
//         </div>
//     );
// };
// export default BookList;
