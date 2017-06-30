import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';
import avatar from './Avatar.png';

const propTypes = {
  size: PropTypes.string,
  type: PropTypes.string 
};


class Avatar extends Component {

  render() {
    const { userID, size, type, border } = this.props;

    const uri = userID ? `https://graph.facebook.com/${userID}/picture?width=${size}&height=${size}` : avatar;

    let typeClass = type !== undefined ? ` avatar--${type}` : '';
    let getBorder = border ? '1px solid #fff' : '';
    let getShadow = border ? '0px 0px 4px #777' : '';
    
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
        <img src={uri} alt="presentation" role="presentation" />
      </div>
    );
  }
}

Avatar.propTypes = propTypes;

export default Avatar;
