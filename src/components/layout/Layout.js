import React, { useState } from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Dashboard from '../dashboard/Dashboard'
import Club from '../club/Club'

export default function Layout() {
  const [tabChoosen,setTabChoosen]=useState("dashboard")
  return (
    <div className='bg-bgglobal w-full h-auto'>
      <div className='max-w-screen-2xl m-auto py-8'>
      <Header/>
      <div className='flex w-full bg-bgcontent rounded-b-3xl'>
      <Sidebar tabChoosen={tabChoosen} setTabChoosen={setTabChoosen}/>
      {tabChoosen === "dashboard" ? <Dashboard setTabChoosen={setTabChoosen}/> :<Club/>}
      </div>
    </div>
    </div>
  )
}
