import React, { useState } from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Dashboard from '../dashboard/Dashboard'

export default function Layout() {
  const [tabChoosen,setTabChoosen]=useState("dashboard")
  return (
    <div className='bg-bgglobal w-full h-screen'>
      <div className='max-w-screen-2xl m-auto py-8'>
      <Header/>
      <div className='flex w-full bg-bgcontent rounded-b-3xl'>
      <Sidebar tabChoosen={tabChoosen} setTabChoosen={setTabChoosen}/>
      <Dashboard/>
      </div>
    </div>
    </div>
  )
}
