import React from 'react'
import { PiFlagBannerFoldBold } from 'react-icons/pi'
import { Outlet } from 'react-router-dom'
import PageMgmt_Nav from '../reusables/PageMgmt_Nav'
import { FaHandHoldingMedical } from 'react-icons/fa'
import { LiaPlaneDepartureSolid } from 'react-icons/lia'
import { GiAchievement } from 'react-icons/gi'

const StudyAbroadPage = () => {
    const subMenu=[
        {
          id:1,
          title:"Why Choose Us",
          path:"/admin/abroad_page",     
          icon:<FaHandHoldingMedical/>, 
        },   
        {
          id:2,
          title:"Why Study Abroad",
          path:"/admin/abroad_page/whyabroad_form",     
          icon:<LiaPlaneDepartureSolid/>, 
        },   
        {
          id:3,
          title:"Success Stories",
          path:"/admin/abroad_page/success_form",     
          icon:<GiAchievement/>, 
        },   
      ]
  return (
    <div>
        <PageMgmt_Nav data={subMenu}/>
     <div className='  bg-white px-6 sm:px-12 pb-7 sm:pb-14 sm:pt-12 pt-6 rounded-sm drop-shadow-lg'>
      <Outlet/>
      </div>
    </div>
  )
}

export default StudyAbroadPage
