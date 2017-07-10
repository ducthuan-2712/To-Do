import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';
import avatar from './Avatar.png';

const propTypes = {
  userID: PropTypes.number,
  size: PropTypes.string,
  type: PropTypes.string,
  border: PropTypes.bool,
  loginType: PropTypes.string 
};


class Avatar extends Component {

  render() {
    const { userID, size, type, border, loginType } = this.props;

    let typeClass = type !== undefined ? ` avatar--${type}` : '';
    let getBorder = border ? '1px solid #fff' : '';
    let getShadow = border ? '0px 0px 4px #777' : '';

    const uriFacebook = userID ? `https://graph.facebook.com/${userID}/picture?width=${size}&height=${size}` : avatar;
    const uriGoogle = userID ? `https://plus.google.com/s2/photos/profile/${userID}?sz=${size}` : avatar;
    
    return (
      <div 
        className={'avatar'+typeClass} 
        style={{ 
          width: size+'px', 
          height: size+'px', 
          background: '#eee', 
          border: getBorder, 
          boxShadow: getShadow,
        }}
      >
        {
          loginType === 'facebook'
            ? <img src={uriFacebook} alt="presentation" role="presentation" />
            : <img src={uriGoogle} alt="presentation" role="presentation" />
        }
      </div>
    );
  }
}

Avatar.propTypes = propTypes;

export default Avatar;
