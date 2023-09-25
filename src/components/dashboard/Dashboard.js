import React from 'react'
import ListLeague from './listLeague/ListLeague'
import InformationLeague from './informationLeague/InformationLeague'

export default function Dashboard() {
  return (
    <div className='p-5 w-10/12'>
      <ListLeague/>
      <InformationLeague/>
    </div>
  )
}
