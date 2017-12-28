import { Map, List } from 'immutable'
import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import abiDecoder from './abi'
import HashForm from './components/HashForm'
import Page from './components/layout/Page'
import web3 from './web3'

// const txHash = '0x4b6189fd751c7f134393e2ac6d8c94f3956af335425b2788cbc3518d47a4ba1d';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: Map({
        txCounter: 0,
        txs: List(),
      }),
      txPosition: 0,
    }
  }

  updateStateWith = (index, obj) => {
    this.setState(({data}) => ({ data: data
      .update('txCounter', v => v + 1)
      .update('txs', list => list.insert(index, obj)),
    }));
  }

  decodeTransaction = (...txHash) => {
    
    this.setState(({data}) => ({
      data: data.update('txCounter', v => 0)
    }));

    txHash.map((tx, index) => {
      return web3.eth.getTransaction(tx, (error, txResult) => {

        if (!txResult) {
          const txError = { 'error': `Transaction ${tx} could not be found`}
          return this.updateStateWith(index, txError)
        }

        const decodedInst =  abiDecoder.decodeMethod(txResult.input);
        const decodedFinal = abiDecoder.decodeMethod(decodedInst.params[3].value);
        return this.updateStateWith(index, decodedFinal)        
      })
    });
  }

  render() {
    const { data, txPosition } = this.state
    const transaction = data.get('txs').get(txPosition)

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
