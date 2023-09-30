import React from 'react'
import ListLeague from './listLeague/ListLeague'
import InformationLeague from './informationLeague/InformationLeague'

export default function Dashboard(props) {
  return (
    <div className='x-sc-900:w-10/12 x-sc-900:p-5'>
      <ListLeague/>
      <InformationLeague props={props}/>
    </div>
  )
}
