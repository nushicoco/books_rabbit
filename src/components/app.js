import React, {Component} from 'react';
import BookList from '../containers/book_list';
import WelcomeComp from '../components/welcome_component';
import SiginingUp from '../components/not_sign_in';
import NavigationBar from '../components/navigation_bar';
import TryBootstap from './tryBootstrap';

export default class App extends Component {

    constructor(props) {
        super(props);

    }

//books={this.state.books}
    render() {
        var userName = "mighty1617";
        return (
            <div>
                <NavigationBar userName={userName}/>
                <br />
                <table>
                    <tr>
                        <td>
                            <BookList name="New York Times best sellers"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TryBootstap/>
                        </td>
                    </tr>
                </table>


            </div>
        );
    }
}////   books={this.state.books }
// <WelcomeComp userName="Mighty1617" />

