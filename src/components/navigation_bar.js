/**
 * Created by User on 21/03/2017.
 */

import React from 'react';
import SiginingUp from '../components/not_sign_in';
import WelcomeComp from '../components/welcome_component';


class navigationBar extends React.Component{
    constructor (props)
    {
        super(props);
        this.state = {userName:props.UserName}
    }
    renderUserSituation(userName){
        if (typeof userName ==='undefined') {
            console.log(userName);
            return <SiginingUp />;
        }
        return <WelcomeComp userName = {userName}/>;

    }
    render() {
    return (
        <table className="navigation-bar-table">
            <tbody>
                <tr>
                    <td className=".navigation-bar-td">
                        {this.renderUserSituation(this.state.userName)}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
}

/**
 <div className="dropdown">
 <p>Profile</p>
 <div className="dropdown-content">
 </div>
 </div>
 */
export default navigationBar;