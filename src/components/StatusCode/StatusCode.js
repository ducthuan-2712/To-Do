import React from 'react';
import PropTypes from 'prop-types';

import  './StatusCode.css';

const propTypes = {
  code: PropTypes.number,
}

const defaultProps = {
  code: 0
}

class StatusCode extends React.Component {
  render() {
    const { code } = this.props;

    let row;
    let bg;
    switch(code) {
      case 1:
        row = 'Thực hiện';
        bg = 'process'
        break;
      case 2:
        row = 'Kiểm tra';
        bg = 'check'
        break;
      case 3:
        row = 'Lỗi';
        bg = 'error'
        break;
      case 4:
        row = 'Lỗi';
        bg = 'error'
        break;
      case 5:
        row = 'Hoàn thành';
        bg = 'done'
        break;
      default:
        row = 'Kế hoạch';
        bg = 'main'
    }

    return (
      <span className={`statusCode statusCode--${bg}`}>
        {row}
      </span>
    );
  }
}

StatusCode.propTypes = propTypes;
StatusCode.defaultProps = defaultProps;

export default StatusCode;
