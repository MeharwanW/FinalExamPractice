import React from 'react'
import "./companies.css"
import imgs from "./../assets/images/companies.png"
const Companies = () => {
  return (
    <div className='companies d-flex justify-content-center flex-column'>
        <div className='d-flex justify-content-center'>
            <h4 className=''>The world’s most effective content teams use Writer</h4> 
        </div>
        <div className='companies-img'>
            <img src={imgs} alt="" />
        </div>
    </div>
  )
}

export default Companies