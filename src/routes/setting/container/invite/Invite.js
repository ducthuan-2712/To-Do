import React, {Component} from 'react';

import Avatar from '../../../../components/Avatar';
import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';

// Blocks
import Search from '../../../../blocks/Search';

class Invite extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.onInviteUser = this.onInviteUser.bind(this);
  }

  onInviteUser(valueTast, file, imageBase64) {

  }

  handleRemoveUser(data) {
  	console.log(data)
  }

  render() {
    const {team} = this.props;

    return (
      <div className="setting__group">
      	<Search 
      		placeholder="Bạn muốn mời ai ..." 
      		callback={this.onInviteUser}
      		noAttached
      	/>
      	<div className="setting-invite__group">
	        {team.map((data, i) => {
	          return (
	            <div key={"setting-invite__list"+i} className={data.admin_url_team ? 'setting-invite__list setting-invite__list--admin' : 'setting-invite__list'}>
	              <Avatar 
	                userID={data.id_user}
	                loginType={data.is_login}
	                size="56"
	                type="circle" 
	              />
	              {data.admin_url_team && <span className="setting-invite__admin"><Icon name="star" /></span>}
	              <b className="setting-invite__name">{data.name}</b>
	              <span className="setting-invite__email">{data.email}</span>
		      	  <div className="setting-invite__button">
			          {!data.admin_url_team && <Button
									          	callback={() => this.handleRemoveUser(data)}
									            optionStyle={{ 
									            	backgroundColor: "#FFF", 
									            	color: "#313131", 
									            	borderRadius: "4px", 
									            	border: '1px solid #ddd' 
									           	}}
									          >
									            <Icon size="xs" name="close" />
									            <span>Xóa thành viên</span>
									          </Button>
						}
		      	  </div>
	            </div>
	          )
        	})}
         </div>
      </div>
    );
  }
}

export default Invite;
