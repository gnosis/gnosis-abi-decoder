import React from 'react';
import logo from './logo.svg';

const Page = ({title, children}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{title}</h1>
    </header>
    { children }
  </div>
)

export default Page
