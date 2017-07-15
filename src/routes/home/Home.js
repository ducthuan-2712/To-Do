/* 
 * @flow
 */

import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';
import _ from 'lodash';

// Components
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import StatusCode from '../../components/StatusCode';
import RenderDate from '../../components/RenderDate';

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
      status: '',
      isloading: false
    }

    this.onCreateTask = this.onCreateTask.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.handleTaskNoFlag = this.handleTaskNoFlag.bind(this);
    this.handleFlag = this.handleFlag.bind(this);
  }

  componentDidMount() {
    let { idteam } = this.props.match.params;
    let { url_team } = this.props.user;

    this._initList(_.trim(_.replace(idteam, JSON.stringify(url_team), ''), '&-'));
    this.setState({status: _.trim(_.replace(idteam, JSON.stringify(url_team), ''), '&-')})
  }

  _initList(statusCheck) {
    let { justDemoData, isloading } = this.state;

    if (justDemoData.length !== 0 && !isloading) {



      let myObjectsFlag = _.filter(justDemoData, ['is_flag', true])
      let myObjectsNoFlag = _.filter(justDemoData, ['is_flag', false])

      if (statusCheck === 'alert') {
        _.forEach(myObjectsFlag, (value, key) => {
          let getTimes = new Date(value.alertAt).getTime();
          let today = new Date().getTime();

          if (today > getTimes) {
            myObjectsFlag = _.filter(myObjectsFlag, ['alertAt', value.alertAt]);
          }
        })

        _.forEach(myObjectsNoFlag, (value, key) => {
          let getTimes = new Date(value.alertAt).getTime();
          let today = new Date().getTime();

          if (today > getTimes) {
            myObjectsNoFlag = _.filter(myObjectsNoFlag, ['alertAt', value.alertAt]);
          }
        })
      }

      _.sortBy(myObjectsNoFlag, 'updateAt');
      _.forEach(myObjectsFlag, (value, keys) => {
        myObjectsFlag[keys].isdelete = false
      })
      _.forEach(myObjectsNoFlag, (value, key) => {
        if (key !== 0) {
          if (value.updateAt === myObjectsNoFlag[key-1].updateAt) {
            myObjectsNoFlag[key].merge = true
            myObjectsNoFlag[key].isdelete = false
          } else {
            myObjectsNoFlag[key].merge = false
            myObjectsNoFlag[key].isdelete = false
          }
        } else {
          myObjectsNoFlag[key].merge = false
          myObjectsNoFlag[key].isdelete = false
        }
      })

      if (statusCheck === 'done') {
        myObjectsFlag = _.filter(myObjectsFlag, ['isChecked', true])
        _.forEach(myObjectsFlag, (value, keys) => {
          myObjectsFlag[keys].isdelete = true
        })

        myObjectsNoFlag = _.filter(myObjectsNoFlag, ['isChecked', true])
        _.forEach(myObjectsNoFlag, (value, keys) => {
          myObjectsNoFlag[keys].isdelete = true
        })
      }



      // all done
      this.setState({
        isloading: true, 
        myObjectsFlag,
        myObjectsNoFlag
      })
    }
  }

  onCreateTask(valueTast, file, imageBase64) {

  }

  handleTask(isChecked, row) {
    let { myObjectsFlag } = this.state;

    if (!myObjectsFlag[row].isChecked) {
      if (window.confirm("Bạn có muốn hoàn tất task này?")) {
        myObjectsFlag[row].isChecked = true;
      }
    } else {
      if (window.confirm("Hủy review")) {
        myObjectsFlag[row].isChecked = false;
      }
    }

    this.setState({myObjectsFlag})
  }

  handleTaskNoFlag(isChecked, row) {
    let { myObjectsNoFlag } = this.state;

    if (!myObjectsNoFlag[row].isChecked) {
      if (window.confirm("Bạn có muốn hoàn tất task này?")) {
        myObjectsNoFlag[row].isChecked = true;
      }
    } else {
      if (window.confirm("Hủy review")) {
        myObjectsNoFlag[row].isChecked = false;
      }
    }

    this.setState({myObjectsNoFlag})
  }

  handleFlag(result, row) {
    
  }

  render() {
    const { isloading, myObjectsFlag, myObjectsNoFlag, status } = this.state;

    return (
      <div className="task">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        
        {status === 'alert' || status === 'done'
          ? null
          : <div className="task__input task__input--search"><Search callback={this.onCreateTask} /></div>
        }
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
                  <div key={result.id} className={result.isChecked ? "task__right task__right--active": "task__right"}>
                    <Checkbox callback={this.handleTask} row={i} isChecked={result.isChecked} />
                    <label>
                      {result.title}
                      <StatusCode code={result.status} />
                    </label>
                    <ul className="task__tool">
                      {result.isdelete && <li className="task__delte" onClick={() => this.handleDelete(result, i)}><Icon size="xs" name="delete" /></li>}
                      <li className="task__chat">
                        <NavLink to={`/d/${result.id}`}>
                          <Icon size="xs" name="chat_bubble_outline" />
                        </NavLink>
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
                  {!result.merge ? <RenderDate date={result.updateAt} /> : <span></span>}
                </div>
                <div className={result.isChecked ? "task__right task__right--active": "task__right"}>
                  <Checkbox callback={this.handleTaskNoFlag} row={i} isChecked={result.isChecked} />
                  <label>
                    {result.title}
                    <StatusCode code={result.status} />
                  </label>
                  <ul className="task__tool">
                    {result.isdelete && <li className="task__delte" onClick={() => this.handleDelete(result, i)}><Icon size="xs" name="delete" /></li>}
                    <li className="task__chat">
                      <NavLink to={`/d/${result.id}`}>
                        <Icon size="xs" name="chat_bubble_outline" />
                      </NavLink>
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
