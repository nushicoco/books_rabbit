import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../components/book_list_item';
import AddBookToList from '../components/add_book_to_list';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (<BookListItem key={book.id} book={book}/>);
        })
    }

    render() {

        return (
            <div className="center">
                <h3 className="headline">{this.props.name}:</h3>
                <table>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                <AddBookToList/>
            </div>
        );
    }
};
//                <ul className="">{this.renderList()}</ul>


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
