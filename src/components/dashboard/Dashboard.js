import React from 'react'
import ListLeague from './listLeague/ListLeague'
import InformationLeague from './informationLeague/InformationLeague'
import { useState } from 'react'

export default function Dashboard(props) {
  const [styleView, setStyleView] = useState("listClub")
  return (
    <div className='x-sc-900:w-10/12 x-sc-900:p-5'>
      <ListLeague setStyleView={setStyleView}/>
      <InformationLeague data={props} styleView={styleView} setStyleView={setStyleView}/>
    </div>
  )
}
