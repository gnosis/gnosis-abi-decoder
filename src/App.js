import abiDecoder from './abi'
import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import web3 from './web3'
import logo from './logo.svg';
import './App.css';

// const txHash = '0x4b6189fd751c7f134393e2ac6d8c94f3956af335425b2788cbc3518d47a4ba1d';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transaction: undefined,
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    const txHash = this.state.value;
    
    web3.eth.getTransaction(txHash, (error, txResult) => {
      const decodedInst =  abiDecoder.decodeMethod(txResult.input);
      const decodedFinal = abiDecoder.decodeMethod(decodedInst.params[3].value);
      this.setState({transaction: decodedFinal})
    });
    event.preventDefault();
  }

  render() {
    const { transaction, value } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Gnosis ABI Decoder</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <p className="App-intro">
            To get started, paste a single transaction or set of them separated by ','
          </p>
          <input type="text" value={value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        { transaction && <ReactJson src={transaction} /> }
      </div>
    );
  }
}

export default App;
