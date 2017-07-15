import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import  './Button.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

class Button extends React.Component {
  handleClick() {
    if(!this.props.callback) {
      return null
    }
    this.props.callback();
  }

  render() {
    const { children, type, to, optionStyle } = this.props;

    if (type === 'link') {
      return (
        <NavLink className={'button'} to={to} style={optionStyle} onClick={this.handleClick.bind(this)}>
          {children}
        </NavLink>
      );      
    } else {
      return (
        <div className={'button'} style={optionStyle} onClick={this.handleClick.bind(this)}>
          {children}
        </div>
      )
    }
  }
}

Button.propTypes = propTypes;

export default Button;
