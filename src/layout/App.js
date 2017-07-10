/* 
 * @flow
 */

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

// Components
import Menu from '../blocks/Menu';
import TopMenu from '../blocks/TopMenu';

// Login
import LoginScreen from '../login';

// Routes
import Home from '../routes/home';
import MyTask from '../routes/myTask';
import Setting from '../routes/setting';
import Notifications from '../routes/notifications';
import NoFound from '../routes/noFound';

// CSS
import './App.css';

import loadingPage from '../img/loading-page.gif';

// Actions
import { logOutWithFacebook } from '../actions/user';

// Check flow
const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const routes = [
  {
    path: '/t/:idteam?',
    component: Home,
    exact: true,
  },
  {
    path: '/m/:idteam?',
    component: MyTask,
  },
  {
    path: '/setting/:setting?',
    component: Setting,
  },
  {
    path: '/notifications',
    component: Notifications,
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

  componentWillMount() {
    window.performance.mark('App')
  }

  componentDidMount() {
    console.log('Load time: ',window.performance.now('App'))
  }

  handleLogout() {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
      // Khởi tạo như app - 2 trạng thái đăng nhập true hoặc false.
      // loadConfig - login facebook
      this.props.dispatch(logOutWithFacebook());
    }
  }
  
  render() {
    const { isLoggedIn, id, type, name, email, url_team, admin_url_team } = this.props.user;
    if (!isLoggedIn) {
      return <LoginScreen />
    }

    return (
      <div className="page">
        {this.redirect()}

        <div className="page__left">
          <Menu 
            url_team={url_team} 
            id={id}
            type={type}
            name={name}
            email={email}
            onLogout={this.handleLogout} 
            admin_url_team={admin_url_team}
          />
        </div>
        <div className="page__right">
          <div className="page__top">
            <TopMenu location={this.props.location} url_team={url_team} />
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

  redirect() {
    let {url_team} = this.props.user;
    let {pathname} = this.props.location;
    
    if(pathname === '/') {
      return <Redirect to={`/t/${url_team}`} />
    }
  }
}

App.propTypes = propTypes;

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(App));
