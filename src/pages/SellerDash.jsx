import React from 'react'
import SideNav from '../components/SideNav'
import Metadata from '../components/Metadata'
import SellerHome from '../components/SellerHome'

const SellerDash = () => {
  return (
    <>
      <Metadata title="Seller Dashboard" />
      <div className='flex seller-dash'>
        <SideNav />
        <SellerHome />
      </div>
    </>
  )
}

export default SellerDash