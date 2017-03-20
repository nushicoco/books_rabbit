import React, { Component } from 'react';
import BookList from '../containers/book_list';
import WelcomeComp from '../components/welcome_component';
import SiginingUp from '../components/not_sign_in';


export default class App extends Component {

    constructor(props) {
        super(props);

    }

    renderUserSituation(userName){
        if (typeof userName ==='undefined') {
            console.log(userName);
            return <SiginingUp />;
        }
            return <WelcomeComp userName = {userName}/>;

}

//books={this.state.books}
    render() {
        var userName = "mighty1617";
        return (
            <div>
                {this.renderUserSituation(userName)}
                <BookList name = "New York Times best sellers" />
            </div>
        );
    }
}////   books={this.state.books }
// <WelcomeComp userName="Mighty1617" />

