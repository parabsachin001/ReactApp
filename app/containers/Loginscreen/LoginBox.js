import React from 'react';
import './loginscreen.css'
import LableComponent from '../../components/LableComponent';
import TextInput from '../../components/TextInput';

class LoginBox extends React.Component {
    render() {
        const { loginClicked, userNameChanged, passwordChanged } = this.props;
        return (
            <div className='loginBox'>
                <div className='inputWrapper col-sm-12'>
                    <LableComponent className='row col-sm-12' value='User Name:' />
                    <TextInput className='col-sm-12' type='text' onchange={userNameChanged} />
                    <LableComponent className='row col-sm-12' value='Password:' />
                    <TextInput className='col-sm-12' type='password' onchange={userNameChanged}/>
                </div>
                <div className='buttonWrapper col-sm-12'>
                    <button type="button" className="btn btn-secondary" onClick={loginClicked()}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginBox;