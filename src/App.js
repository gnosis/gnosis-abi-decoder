import HashForm from './components/HashForm'
import Page from './components/layout/Page'
import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import abiDecoder from './abi'
import web3 from './web3'

// const txHash = '0x4b6189fd751c7f134393e2ac6d8c94f3956af335425b2788cbc3518d47a4ba1d';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transaction: undefined,
    }
  }

  decodeTransaction = (txHash) => {
    web3.eth.getTransaction(txHash, (error, txResult) => {
      const decodedInst =  abiDecoder.decodeMethod(txResult.input);
      const decodedFinal = abiDecoder.decodeMethod(decodedInst.params[3].value);
      this.setState({transaction: decodedFinal})
    });
  }

  render() {
    const { transaction } = this.state
    const intro = "To get started, paste a single transaction or set of them separated by ','"

    return (
      <Page
        title="Welcome to Gnosis ABI Decoder"
      >
        <HashForm
          intro={intro}
          handleSubmit={this.decodeTransaction}
        />        
        { transaction && <ReactJson src={transaction} /> }
      </Page>
    );
  }
}

export default App;
