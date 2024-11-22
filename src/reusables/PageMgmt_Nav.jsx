import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const PageMgmt_Nav = ({data}) => {
    const navigate=useNavigate();
    const location=useLocation();
  return (
    <section className=' flex items-center gap-5 md:gap-9 border-b-2 border-gray-200 '>
    {
      data.map((item)=>{
        const isActive=location.pathname===item.path
        return(
          <div className={` ${isActive?"border-b-[3px] border-indigo-400 ":" "}  flex items-center px-1.5 gap-2 py-2 md:py-4`} onClick={()=>navigate(item.path)} key={item.id}>
           <h6  className={`${isActive?"text-indigo-400":""} text-[1.5rem] duration-300`}>{item.icon}</h6>
            <p className={`hidden md:block caption ${isActive?"text-indigo-400 ":""} duration-300`}>{item.title}</p>
            <p className={`md:hidden hidden caption ${isActive?"text-indigo-400 ":""} duration-300`}>{item.title}</p>
          </div>
        )
      })
    }

    </section>
  )
}

export default PageMgmt_Nav
