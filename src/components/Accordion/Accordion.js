/* 
 * @flow
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

/* Component */
import Icon from '../Icon';

import './Accordion.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  title: 'Bạn chưa thêm nội dung',
};

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
  	this.props.callback(this.props.name);
  }

  render() {
  	const { title, children, color, active } = this.props;
  	let isActive = active ? ' accordion__bottom--active' : '';
  	let isColor = color !== undefined ? ` accordion--${color}` : '';

    return (
      <div className={"accordion"+isColor}>
      	<div className="accordion__top">
	      	<div className="accordion__left">
	      		{title}
	      	</div>
	      	<div className="accordion__right" onClick={this.handleClick}>
		      	{active
	      			? <Icon name="keyboard_arrow_down" color="white" />
	      			: <Icon name="keyboard_arrow_right" color="white" />
		      	}
	      	</div>
      	</div>
      	<div className={"accordion__bottom"+isActive}>
      		{children}
      	</div>
      </div>
    );
  }
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
