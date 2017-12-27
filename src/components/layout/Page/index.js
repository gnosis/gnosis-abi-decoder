import classNames from 'classnames/bind'
import React from 'react';
import logo from './logo.svg';
import * as css from './index.css'

const cx = classNames.bind(css)

const Page = ({title, children}) => (
  <div>
    <header className={cx('header')}>
      <img src={logo} className={cx('logo')} alt="logo" />
      <h1 className={cx('title')}>{title}</h1>
    </header>
    <div className={cx('page')}>
      { children }
    </div>
  </div>
)

export default Page
