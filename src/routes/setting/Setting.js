/* 
 * @flow
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// container
import Invite from './container/invite';

import './Setting.css';

// test data
import graphQL from '../../local_database/graphQL';

class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: graphQL['inituser'],
      isloading: false
    }
  }

  componentDidMount() {

  }

  renderSetting() {
    const {setting} = this.props.match.params;

    switch(setting) {
      case 'invite':
        return <Invite team={this.state.team} />
      default:
        return <span>Page not found</span>
    }
  }

  render() {
    return (
      <div className="setting">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Setting | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        
        {this.renderSetting()}
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(Setting))
