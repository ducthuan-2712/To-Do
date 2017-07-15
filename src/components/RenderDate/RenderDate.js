/* 
 * @flow
 */

import React, { Component } from 'react';
import moment from 'moment';

export default class RenderDate extends Component {
  render() {
    const {date} = this.props;
      let format = moment(date).format('DD/MM');
      let getdate = new Date(date).getDay();

      let day;
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

    return day
  }
}
