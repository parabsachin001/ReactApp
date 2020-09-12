import React from 'react';
import './loginscreen.css'
import LoginBox from './LoginBox';
import { connect } from 'react-redux';
import { setLoggedInStatus } from '../../redux/actions/loginActions';
import { bindActionCreators } from 'redux';

class LoginScreen extends React.Component {
    loginClicked() {
        let { setLoggedInStatus } = this.props;
        setLoggedInStatus(true);
    }
    render() {
        return (
            <div className='loginPage'>
                <LoginBox
                    loginClicked={() => this.loginClicked.bind(this)} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setLoggedInStatus
    }, dispatch);
};

const mapStateToProps = (state) => ({
    loginStatus: state.login.status
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);