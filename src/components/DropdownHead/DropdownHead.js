import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon';

import './DropdownHead.css';

const propTypes = {
  title: PropTypes.string
};

const defaultProps = {
  title: 'Lỗi chưa nhập dữ liệu'
};

class DropdownHead extends Component {
  handleClose(){
    this.props.callback();
  }

  render() {
    const { title } = this.props;

    return (
      <div className="dropdownHead">
        <h4>{title}</h4>
        <div className="dropdownHead__close" onClick={this.handleClose.bind(this)}>
          <Icon size="xs" name="close" />
        </div>
      </div>
    );
  }
}

DropdownHead.propTypes = propTypes;
DropdownHead.defaultProps = defaultProps;

export default DropdownHead;
