/* 
 * @flow
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

// Components
import Icon from '../Icon';
import Checkbox from '../Checkbox';
import StatusCode from '../StatusCode';
import RenderDate from '../RenderDate';
import Avatar from '../Avatar';

import './RenderTask.css'

export default class RenderTask extends Component {
  render() {
    const {myObjectsFlag, myObjectsNoFlag} = this.props;

    if (!myObjectsFlag.length && !myObjectsNoFlag.length) {
      return (
        <div className="task__group">
          <div className="task__noList">
            <Icon size="lg" name="note_add" color="dark-silver" />
            Bạn chưa có dữ liệu
          </div>
        </div>
      )
    }

    if (!myObjectsFlag.length) {
      return (
        <div className="task__group">
          {this._renderNoFlag()}
        </div>
      )
    }

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
                    <Checkbox callback={this.props.onCheckBox} row={i} isChecked={result.isChecked} />
                    <div className="task__avatar">
                      <Avatar userID={result.assignBy._id} loginType={result.assignBy.is_login} size="24" type="circle" />
                      <Icon size="xxs" name="arrow_forward" />
                      <div className="task-list__avatar">
                        {
                          result.assignTo.map((avatar, subkey) => {
                            if (subkey >= 4) {
                              return null;
                            }

                            if (subkey >= 3) {
                              return (
                                <div key={avatar._id+subkey} className="task-list__avatar__break">
                                  <NavLink to={{
                                    pathname: `/d/${result.id}`,
                                    state: { hidden: true }
                                  }}>
                                    <Icon size="xxs" name="add" />
                                  </NavLink>
                                </div>  
                              )
                            }

                            return (
                              <div key={avatar._id+subkey}>
                                <Avatar userID={avatar._id} loginType={avatar.is_login} size="24" type="circle" />
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                    <label>
                      {result.title}
                      <StatusCode code={result.status} />
                    </label>
                    <ul className="task__tool">
                      {result.isdelete && <li className="task__delete" onClick={() => this.props.onDelete(result, i)}><Icon size="xs" name="delete" /></li>}
                      {/*result.file.length > 0 && <li className="task__file"><NavLink to={{ pathname: `/d/${result.id}`,state: { hidden: true }}}><Icon size="xs" name="attach_file" /></NavLink></li>*/}
                      <li className="task__chat">
                        <NavLink to={{
                          pathname: `/d/${result.id}`,
                          state: { hidden: true }
                        }}>
                          <Icon size="xs" name="chat_bubble_outline" />
                        </NavLink>
                      </li>
                      <li className="task__flag" onClick={() => this.props.onFlag(result, i)}>
                        <Icon size="xs" name="star" color="active" />
                      </li>
                    </ul>
                    {result.alert && <span className="task__alert"></span>}
                  </div>
                )
              })
            }
          </div>
        </div>
        {this._renderNoFlag()}
      </div>
    );
  }

  _renderNoFlag() {
    let {myObjectsNoFlag} = this.props;

    let cell =  myObjectsNoFlag.map((result, i) => {
                  return (
                    <div key={result.id} className={!result.merge ? "task__list" : "task__list task__list--custom"}>
                      <div className="task__left">
                        {!result.merge ? <RenderDate date={result.updateAt} /> : <span></span>}
                      </div>
                      <div className={result.isChecked ? "task__right task__right--active": "task__right"}>
                        <Checkbox callback={this.props.onCheckBoxNoFlag} row={i} isChecked={result.isChecked} />
                        <div className="task__avatar">
                          <Avatar userID={result.assignBy._id} loginType={result.assignBy.is_login} size="24" type="circle" />
                          <Icon size="xxs" name="arrow_forward" />
                          <div className="task-list__avatar">
                            {
                              result.assignTo.map((avatar, subkey) => {
                                if (subkey >= 4) {
                                  return null;
                                }

                                if (subkey >= 3) {
                                  return (
                                    <div key={avatar._id+subkey} className="task-list__avatar__break">
                                      <NavLink to={{
                                        pathname: `/d/${result.id}`,
                                        state: { hidden: true }
                                      }}>
                                        <Icon size="xxs" name="add" />
                                      </NavLink>
                                    </div>  
                                  )
                                }

                                return (
                                  <div key={avatar._id+subkey}>
                                    <Avatar userID={avatar._id} loginType={avatar.is_login} size="24" type="circle" />
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                        <label>
                          {result.title}
                          <StatusCode code={result.status} />
                        </label>
                        <ul className="task__tool">
                          {result.isdelete && <li className="task__delete" onClick={() => this.props.onDelete(result, i)}><Icon size="xs" name="delete" /></li>}
                          {/*result.file.length > 0 && <li className="task__file"><NavLink to={{ pathname: `/d/${result.id}`,state: { hidden: true }}}><Icon size="xs" name="attach_file" /></NavLink></li>*/}
                          <li className="task__chat">
                            <NavLink to={{
                              pathname: `/d/${result.id}`,
                              state: { hidden: true }
                            }}>
                              <Icon size="xs" name="chat_bubble_outline" />
                            </NavLink>
                          </li>
                          <li className="task__flag" onClick={() => this.props.onFlag(result, i)}>
                            <Icon size="xs" name="star_border" />
                          </li>
                        </ul>
                        {result.alert && <span className="task__alert"></span>}
                      </div>
                    </div>
                  );
                })

    return cell;
  }
}
