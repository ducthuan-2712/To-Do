import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Dropdown.css';

const propTypes = {
  children: PropTypes.node.isRequired
};

const defaultProps = {
  children: <span>Lỗi chưa nhập dữ liệu</span>,
};

class Dropdown extends Component {
  toggle(e){
    let pageW = window.innerWidth;
    let pageH = window.innerHeight;
    let posX = e.screenX < (pageW / 2) ? ' left' : ' right';
    let posY = e.screenY < (pageH / 2) ? ' top' : ' bottom';

    this.props.callback(this.props.name, posX, posY, this.props.active);
  }

  render() {
    const { children } = this.props;

    return (
      <div className={"dropdown"}>
        <div className={"dropdown__box"} onClick={this.toggle.bind(this)}>
          {children}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
