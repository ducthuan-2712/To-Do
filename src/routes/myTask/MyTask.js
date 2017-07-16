/* 
 * @flow
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';
import _ from 'lodash';

import RenderTask from '../../components/RenderTask';

// Blocks
import Search from '../../blocks/Search';

// test data
import graphQL from '../../local_database/graphQL';

class MyTask extends Component {
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
    let status = _.trim(_.replace(idteam, JSON.stringify(url_team), ''), '&-');

    this._initList(status);
    this.setState({status});
  }

  _initList(statusCheck) {
    let { justDemoData, isloading } = this.state;

    if (justDemoData.length !== 0 && !isloading) {



      let myObjectsFlag = _.filter(justDemoData, ['is_flag', true])
      let myObjectsNoFlag = _.filter(justDemoData, ['is_flag', false])

      _.forEach(myObjectsFlag, (value, key) => {
        let getTimes = new Date(value.alertAt).getTime();
        let today = new Date().getTime();

        if (today > getTimes) {
          myObjectsFlag[key].alert = true;
        }
      })

      _.forEach(myObjectsNoFlag, (value, key) => {
        let getTimes = new Date(value.alertAt).getTime();
        let today = new Date().getTime();

        if (today > getTimes) {
          myObjectsNoFlag[key].alert = true; 
        }
      })

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

      if (statusCheck === 'done') {
        myObjectsFlag = _.filter(myObjectsFlag, ['isChecked', true])
        myObjectsNoFlag = _.filter(myObjectsNoFlag, ['isChecked', true])
      }

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
          <title>MyTask | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        
        {status === 'alert' || status === 'done'
          ? null
          : <div className="task__input task__input--search"><Search callback={this.onCreateTask} /></div>
        }
        {isloading && <RenderTask 
                        myObjectsFlag={myObjectsFlag} 
                        myObjectsNoFlag={myObjectsNoFlag}
                        onCheckBox={this.handleTask}
                        onCheckBoxNoFlag={this.handleTaskNoFlag}
                        onFlag={this.handleFlag}
                      />
        }
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(MyTask))
