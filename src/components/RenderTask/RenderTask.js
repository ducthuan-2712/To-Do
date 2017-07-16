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

import './RenderTask.css'

export default class RenderTask extends Component {
  render() {
    const {myObjectsFlag, myObjectsNoFlag} = this.props;

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
                    <label>
                      {result.title}
                      <StatusCode code={result.status} />
                    </label>
                    <ul className="task__tool">
                      {result.isdelete && <li className="task__delte" onClick={this.props.onDelete(result, i)}><Icon size="xs" name="delete" /></li>}
                      <li className="task__chat">
                        <NavLink to={`/d/${result.id}`}>
                          <Icon size="xs" name="chat_bubble_outline" />
                        </NavLink>
                      </li>
                      <li className="task__flag" onClick={this.props.onFlag(result, i)}>
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
                  <Checkbox callback={this.props.onCheckBoxNoFlag} row={i} isChecked={result.isChecked} />
                  <label>
                    {result.title}
                    <StatusCode code={result.status} />
                  </label>
                  <ul className="task__tool">
                    {result.isdelete && <li className="task__delte" onClick={this.props.onDelete(result, i)}><Icon size="xs" name="delete" /></li>}
                    <li className="task__chat">
                      <NavLink to={`/d/${result.id}`}>
                        <Icon size="xs" name="chat_bubble_outline" />
                      </NavLink>
                    </li>
                    <li className="task__flag" onClick={this.props.onFlag(result, i)}>
                      <Icon size="xs" name="star_border" />
                    </li>
                  </ul>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
