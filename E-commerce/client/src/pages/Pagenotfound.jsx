import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'


const Pagenotfound = () => {
  return (
    <Layout style={{textDecoration: 'none' }} >
      <div className="pagenotfound-main">
        <div className="found-title">404</div>
        <div className="found-heading">Not Found Go Back or Try Again ....</div>
        <div className='found-button'>
        <Link to='/' className='found-button'>
         Go Back
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Pagenotfound