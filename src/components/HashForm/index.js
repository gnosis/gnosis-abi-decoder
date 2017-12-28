import React from 'react';

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
      <form onSubmit={this.onFormSubmit}>
        <p className="App-intro">
          { intro }
        </p>
        <input type="text" value={value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form> 
    )    
  } 
};

export default HashForm;
