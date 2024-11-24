import React from 'react';
import './index.scss'
import LoginForm from './components/LoginForm'
import loginRight from '@/assets/images/login_right.png'
import logo from '@/assets/images/logo.png'
import ThemeSwitch from '@/components/ThemeSwitch'

const Login = () => {
    return (
        <div className='login-page' >
<div className="login-container">
  <ThemeSwitch />
  <div className="login-box">
            <div className="login-form">
                <div className="login-logo">
                    <img className="login-icon" src={logo} alt="logo" />
                    <span className="logo-text">FlexiAdmin</span>
                </div>
                <LoginForm />
            </div>
            <div className="login-right">
                <img src={loginRight} alt="login" />
            </div>
        </div>
    </div>
        </div>
        
    );
}

export default Login;
