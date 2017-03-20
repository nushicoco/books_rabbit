import React, { Component } from 'react';
import BookList from '../containers/book_list';
import WelcomeComp from '../components/welcome_component';


export default class App extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <WelcomeComp userName="Mighty1617" />
                <BookList name = "New York Times best sellers" books={this.state.books} />
            </div>
        );
    }
}
