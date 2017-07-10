import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../../../components/Avatar';

const propTypes = {

};

class Invite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }

    this.updateValue = this.updateValue.bind(this);
    this.onPressEnter = this.onPressEnter.bind(this);
  }

  updateValue(e) {
  	this.setState({ value: e.target.value })
  }

  onPressEnter(e) {
    if (e.keyCode === 13 && this.state.value) {
      
    }
  }

  render() {
    const {team} = this.props;

    return (
      <div className="setting__group">
      	<div className="setting-invite__input">
	        <input 
	          type='text' 
	          placeholder='Nhập tên email người bạn mời'
	          value={this.state.value || ''} 
	          onChange={this.updateValue} 
	          onKeyDown={this.onPressEnter} 
	        />
      	</div>
      	<div className="setting-invite__group">
	        {team.map((data, i) => {
	          return (
	            <div key={"setting-invite__list"+i} className="setting-invite__list">
	              <Avatar 
	                userID={data.id_user}
	                loginType={data.is_login}
	                size="56"
	                type="circle" 
	              />
	              <b className="setting-invite__name">{data.name}</b>
	            </div>
	          )
        	})}
         </div>
      </div>
    );
  }
}

Invite.propTypes = propTypes;

export default Invite;
