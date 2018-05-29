import classNames from 'classnames/bind';
import React from 'react';
import * as css from './index.css';

const cx = classNames.bind(css)
const TX_HASH_SEPARATOR = /, */gi;

const uportStyle = {
  padding: '10px 0px',
}

const labelUport = {
  marginLeft: '5px',
}

class HashForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      uport: false,
    }
  }

  onFormSubmit = (event) => {
    const txHashes = this.state.value;

    if (!txHashes) {
      event.preventDefault();
      return  
    }

    const transactions = txHashes.split(TX_HASH_SEPARATOR)
    this.props.handleSubmit(this.state.uport, ...transactions)

    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  onUport = () => {
    this.setState((prevState) => ({ uport: !prevState.uport}))
  }

  render() {
    const { value } = this.state;
    const { intro } = this.props;

    return (
      <form className={cx('form')} onSubmit={this.onFormSubmit}>
        <p>
          { intro }
        </p>
        <input className={cx('text')} type="text" value={value} onChange={this.handleChange} />
        <button className={cx('submit')} type="submit">DECODE</button>
        <div style={uportStyle}>
          <input type="checkbox" id="uportDecode" name="uport" onChange={this.onUport} />
          <label style={labelUport}>Check if is an uport TXs?</label>
        </div>
      </form> 
    )    
  } 
};

export default HashForm;
