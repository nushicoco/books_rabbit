import React from 'react';
import { connect } from 'react-redux';
import { changeUserName } from '../actions/index';
import { bindActionCreators } from 'redux';


const welcomeComp = (props) => {
    return (
        <div className="about-me-class" onClick={ () => props.changeUserName()}>
        <h1 className="headline"> Welcome {props.userName} </h1>
        </div>
    );
};

function mapStateToProps(store) {
    return { userName: store.userName }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators( { changeUserName: changeUserName },dispatch)
    
}

export default connect(mapStateToProps,mapDispatchToProps)(welcomeComp);