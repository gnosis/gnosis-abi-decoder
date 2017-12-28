import classNames from 'classnames/bind';
import React from 'react';
import * as css from './index.css';

const cx = classNames.bind(css)
const TX_HASH_SEPARATOR = /, */gi;

class HashForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  onFormSubmit = (event) => {
    const txHashes = this.state.value;

    if (!txHashes) {
      event.preventDefault();
      return  
    }

    const transactions = txHashes.split(TX_HASH_SEPARATOR)
    this.props.handleSubmit(...transactions)

    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
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
      </form> 
    )    
  } 
};

export default HashForm;
