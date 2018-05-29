import Web3 from 'web3'

const initWeb3 = () => {
  const web3 = new Web3(window.web3.currentProvider)

  return web3 
}

const ensureOnce = (fn) => {
  let executed = false
  let response

  return (...args) => {
    if (executed) { return response }

    executed = true
    response = fn.apply(undefined, args)

    return response
  }
}

const web3 = ensureOnce(initWeb3) 

export default web3
