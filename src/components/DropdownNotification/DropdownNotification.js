import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Component
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import DropdownHead from '../../components/DropdownHead';
import Icon from '../../components/Icon';


import './DropdownNotification.css';

const propTypes = {

};

const defaultProps = {
  
};

class DropdownNotification extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleClose = this.handleClose.bind(this);
    this.replace = this.replace.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    const { dataNotification } = this.props;

    return (
      <div className="dropdownNotification">
        <DropdownHead 
          title="Quản lý thông báo"
          callback={this.handleClose}
        />
        <div className="dropdownNotification__box">
          {dataNotification.map((data, i) => {
            return (
              <div key={"dropdownNotification__list"+i} className="dropdownNotification__list">
                <div className="dropdownNotification__left">
                  <Avatar 
                    userID={data.user._id}
                    size="32"
                    type="circle" 
                  />
                </div>
                <div className="dropdownNotification__right">
                  <NavLink to={data.link} className="dropdownNotification__navlink" activeClassName="dropdownNotification__navlink--selected" onClick={this.handleClose}>
                    <b className="dropdownNotification__userName">{data.userName}</b> <span dangerouslySetInnerHTML={{ __html: this.replace(data.content) }} />.
                    <p className="dropdownNotification__time">{data.time}</p>
                  </NavLink>
                </div>
              </div>
            )
          })}
        </div>
        <div className="dropdownNotification__more">
          <Button
            type="link"
            to="/notification/all"
            callback={this.handleClose}
            optionStyle={{ backgroundColor: "#655bde", color: "#fff", borderRadius: "4px" }}
          >
            <Icon size="xs" name="view_list" />
            <span>Xem tất cả</span>
          </Button>
        </div>
      </div>
    );
  }

  replace(string) {
    var str = string;
    var res = str.replace("/&", "<b>").replace("/*", "</b>");
    return res;
  }
}

DropdownNotification.propTypes = propTypes;
DropdownNotification.defaultProps = defaultProps;

export default DropdownNotification;
