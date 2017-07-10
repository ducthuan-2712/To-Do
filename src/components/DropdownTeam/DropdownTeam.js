import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

// Component
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import DropdownHead from '../../components/DropdownHead';
import Icon from '../../components/Icon';


import './DropdownTeam.css';

const propTypes = {

};

const defaultProps = {
  
};

class DropdownTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    const { dataTeam } = this.props;

    return (
      <div className="dropdownTeam">
        <DropdownHead 
          title="Quản lý team"
          callback={this.handleClose}
        />
        <div className="dropdownTeam__box">
          {dataTeam.map((data, i) => {
            return (
              <div key={"dropdownTeam__list"+i} className="dropdownTeam__list">
                <Avatar 
                  userID={data.id_user}
                  loginType={data.is_login}
                  size="56"
                  type="circle" 
                />
                <b className="dropdownTeam__name">{data.name}</b>
              </div>
            )
          })}
        </div>
        <div className="dropdownTeam__more">
          <Button
            type="link"
            to="/setting/invite"
            callback={this.handleClose}
            optionStyle={{ backgroundColor: "#FFF", color: "#313131", borderRadius: "4px", border: '1px solid #ddd' }}
          >
            <Icon size="xs" name="add" />
            <span>Thêm thành viên</span>
          </Button>
        </div>
      </div>
    );
  }
}

DropdownTeam.propTypes = propTypes;
DropdownTeam.defaultProps = defaultProps;

export default DropdownTeam;
