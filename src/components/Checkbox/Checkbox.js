import React from 'react';
import PropTypes from 'prop-types';

import  './Checkbox.css';
import Icon from '../Icon';

const propTypes = {
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  isChecked: false,
  isDisabled: false,
}

class Checkbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isChecked: this.props.isChecked
    }
  }
  onClick(){
    let isChecked = !this.state.isChecked;
    this.setState({ isChecked: isChecked });
    if(this.props.callback !== undefined){
      this.props.callback(isChecked, this.props.row);
    }
  }

  render() {
    const { isChecked, isDisabled } = this.props;

    let disableClass = isDisabled ? 'checkbox--disabled '  : '';

    return (
      <span className={disableClass+'checkbox'} onClick={this.onClick.bind(this)}>
        { 
          isChecked ? <Icon name="check_box" size="xs" color="active" />  : <Icon name="check_box_outline_blank" size="xs" color="silver" />
        }
      </span>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
