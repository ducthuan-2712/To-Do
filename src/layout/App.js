/* 
 * @flow
 */

import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { withRouter, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

// Components
import Menu from '../blocks/Menu';
import TopMenu from '../blocks/TopMenu';

// Login
import LoginScreen from '../login';

// Routes
import Home from '../routes/home';
import NoFound from '../routes/noFound';

// CSS
import './App.css';

import loadingPage from '../img/loading-page.gif';

// Actions
import User from '../actions/user';

// Check flow
const propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    component: NoFound,
  },
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // Khởi tạo như app - 2 trạng thái đăng nhập true hoặc false.
    // loadConfig - login facebook
    this.props.dispatch(User.logOutWithFacebook());
  }
  
  render() {
    const { isLoggedIn } = this.props.user;
    if (!isLoggedIn) {
      return <LoginScreen />
    }

    return (
      <div className="page">
        <div className="page__left">
          <Menu onLogout={this.handleLogout} />
        </div>
        <div className="page__right">
          <div className="page__top">
            <TopMenu />
          </div>
          <div className="page__box">
            <CSSTransitionGroup
              component="div"
              className="page-transition"
              transitionName="page"
              transitionEnterTimeout={600}
              transitionLeaveTimeout={600}>
              <Switch key={this.props.location.key} location={this.props.location}>
                {routes.map((route, i) => (
                  <Route key={route.path+i} {...route} />
                ))}
              </Switch>
              <div className='overlay'>
                <div className='overlay__circle'>
                  <img src={loadingPage} alt="presentation" role="presentation" />
                  <b>Đang đồng bộ dữ liệu</b>
                </div>
              </div>
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(App));
