import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './Icon.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

class Icon extends Component {

  render() {
    const { name, size, color } = this.props;
    let sizeClass = size !== undefined ? ` icon--${size}` : '';
    let colorClass = color !== undefined ? ` icon--${color}` : '';

    return (<i className={"material-icons icon"+sizeClass+colorClass}>{name}</i>)
  }
}

Icon.propTypes = propTypes;

export default Icon;
