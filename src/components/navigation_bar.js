/**
 * Created by User on 21/03/2017.
 */

import React from 'react';


const navigationBar = () => {
    return (
        <table className="navigation-bar-table">
            <tbody>
                <tr>
                    <td className=".navigation-bar-td">
                        <p>Profile </p>
                    </td>
                    <td className=".navigation-bar-td">
                        <p>About us </p>
                    </td>
                    <td className=".navigation-bar-td">
                        <p>Contact us </p>
                    </td>
                    <td className=".navigation-bar-td">
                        <p>Search for a list </p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
/**
 <div className="dropdown">
 <p>Profile</p>
 <div className="dropdown-content">
 </div>
 </div>
 */
export default navigationBar;