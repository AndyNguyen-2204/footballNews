import React from 'react'
import Logo from "../../assets/images/logo.png"
import Avatar from "../../assets/images/avatar.jpg"
import { CiSearch } from "react-icons/ci";
export default function Header() {
  return (
    <div className='flex items-center bg-white rounded-t-3xl border-b-2 border-inputbg'>
      <div className='w-2/12 flex justify-center h-full'>
        <img className='h-10' src={Logo} />
      </div>
      <div className="px-5 flex gap-2 box-border py-2 text-center w-8/12 border-x-2 border-inputbg">
        <div className='relative w-8/12'>
          <span className='absolute text-4xl top-2 left-2 text-888888'><CiSearch /></span>
          <input className="bg-inputbg p-2 pl-14 rounded w-full h-full outline-0" placeholder="Search anything...." />
        </div>
        <div className="p-3 rounded border border-solid border-inputbg border-2">
          <p className="text-gray">1 BTC = <span className="text-primary">$28,200,23</span></p>
        </div>
      </div>
      <div class="w-2/12 px-5">
        <div class="flex items-center gap-2">
          <img src={Avatar} alt="Your Logo" class="h-10 rounded-full" />
          <span>Andy Nguyen</span>
        </div>
      </div>
    </div>
  )
}
