/* 
 * @flow
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';

// Components
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import StatusCode from '../../components/StatusCode';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';

// Blocks
import Chat from '../../blocks/Chat'

import './detailTask.css';

class detailTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
		messages: [],
		isLoadingEarlier: false,
    }

    this.handleTask = this.handleTask.bind(this);
    this.handleOpenAlert = this.handleOpenAlert.bind(this);
	this.onSend = this.onSend.bind(this);
	this.onLoadEarlier = this.onLoadEarlier.bind(this);
  }

  componentDidMount() {
    let {iddetail} = this.props.match.params;
  }

  handleTask() {

  }

  handleOpenAlert() {

  }
  
  onSend() {
	  
  }
  
  onLoadEarlier() {
	  
  }

  render() {

    return (
      <div className="dtask">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Detail Task - {this.props.match.params.iddetail} | react-todos</title>
          <meta name="description" content="react-todos application" />
        </Helmet>
        
        <div className="dtask__group">
		  <div className="dtask__chat">
			<Chat
				messages={this.state.messages}
				onSend={this.onSend}
				loadEarlier={true} // Bật nút "load những tin nhắn cũ hơn"
				onLoadEarlier={this.onLoadEarlier} // callback when nut load tin nhắn cũ hơn được click
				isLoadingEarlier={this.state.isLoadingEarlier} // bool cho phép hiển thị nút load khi tin nhẵn cũ được click
				myUser={{
					_id: 100000298886063,
					is_login: "facebook",
					name: "Thuan Huynh Duc",
				}}
			/>
		  </div>
          <div className="dtask__info">
            <div className="dtask__fgroup dtask__fgroup--border">
              <Checkbox callback={this.handleTask} isChecked={true} />
              <h2>Hoàn thiện bộ nhận dạng thương hiệu công ty Primelabo</h2>
              <StatusCode code={1} />
            </div>
            <div className="dtask__fgroup dtask__fgroup--date">
              <div>
                <Icon size="xs" name="date_range" />
                <span>06/22/2017</span>
              </div>
              <div>
                <Icon size="xs" name="update" />
                <span>07/22/2017</span>
              </div>
            </div>
            <div className="dtask__fgroup dtask__fgroup--user">
              <span><Icon size="xs" name="person" />Người tạo:</span>
              <div className="dtask__user-overlay">
                <div>
                  <Avatar userID="100000298886063" loginType="facebook" size="32" type="circle" />
                  <span>Thuan Huynh Duc</span>
                </div>
              </div>
            </div>
            <div className="dtask__fgroup dtask__fgroup--user">
              <span><Icon size="xs" name="people" />Người thực hiện:</span>
              <div className="dtask__user-overlay">
                <div>
                  <Avatar userID="100000298886063" loginType="facebook" size="32" type="circle" />
                  <span>Thuan Huynh Duc</span>
                </div>
                <div>
                  <Avatar userID="100002879180263" loginType="facebook" size="32" type="circle" />
                  <span>Đỗ Trương Phi Khanh</span>
                </div>
              </div>
            </div>
            <div className="dtask__fgroup dtask__fgroup--description">
              <p>
                Không thể xem được đường dẫn
              </p>
            </div>
            <div className="dtask__fgroup dtask__fgroup--list">
              <span><Icon size="xs" name="attach_file" />Tài liệu đính kèm:</span>
              <ul>
                <li>
                  <span className="dtask__fgroup--image-jpg"></span>
                  <a href="https://image.flaticon.com/teams/slug/freepik.jpg" className="dtask__fgroup--image-jpg">freepik.jpg</a>
                </li>
                <li>
                  <span className="dtask__fgroup--image-doc"></span>
                  <a href="http://sites.materdei.ie/logos/images/stories/section_E/examination%20of%20rublev.doc" className="dtask__fgroup--image-doc">examination%20of%20rublev.doc</a>
                </li>
                <li>
                  <span className="dtask__fgroup--image-pdf"></span>
                  <a href="https://cdn.selinc.com/assets/Literature/Product%20Literature/Data%20Sheets/ICON_DS_20170303.pdf" className="dtask__fgroup--image-pdf">ICON_DS_20170303.pdf</a>
                </li>
              </ul>
            </div>
            <div className="dtask__fgroup dtask__fgroup--button">
              <Button
                callback={this.handleOpenAlert}
                optionStyle={{ backgroundColor: "#FFF", color: "#313131", borderRadius: "30px", border: '1px solid #ddd' }}
              >
                <Icon name="alarm" />
                <span>Cảnh báo công việc</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.rootReducer.user
  };
}

export default withRouter(connect(mapState)(detailTask))
