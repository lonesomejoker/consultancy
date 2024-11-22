import React from 'react'
import { HiAnnotation } from 'react-icons/hi'
import { PiFlagBannerFoldBold, PiMicrosoftTeamsLogo } from 'react-icons/pi'
import { Outlet, useNavigate } from 'react-router-dom'
import PageMgmt_Nav from '../reusables/PageMgmt_Nav'
import { TbArrowRoundaboutLeft } from 'react-icons/tb'
import { RiFlag2Fill } from 'react-icons/ri'
import { LuShieldQuestion } from 'react-icons/lu'
import { FaInfoCircle } from 'react-icons/fa'

const AboutPage = () => {
  const subMenu=[
    {
      id:1,
      title:"Introduction",
      path:"/admin/about-page",     
      icon:<FaInfoCircle/>, 
    },
    {
      id:2,
      title:"Our Goals Section",
      path:"/admin/about-page/our_goal",     
      icon:<RiFlag2Fill/>, 
    },
    {
      id:3,
      title:"Why Choose Us",
      path:"/admin/about-page/choose_us",     
      icon:<LuShieldQuestion/>, 
    },
    {
      id:4,
      title:"Team Members",
      path:"/admin/about-page/team_form",     
      icon:<PiMicrosoftTeamsLogo/>, 
    },
    {
      id:5,
      title:"Testimonial",
      path:"/admin/about-page/testimonial_form",
      icon:<HiAnnotation/>, 
      
    },
  ]
  return (
    <section>
      <PageMgmt_Nav data={subMenu}/>
      <div className='  bg-white px-6 sm:px-12 pb-7 sm:pb-14 sm:pt-12 pt-6 rounded-sm drop-shadow-lg'>
      <Outlet/>
      </div>
    </section>
  )
}

export default AboutPage
