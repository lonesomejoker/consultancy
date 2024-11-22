import React from 'react'
import { FaCircleQuestion } from 'react-icons/fa6'
import { TbListDetails } from 'react-icons/tb'
import { Outlet } from 'react-router-dom'
import PageMgmt_Nav from '../reusables/PageMgmt_Nav'
import { GiVerticalBanner } from 'react-icons/gi'
import { CgHello } from 'react-icons/cg'

const HomePageMgmt = () => {
  const subMenu=[
    {
      id:1,
      title:"Landing Banner",
      path:"/admin/home-page",     
      icon:<GiVerticalBanner/>, 
    },
    {
      id:2,
      title:"Welcome Section",
      path:"/admin/home-page/welcome_form",
      icon:<CgHello/>, 
      
    },
    {
      id:3,
      title:"Home FAQ's",
      path:"/admin/home-page/home_faq", 
      icon:<FaCircleQuestion/>,      
    },
    {
      id:4,
      title:"Summary Section",
      path:"/admin/home-page/summary_form", 
      icon:<TbListDetails/>,  
      specificPath:""    
    },
  ]


  return (
    <section>
    <PageMgmt_Nav data={subMenu}/>
    <section className=' bg-white px-6 sm:px-12 pb-7 sm:pb-14 sm:pt-12 pt-6 rounded-sm drop-shadow-lg'>
    <Outlet/>
    </section>
    </section>
  )
}

export default HomePageMgmt
