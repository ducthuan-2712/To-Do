import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import DropdownHead from '../../components/DropdownHead';
import Icon from '../../components/Icon';

import './DropdownAvatar.css';

const propTypes = {

};

const defaultProps = {
  
};

class DropdownAvatar extends Component {
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
      <div className="dropdownAvatar">
        <DropdownHead 
          title="Quản lý cá nhân"
          callback={this.handleClose}
        />
        <div className="dropdownAvatar__box">
          <NavLink to="/setting/update" className="dropdownAvatar__navlink" activeClassName="dropdownAvatar__navlink--selected" onClick={this.handleClose}>
            <Icon size="xs" name="save" />
            <span>Cập nhật thông tin</span>
          </NavLink>
          <div className="divide" />
          <NavLink to="/setting/change-password" className="dropdownAvatar__navlink" activeClassName="dropdownAvatar__navlink--selected" onClick={this.handleClose}>
            <Icon size="xs" name="https"  />
            <span>Thay đổi mật khẩu</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

DropdownAvatar.propTypes = propTypes;
DropdownAvatar.defaultProps = defaultProps;

export default DropdownAvatar;
