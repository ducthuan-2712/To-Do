/* 
 * @flow
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

// Components
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import StatusCode from '../../components/StatusCode';

// Blocks
import Search from '../../blocks/Search';

import './Home.css';

// test data
import graphQL from '../../local_database/graphQL';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      justDemoData: graphQL['inittask'],
      myObjectsFlag: [],
      myObjectsNoFlag: [],
      isloading: false
    }

    this.onCreateTask = this.onCreateTask.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.handleTaskNoFlag = this.handleTaskNoFlag.bind(this);
    this.handleChat = this.handleChat.bind(this);
    this.handleFlag = this.handleFlag.bind(this);
  }

  componentDidMount() {
    const { justDemoData } = this.state;

    if (justDemoData.length !== 0 && !this.state.isloading) {

      this.setState({ myObjectsFlag: _.filter(justDemoData, ['is_flag', true]) })

      let myObjectsNoFlag = _.filter(justDemoData, ['is_flag', false])
      _.sortBy(myObjectsNoFlag, 'updateAt');

      _.forEach(myObjectsNoFlag, (value, key) => {
        if (key !== 0) {
          if (value.updateAt === myObjectsNoFlag[key-1].updateAt) {
            myObjectsNoFlag[key].merge = true
          } else {
            myObjectsNoFlag[key].merge = false
          }
        } else {
          myObjectsNoFlag[key].merge = false
        }   
      })

      this.setState({isloading: true, myObjectsNoFlag})
    }
  }

  onCreateTask(valueTast, file, imageBase64) {

  }

  handleTask(isChecked, row) {
    let { myObjectsFlag } = this.state;

    if (!myObjectsFlag[row].isChecked) {
      myObjectsFlag[row].isChecked = true;
    } else {
      myObjectsFlag[row].isChecked = false;
    }

    this.setState({myObjectsFlag})
  }

  handleTaskNoFlag(isChecked, row) {
    let { myObjectsNoFlag } = this.state;

    if (!myObjectsNoFlag[row].isChecked) {
      myObjectsNoFlag[row].isChecked = true;
    } else {
      myObjectsNoFlag[row].isChecked = false;
    }

    this.setState({myObjectsNoFlag})
  }

  handleChat(result, row) {
    
  }

  handleFlag(result, row) {
    
  }

  render() {
    const { isloading, myObjectsFlag, myObjectsNoFlag } = this.state;

    return (
      <div className="task">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        
        <div className="task__box">
          <div className="task__input task__input--search">
            <Search callback={this.onCreateTask} />
          </div>
          {isloading && this.renderHTML(myObjectsFlag, myObjectsNoFlag)}
        </div>
      </div>
    );
  }

  renderHTML(myObjectsFlag, myObjectsNoFlag) {
    return (
      <div className="task__group">
        <div className="task__list task__list--flag">
          <div className="task__left"> 
            <Icon size="xs" name="star" color="active" />
          </div>
          {
            myObjectsFlag.map((result, i) => {
              return (
                <div id={result.id} key={result.id} className="task__right">
                  <Checkbox callback={this.handleTask} row={i} isChecked={result.isChecked} />
                  <span>
                    {result.title}
                    <StatusCode code={result.status} />
                  </span>
                  <ul className="task__tool">
                    <li className="task__chat" onClick={() => this.handleChat(result, i)}>
                      <Icon size="xs" name="chat_bubble_outline" />
                    </li>
                    <li className="task__flag" onClick={() => this.handleFlag(result, i)}>
                      <Icon size="xs" name="star_border" />
                    </li>
                  </ul>
                </div>
              )
            })
          }
        </div>
        {
          myObjectsNoFlag.map((result, i) => {
            return (
              <div key={result.id} className="task__list">
                <div className="task__left">
                  {!result.merge ? <b>{result.updateAt}</b> : <span></span>}
                </div>
                <div className="task__right">
                  <Checkbox callback={this.handleTaskNoFlag} row={i} isChecked={result.isChecked} />
                  <span>
                    {result.title}
                    <StatusCode code={result.status} />
                  </span>
                  <ul className="task__tool">
                    <li className="task__chat" onClick={() => this.handleChat(result, i)}>
                      <Icon size="xs" name="chat_bubble_outline" />
                    </li>
                    <li className="task__flag" onClick={() => this.handleFlag(result, i)}>
                      <Icon size="xs" name="star_border" />
                    </li>
                  </ul>
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(Home))
