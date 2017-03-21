import React, { Component } from 'react';
import BookList from '../containers/book_list';
import WelcomeComp from '../components/welcome_component';
import SiginingUp from '../components/not_sign_in';
import NavigationBar from '../components/navigation_bar';


export default class App extends Component {

    constructor(props) {
        super(props);

    }


//books={this.state.books}
    render() {
        var userName = "mighty1617";
        return (
            <div>
                <NavigationBar userName = {userName}/>
                <br />
                <BookList name = "New York Times best sellers" />
            </div>
        );
    }
}////   books={this.state.books }
// <WelcomeComp userName="Mighty1617" />

