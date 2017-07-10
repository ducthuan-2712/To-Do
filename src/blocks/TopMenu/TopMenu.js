/* 
 * @flow
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* Component */
import Dropdown from '../../components/Dropdown';
import Icon from '../../components/Icon';

/* Block */
import PodPopover from '../PodPopover';

import './TopMenu.css';

import logo from '../../img/logo.png';
// import logo2x from '../../logo@2x.png';

class TopMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	dropdownTeam: false,
    	dropdownCalendar: false
    }

    this.handleCallback = this.handleCallback.bind(this);
    this.handleClosePod = this.handleClosePod.bind(this);
  }

  handleCallback(name, posX, posY, toggleClick) {
    if(!toggleClick) {
      switch(name) {
        case 'dropdownTeam':
          this._PopoverTeam.show(name, posX, posY);
          this.setState({ dropdownTeam: true });
          break;
        case 'dropdownCalendar':
          this._PopoverCalendar.show(name, posX, posY);
          this.setState({ dropdownCalendar: true });
          break;
        default:
      }
    }
  }

  handleClosePod(name) {
    switch(name) {
      case 'dropdownTeam':
        this.setState({ dropdownTeam: false });
        break;
      case 'dropdownCalendar':
        this.setState({ dropdownCalendar: false });
        break;
      default:
    }
  }

  render() {
    let checkTeam = this.state.dropdownTeam ? ' top-menu--active': '';
    let checkCalendar = this.state.dropdownCalendar ? ' top-menu--active': '';

    const {location, url_team} = this.props;
    let row;
    if(
      location.pathname === `/t/${url_team}` || 
      location.pathname === `/t/${url_team}&-alert` ||
      location.pathname === `/t/${url_team}&-done` ||
      location.pathname === `/m/${url_team}` || 
      location.pathname === `/m/${url_team}&-done` 
    ) {
      row = (
        <div className={'top-menu__calendar'+checkCalendar}>
          <Dropdown 
            active={this.state.dropdownCalendar}
            name="dropdownCalendar"
            callback={this.handleCallback}
          >
            <Icon size="md" name="date_range" />
            <PodPopover 
              ref={(child) => { this._PopoverCalendar = child; }}
              onClosePod={this.handleClosePod}
            />
          </Dropdown>
        </div>
      )
    }

    return (
      <div className="top-menu">
      	<div className="top-menu__center">
	      	<NavLink exact to={`/t/${url_team}`} className="logo" activeClassName="logo--selected" >
	      		<img src={logo} className="top-menu__logo" alt="presentation" role="presentation" />
	      	</NavLink>
      	</div>
      	<div className="top-menu__right">
					<div className={'top-menu__user'+checkTeam}>
            <Dropdown 
              active={this.state.dropdownTeam}
              name="dropdownTeam"
              callback={this.handleCallback}
            >
              <Icon size="md" name="supervisor_account" />
              <PodPopover 
                ref={(child) => { this._PopoverTeam = child; }}
                onClosePod={this.handleClosePod}
              />
            </Dropdown>
					</div>
          {row}
      	</div>
      </div>
    );
  }
}

export default TopMenu;
