/* 
 * @flow
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';

// Components
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import StatusCode from '../../components/StatusCode';

// Blocks
import Search from '../../blocks/Search';

import './MyTask.css';

// test data
import graphQL from '../../local_database/graphQL';

class MyTask extends Component {
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
    const {idteam} = this.props.match.params;
    console.log(idteam);
    
    this._initList();
  }

  _initList() {
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
      if (window.confirm("Bạn có muốn hoàn tất task này?")) {
        myObjectsFlag[row].isChecked = true;
        myObjectsFlag[row].isActive = true;
      }
    } else {
      if (window.confirm("Hủy review")) {
        myObjectsFlag[row].isChecked = false;
        myObjectsFlag[row].isActive = false;
      }
    }

    this.setState({myObjectsFlag})
  }

  handleTaskNoFlag(isChecked, row) {
    let { myObjectsNoFlag } = this.state;

    if (!myObjectsNoFlag[row].isChecked) {
      if (window.confirm("Bạn có muốn hoàn tất task này?")) {
        myObjectsNoFlag[row].isChecked = true;
        myObjectsNoFlag[row].isActive = true;
      }
    } else {
      if (window.confirm("Hủy review")) {
        myObjectsNoFlag[row].isChecked = false;
        myObjectsNoFlag[row].isActive = false;
      }
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
          <title>MyTask | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        
        <div className="task__input task__input--search">
          <Search callback={this.onCreateTask} />
        </div>
        {isloading && this.renderHTML(myObjectsFlag, myObjectsNoFlag)}
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
          <div className="task__right--flag">
            {
              myObjectsFlag.map((result, i) => {
                return (
                  <div key={result.id} className={result.isActive ? "task__right task__right--active": "task__right"}>
                    <Checkbox callback={this.handleTask} row={i} isChecked={result.isChecked} />
                    <label>
                      {result.title}
                      <StatusCode code={result.status} />
                    </label>
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
        </div>
        {
          myObjectsNoFlag.map((result, i) => {
            return (
              <div key={result.id} className={!result.merge ? "task__list" : "task__list task__list--custom"}>
                <div className="task__left">
                  {!result.merge ? this.renderDate(result.updateAt) : <span></span>}
                </div>
                <div className={result.isActive ? "task__right task__right--active": "task__right"}>
                  <Checkbox callback={this.handleTaskNoFlag} row={i} isChecked={result.isChecked} />
                  <label>
                    {result.title}
                    <StatusCode code={result.status} />
                  </label>
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

  renderDate(date) {
    var format = moment(date).format('DD/MM');
    var getdate = new Date(date).getDay();

    var day;
    switch(getdate) {
      case 1:
        day = <span>Thứ 3<b>{format}</b></span>
        break
      case 2:
        day = <span>Thứ 4<b>{format}</b></span>
        break
      case 3:
        day = <span>Thứ 5<b>{format}</b></span>
        break
      case 4:
        day = <span>Thứ 6<b>{format}</b></span>
        break
      case 5:
        day = <span>Thứ 7<b>{format}</b></span>
        break
      case 6:
        day = <span>Chủ nhật<b>{format}</b></span>
        break
      default:
        day = <span>Thứ 2<b>{format}</b></span>
    }

    return day;
  }
}

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(MyTask))
