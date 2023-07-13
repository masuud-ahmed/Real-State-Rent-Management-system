import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

function Navs() {
  return (
    <div className='fixed top-0 right-0 w-[100%] bg-white h-[70px] shadow-lg '>
        <div className="h-[70px] flex items-center text-center justify-around ">
            <div className="flex justify-between items-center rounded-lg bg-[#f6f6f6] px-3 py-2 w-[400px]  ">
                <input 
                type="text"
                placeholder="Search" 
                className='w-full bg-[#f6f6f6] outline-none'
                />
                <FaSearch className='text-[#acacac] mr-2 cursor-pointer '/>
            </div>
            <div className="ml-10 flex items-center justify-center text-xl text-[#FF6746] gap-3">
              <FiLogOut/>
              <span>Logout</span>
            </div>
        </div>
    </div>
  )
}

export default Navs