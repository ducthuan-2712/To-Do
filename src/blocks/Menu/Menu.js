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

import logo from '../../img/logo-small-white.png';
// import logo2x from '../../logo-small-white@2x.png';

const propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      accordionHome: true,
      accordionMe: true,
      // accordionSetting: false,
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
      // case 'accordionSetting':
      //   this.setState({ accordionSetting: !this.state.accordionSetting });
      //   break;
      case 'accordionMe':
        this.setState({ accordionMe: !this.state.accordionMe });
        break;
      default:
    }
  }

  handleCallback(name, posX, posY, toggleClick) {
    if(!toggleClick) {
      this._PopoverNotification.show(name, posX, posY);
      this.setState({ dropdownNotification: true });
    }
  }

  handleClosePod(name) {
    this.setState({ dropdownNotification: false });
  }

  render() {
    const {isOpen} = this.state;
    const {id, type, url_team, admin_url_team, isHidden} = this.props;

    const activeMenu = isOpen ? ' menu--active' : '';

    return (
      <div className={'menu'+activeMenu}>
        <div className="menu__top">
          <div className="menu__left">
            <div className="menu__avatar">
              {
                isHidden
                  ? <NavLink exact to={`/t/${url_team}`} className="logo" activeClassName="logo--selected"> <img src={logo} className="top-menu__logo" alt="presentation" role="presentation" /></NavLink>
                  : <Avatar userID={id} loginType={type} size="40" type="circle" border />
              }
              <a className="menu__logout" onClick={this.logout}>
                <Icon size="xs" name="exit_to_app" color="white" />
              </a>
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
            title="Team"
            callback={this.handleCallbackAccordion}
          >
            <NavLink exact to={`/t/${url_team}`} className="menu__navlink" activeClassName="menu__navlink--selected">
              <Icon size="xs" name="playlist_add_check" color="white" />
              <span>Công việc</span>
            </NavLink>
            {
              admin_url_team
                ? <NavLink to={`/t/${url_team}&-alert`} className="menu__navlink" activeClassName="menu__navlink--selected">
                    <Icon size="xs" name="assignment_late" color="white" />
                    <span>Trễ hạn</span>
                  </NavLink>
                : null
            }
            {
              admin_url_team
                ? <NavLink to={`/t/${url_team}&-done`} className="menu__navlink" activeClassName="menu__navlink--selected">
                    <Icon size="xs" name="assignment_turned_in" color="white" />
                    <span>Cần review</span>
                  </NavLink>
                : null
            }
          </Accordion>

          <Accordion 
            active={this.state.accordionMe}
            name="accordionMe"
            color="white"
            title="Cá nhân"
            callback={this.handleCallbackAccordion}
          >
            <NavLink to={`/m/${url_team}`} className="menu__navlink" activeClassName="menu__navlink--selected">
              <Icon size="xs" name="assignment" color="white" />
              <span>Công việc của tôi</span>
            </NavLink>
            <NavLink to={`/m/${url_team}&-done`} className="menu__navlink" activeClassName="menu__navlink--selected">
              <Icon size="xs" name="assignment_turned_in" color="white" />
              <span>Hoàn thành</span>
            </NavLink>
          </Accordion>

          {/*<Accordion 
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
              </Accordion>*/}
        </div>
      </div>
    );
  }
}

Menu.propTypes = propTypes;

export default Menu;
