import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './stylePiginate.css'

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <div className='pagination'>
        <Pagination  className='pagination_main'  >
          {[...Array(pages).keys()].map((x) => (
            <Link
            style={{color:'white'}}
              className='pagination_Link' 
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/influencer/search/${keyword}/page/${x + 1}`
                    : `/influencer/page/${x + 1}`
                  : `/influencer/admin/productlist/${x + 1}`
              }
            >
              <Pagination.Item style={{color:'white'}}  >{x + 1}</Pagination.Item>
            </Link>
          ))}
        </Pagination>
      </div>
    )
  )
}

export default Paginate