/* 
 * @flow
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Home.css';

class Home extends Component {
  render() {
    const { id } = this.props.user;

    return (
      <div className="Home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        <span>demo - Ip: {id}</span>
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(Home))
