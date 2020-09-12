import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './Loginscreen/LoginScreen';
import MainComponent from './MainComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RouteContainer extends React.Component {
    render() {
        let _defaultComponent = this.props.loginStatus ? MainComponent : LoginScreen;
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={_defaultComponent} />
                </Switch>
            </Router>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
};

const mapStateToProps = (state) => ({
    loginStatus: state.login.userStatus.status
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouteContainer);