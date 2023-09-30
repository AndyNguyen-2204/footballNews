import React, { useState } from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Dashboard from '../dashboard/Dashboard'
import Club from '../club/Club'

export default function Layout() {
  const [tabChoosen,setTabChoosen]=useState("dashboard")
  return (
    <div className='bg-bgglobal w-full h-auto'>
      <div className='x-sc-1600:max-w-screen-2xl max-w-[1240px] m-auto py-8 px-4'>
      <Header/>
      <div className='w-full bg-bgcontent rounded-b-3xl x-sc-900:flex'>
      <Sidebar tabChoosen={tabChoosen} setTabChoosen={setTabChoosen}/>
      {tabChoosen === "dashboard" ? <Dashboard setTabChoosen={setTabChoosen}/> :<Club/>}
      </div>
    </div>
    </div>
  )
}
