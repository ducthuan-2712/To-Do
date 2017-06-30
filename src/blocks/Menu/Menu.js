/* 
 * @flow
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/* Component */
import Accordion from '../../components/Accordion';
import Avatar from '../../components/Avatar';
import Dropdown from '../../components/Dropdown';
import Icon from '../../components/Icon';

/* Block */
import PodPopover from '../PodPopover';

import './Menu.css';

const propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      accordionHome: true,
      accordionSetting: false,
      dropdownAvatar: false,
      dropdownNotification: false,
    }

    this.handleMenu = this.handleMenu.bind(this);
    this.logout = this.logout.bind(this);
    this.handleCallbackAccordion = this.handleCallbackAccordion.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
    this.handleClosePod = this.handleClosePod.bind(this);
  }

  handleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logout() {
    this.props.onLogout();
  }

  handleCallbackAccordion(name) {
    switch(name) {
      case 'accordionHome':
        this.setState({ accordionHome: !this.state.accordionHome });
        break;
      case 'accordionSetting':
        this.setState({ accordionSetting: !this.state.accordionSetting });
        break;
      default:
    }
  }

  handleCallback(name, posX, posY, toggleClick) {
    if(!toggleClick) {
      switch(name) {
        case 'dropdownAvatar':
          this._PopoverAvatar.show(name, posX, posY);
          this.setState({ dropdownAvatar: true });
          break;
        case 'dropdownNotification':
          this._PopoverNotification.show(name, posX, posY);
          this.setState({ dropdownNotification: true });
          break;
        default:
      }
    }
  }

  handleClosePod(name) {
    switch(name) {
      case 'dropdownAvatar':
        this.setState({ dropdownAvatar: false });
        break;
      case 'dropdownNotification':
        this.setState({ dropdownNotification: false });
        break;
      default:
    }
  }

  render() {
    const { isOpen } = this.state;
    const activeMenu = isOpen ? ' menu--active' : '';

    return (
      <div className={'menu'+activeMenu}>
        <div className="menu__top">
          <div className="menu__left">
            <div className="menu__avatar">
              <Dropdown 
                active={this.state.dropdownAvatar}
                name="dropdownAvatar"
                callback={this.handleCallback}
              >
                <Avatar 
                  border
                  userID="100000298886063"
                  size="40"
                  type="circle" 
                />
                <Icon name="arrow_drop_down" color="white" />
                <PodPopover 
                  ref={(child) => { this._PopoverAvatar = child; }}
                  onClosePod={this.handleClosePod}
                />
              </Dropdown>
            </div>
            <div className="menu__notification">
              <Dropdown 
                active={this.state.dropdownNotification}
                name="dropdownNotification"
                callback={this.handleCallback}
              >
                <Icon size="xs" name="notifications" color="white" />
                <PodPopover 
                  ref={(child) => { this._PopoverNotification = child; }}
                  onClosePod={this.handleClosePod}
                />
              </Dropdown>
            </div>
            <div className="menu__logout" onClick={this.logout}>
              <Icon size="xs" name="exit_to_app" color="white" />
            </div>
          </div>
          <div className="menu__right" onClick={this.handleMenu}>
            {isOpen
              ? <Icon size="lg" name="menu" color="white" />
              : <Icon size="lg" name="keyboard_arrow_right" color="white" />
            }
          </div>
        </div>
        <div className="menu__bottom">
          <Accordion 
            active={this.state.accordionHome}
            name="accordionHome"
            color="white"
            title="Trang chủ"
            callback={this.handleCallbackAccordion}
          >
            <NavLink to="/m-task" className="menu__navlink" activeClassName="menu__navlink--selected">
              <Icon size="xs" name="playlist_add_check" color="white" />
              <span>Công việc của tôi</span>
            </NavLink>
            <NavLink to="/t-task" className="menu__navlink" activeClassName="menu__navlink--selected">
              <Icon size="xs" name="assignment" color="white" />
              <span>Hôm nay có gì</span>
            </NavLink>
            <NavLink to="/a-task" className="menu__navlink" activeClassName="menu__navlink--selected">
              <Icon size="xs" name="assignment_late" color="white" />
              <span>Trễ hạn</span>
            </NavLink>
            <NavLink to="/d-task" className="menu__navlink" activeClassName="menu__navlink--selected">
              <Icon size="xs" name="assignment_turned_in" color="white" />
              <span>Hoàn thành</span>
            </NavLink>
          </Accordion>

          <Accordion 
            active={this.state.accordionSetting}
            name="accordionSetting"
            color="white"
            title="Cấu hình"
            callback={this.handleCallbackAccordion}
          > 
            <NavLink to="/setting/general" className="menu__navlink" activeClassName="menu__navlink--selected">
              <Icon size="xs" name="settings" color="white" />
              <span>Cơ bản</span>
            </NavLink>
          </Accordion>
        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;

export default Menu;
