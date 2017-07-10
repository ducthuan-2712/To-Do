/* 
 * @flow
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet"; 
import { withRouter, NavLink } from 'react-router-dom';

// Component
import Avatar from '../../components/Avatar';

import './Notifications.css';

// test data
import graphQL from '../../local_database/graphQL';

class Notifications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloading: false,
      notifications: graphQL['initnotification'],
    }
  }

  componentDidMount() {

  }

  render() {
    const {notifications} = this.state;

    return (
      <div className="notifications">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Notifications | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        
        <div className="notifications__group">
          {notifications.map((item, i) => {
            return (  
              <div key={`notifications__list${item.id} ${i}`} className="notifications__list">
                <div className="notifications__left">
                  <Avatar 
                    userID={item.user._id}
                    loginType={item.user.is_login}
                    size="40"
                    type="circle"
                  />
                </div>
                <div className="notifications__right">
                  <NavLink to={item.link} className="notifications__navlink" activeClassName="notifications__navlink--selected">
                    <b className="notifications__userName">{item.user.name}</b> <span dangerouslySetInnerHTML={{ __html: this.replace(item.content) }} />.
                    <p className="notifications__time">{item.time}</p>
                  </NavLink>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

  replace(string) {
    var str = string;
    var res = str.replace("/&", "<b>").replace("/*", "</b>");
    return res;
  }
}


export default withRouter(Notifications)
