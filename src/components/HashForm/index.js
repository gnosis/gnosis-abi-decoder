import classNames from 'classnames/bind';
import React from 'react';
import * as css from './index.css';

const cx = classNames.bind(css)

class HashForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  onFormSubmit = (event) => {
    const txHash = this.state.value;
    this.props.handleSubmit(txHash)
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
