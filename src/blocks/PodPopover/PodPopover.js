import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropdownAvatar from '../../components/DropdownAvatar';
import DropdownCalendar from '../../components/DropdownCalendar';
import DropdownNotification from '../../components/DropdownNotification';
import DropdownTeam from '../../components/DropdownTeam';

import './PodPopover.css';

import loading from '../../img/loading.gif';

// test data
import graphQL from '../../local_database/graphQL';

const propTypes = {
  row: PropTypes.node.isRequired
};

const defaultProps = {
  row: <span>Lỗi chưa nhập dữ liệu</span>
};

class PodPopover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false,
      name: null,
      posX: null,
      posY: null,
      dataNotification: graphQL['initnotification'],
      dataTeam: graphQL['inituser'],
      isLoading: false
    }

    this.hide = this.hide.bind(this);
  }

  show(name, posX, posY) {
    this.setState({ isShown: true, posX, posY });

    // detect fetch
    switch(name) {
      case 'dropdownAvatar':
      case 'dropdownCalendar':
        this._noFetch(name);
        break;
      case 'dropdownNotification':
        this._fetchNotification(name);
        break;
      case 'dropdownTeam':
        this._fetchTeam(name);
        break;
      default:
    }
  }

  hide() {
    this.setState({ isShown: !this.state.isShown, posX: null, posY: null });
    this.props.onClosePod(this.state.name);
  }

  _noFetch(name) {
    setTimeout(() => {
      this.setState({ isLoading: true, name });
    }, 500)
  }

  _fetchNotification(name) {
    // API

    // done fetch
    this.setState({ isLoading: true, name });
  }

  _fetchTeam(name) {
    // API

    // done fetch
    this.setState({ isLoading: true, name });
  }

  render() {
    const { name, posX, posY, isShown, isLoading } = this.state;

    let row;
    let isCheckWidth = ' popover--xs';
    
    switch(name) {
      case 'dropdownAvatar':
        row = (
          <DropdownAvatar 
            onClose={this.hide} 
          />
        );
        break;
      case 'dropdownNotification':
        row = (
          <DropdownNotification 
            dataNotification={this.state.dataNotification} 
            onClose={this.hide} 
          />
        );
        isCheckWidth = ' popover--md';
        break;
      case 'dropdownTeam':
        row = (
          <DropdownTeam
            dataTeam={this.state.dataTeam} 
            onClose={this.hide} 
          />
        );
        isCheckWidth = ' popover--lg';
        break;
      case 'dropdownCalendar':
        row = (
          <DropdownCalendar
            onClose={this.hide} 
          />
        );
        isCheckWidth = ' popover--calendar';
        break;
      default:
    }

    let shownClass = isShown ? ' popover--shown' : '';
    let isPosX = posX !== null ? posX : '';
    let isPosY = posY !== null ? posY : '';

    return (
      <div className={"popover"+shownClass+isPosX+isPosY+isCheckWidth}>
        {isLoading
          ? <div className="popover__box">{row}</div>
          : <img src={loading} className="popover__loading" alt="presentation" role="presentation" />
        }
      </div>
    );
  }
}

PodPopover.propTypes = propTypes;
PodPopover.defaultProps = defaultProps;

export default PodPopover;
