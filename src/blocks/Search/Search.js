import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Icon from '../../components/Icon';

import './Search.css';

const propTypes = {
  size: PropTypes.string,
  type: PropTypes.string 
};


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueTask: '',
      file: {},
      imageBase64: '',
    }

    this.updateNewTask = this.updateNewTask.bind(this)
    this.onPressEnter = this.onPressEnter.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
    this.getMB = this.getMB.bind(this)
  }

  updateNewTask(event) {
    this.setState({ valueTask: event.target.value })
  }

  onPressEnter(event) {
    if (event.keyCode === 13 && this.state.valueTask) {
      this.handleClick()
    }
  }

  handleClick() {
    const { valueTask, file, imageBase64 } = this.state

    if (this.props.callback) {
      this.props.callback(JSON.stringify(valueTask), file, imageBase64)
      this.setState({
        valueTask: '',
        file: {},
        imageBase64: ''
      })
    }
  }

  // Component method
  handleFileUpload(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if (file.size > 26214400) {
      alert('Xin lỗi! Giới hạn tối đa file upload không quá 25MB')
    } else {
      reader.onloadend = () => {
        this.setState({
          file: file,
          imageBase64: reader.result
        });
      }
      reader.readAsDataURL(file)
    }

  }

  render() {
    const { valueTask, file } = this.state;
    const { noAttached, placeholder } = this.props;

    return (
      <div className="search">
        {!noAttached &&
          <div className="search__file">
            {
              Object.keys(file).length === 0 && file.constructor === Object
                ? null
                : <span className="search__preview">{file.name} - <b>{this.getMB(file.size)}</b></span>
            }
            <input 
              type="file" 
              accept="image/*"
              defaultValue={this.state.file}
              onChange={this.handleFileUpload} 
            />
            <Icon size="xs" name="attach_file" />
          </div>
        }
        <input 
          type='text' 
          className="search__input"
          placeholder={placeholder ? placeholder : 'Tiêu đề công việc ?'}
          value={this.state.valueTask || ''} 
          onChange={this.updateNewTask} 
          onKeyDown={this.onPressEnter} 
        />
        {
          valueTask
            ? <div className="search__button search__button--active" onClick={this.handleClick}><Icon size="xs" name="check" color="white" /></div>
            : <div className="search__button"><Icon size="xs" name="check" color="white" /></div>
        }
      </div>
    );
  }

  getMB(size) {
    var calculator = size/1024
    if(calculator < 1024) {
      return Math.round(calculator) + ' KB'
    } else {
      return Math.round(calculator/1024) + ' MB'
    }
  }
}

Search.propTypes = propTypes;

export default Search;
