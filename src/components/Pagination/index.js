import classNames from 'classnames/bind';
import React from 'react'
import ReactPaginate from 'react-paginate';
import * as css from './index.css';

const cx = classNames.bind(css)

const Pagination = ({pagesNumber, onPageChange}) => (
  <div className={cx('pagination')}>
    <ReactPaginate
      pageCount={ pagesNumber }
      pageRangeDisplayed={ pagesNumber }
      marginPagesDisplayed={ 0 }
      onPageChange={onPageChange}
    />
  </div>
)

export default Pagination
