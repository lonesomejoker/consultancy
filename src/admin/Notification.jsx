import React from 'react'
import { BsBack } from 'react-icons/bs';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'

const Notification = () => {
  const navigate=useNavigate();
  return (
    <div>
    <h5 className=' text-center mb-0 md:mb-6'>Notifications</h5>
      <IoIosArrowRoundBack onClick={()=>navigate(-1)} className=' text-indigo-400 text-[2.5rem]'/>
    </div>
  )
}

export default Notification
