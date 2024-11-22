import React from 'react'
import { Outlet } from 'react-router-dom'
import PageMgmt_Nav from '../reusables/PageMgmt_Nav'
import { PiFlagBannerFoldBold, PiScrollFill } from 'react-icons/pi'
import { HiAnnotation } from 'react-icons/hi'
import { FaCircleQuestion, FaMapLocation } from 'react-icons/fa6'
import { FaUniversity } from 'react-icons/fa'
import { IoBookSharp } from 'react-icons/io5'
import { CiGrid41 } from 'react-icons/ci'

const Destination_Page = () => {
  const subMenu=[
    {
      id:1,
      title:"Country Details",
      path:"/admin/destination_page",     
      icon:<FaMapLocation/>, 
    },
    {
      id:2,
      title:"Key Facts",
      path:"/admin/destination_page/key_facts",
      icon:<CiGrid41/>, 
      
    },
    {
      id:3,
      title:"University Details",
      path:"/admin/destination_page/university_form",
      icon:<FaUniversity/>, 
      
    },
    {
      id:4,
      title:"Program Details",
      path:"/admin/destination_page/programs_form",
      icon:<IoBookSharp/>, 
      
    },
    {
      id:5,
      title:"Scholarship Details",
      path:"/admin/destination_page/scholarship_form",
      icon:<PiScrollFill/>, 
      
    },
    {
      id:6,
      title:"FAQ's",
      path:"/admin/destination_page/country_faq",
      icon:<FaCircleQuestion/>, 
      
    },
  ]
  return (
    <>
      <PageMgmt_Nav data={subMenu}/>
      <section className='  bg-white px-6 sm:px-12 pb-7 sm:pb-14 sm:pt-12 pt-6 rounded-sm drop-shadow-lg'>
      <Outlet/>
      </section>
    </>
  )
}

export default Destination_Page
