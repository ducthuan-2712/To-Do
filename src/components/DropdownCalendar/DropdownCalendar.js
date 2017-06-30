import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import { 
  DateRangePicker
} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

import DropdownHead from '../../components/DropdownHead';

import './DropdownCalendar.css';

const propTypes = {

};

const defaultProps = {
  
};

class DropdownCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <div className="DropdownCalendar">
        <DropdownHead 
          title="Quản lý công việc"
          callback={this.handleClose}
        />
        <div className="DropdownCalendar__box">
          <DateRangePicker
            startDate={this.state.startDate}
            startDatePlaceholderText="Từ ngày"
            endDate={this.state.endDate}
            endDatePlaceholderText="Đến ngày"
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            anchorDirection="right" 
            showClearDates
          />
        </div>
      </div>
    );
  }
}

DropdownCalendar.propTypes = propTypes;
DropdownCalendar.defaultProps = defaultProps;

export default DropdownCalendar;
