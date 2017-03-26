import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUserName } from '../actions/index';
import { bindActionCreators } from 'redux';


class welcomeComp extends Component {
    constructor(props) {
        super(props);

        this.state = {counter: 0};

    }

    onHover(event) {
        console.log('hover:' + this.state.counter);
        this.setState({counter : this.state.counter+1});
    }

    render () {
        return (
            <div className="about-me-class" onClick={() => this.props.changeUserName()}>
                <h1 className="headline"> Welcome {this.props.userName} </h1>
                <h2 onMouseOver={this.onHover.bind(this)}> Hover over me</h2>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return { userName: store.userName }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { changeUserName: changeUserName },dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(welcomeComp);