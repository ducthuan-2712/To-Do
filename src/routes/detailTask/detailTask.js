/* 
 * @flow
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';

import './detailTask.css';

class detailTask extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {

    return (
      <div className="dtask">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Detail Task - {this.props.match.params.iddetail} | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        
        
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(detailTask))
