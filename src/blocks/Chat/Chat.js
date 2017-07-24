/* 
 * @flow
 */

import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// Blocks
import Search from '../Search';

import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
	
	this.onCreateComment = this.onCreateComment.bind(this;
  }

  componentDidMount() {
    // init scroll and scroll to bottom
    this._scrolltoBottom();
  }

  _scrolltoBottom() {
    const { scrollbars } = this.refs;
    scrollbars.scrollToBottom();
  }
  
  onCreateComment(value, file, imageBase64) {
	this.props.onSend(value, file, imageBase64);
  }

  render() {

    return (
		<div className="chat">
			<div className="chat__list">
			  <Scrollbars 
				ref="scrollbars"
			  >
			  </Scrollbars>
			</div>
			<div className="chat__input">
				<Search 
					showTextarea
					placeholder="Trao đổi công việc" 
					callback={this.onCreateComment} 
				/>
			</div>
		</div>
    );
  }
}

export default Chat;
