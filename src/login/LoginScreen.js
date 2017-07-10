import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './LoginScreen.css';

import logo from '../img/logo.png';
import logoAndroid from '../img/logo-android.svg';
import logoIOS from '../img/logo-ios.svg';
import BG from '../img/bg-login.jpg';

// Actions
import { logInWithFacebook } from '../actions/user';


const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const defaultProps = {

};

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleSigninFacebook = this.handleSigninFacebook.bind(this);
    this.handleSigninGoogle = this.handleSigninGoogle.bind(this);
  }

  handleSigninFacebook() {
    // loadConfig - login facebook
    this.props.dispatch(logInWithFacebook());
  }

  handleSigninGoogle() {

  }

  render() {
    let divstyle = {
      backgroundImage: 'url('+BG+')'
    }

    return (
      <div className="login-screen">
        <div className="login-screen__bg" style={divstyle}></div>
        <div className="login-screen__box">
          <img src={logo} className="login-screen__logo" alt="presentation" role="presentation" />
          <h1>To-Do</h1>
          <p>
            Công việc là niềm vui, To-Do là một cách đơn giản và nhanh nhất để hoàn thành công việc mỗi ngày.
          </p>
          <div className="login-screen__login" onClick={this.handleSigninFacebook}>Đăng nhập bằng tài khoản Facebook</div>
          <div className="login-screen__login login-screen__login--custom" onClick={this.handleSigninGoogle}>Đăng nhập bằng tài khoản Google</div>
          <div className="login-screen__get">
            <span>Tải về</span>
            <a href="#ios" className="login-screen__iconLink">
              <img src={logoIOS} className="login-screen__ios" alt="presentation" role="presentation" />
            </a>
            <a href="#android" className="login-screen__iconLink">
              <img src={logoAndroid} className="login-screen__android" alt="presentation" role="presentation" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

LoginScreen.propTypes = propTypes;
LoginScreen.defaultProps = defaultProps;

export default connect()(LoginScreen);
