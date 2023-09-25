import React from 'react'
import { BsGrid1X2 } from "react-icons/bs";
export default function Sidebar(props) {
  const Tab = [
    {
      title: "Dashboard",
      id: "dashboard",
      icon: <BsGrid1X2 />
    },
    {
      title: "History",
      id: "history"
    },
  ]
  const handleChageTab = (id) => {
    props.setTabChoosen(id)
  }
  return (
    <div className='w-2/12 bg-white rounded-b-3xl'>
      <span className='block mt-10 text-textGray pl-8 pb-4 text-xl-medium'>MAIN MENU</span>
      <ul>
        {
          Tab.map((el) =>
            <li className={`pl-8 py-4 flex items-center border-l-4 border-transparent xl-regular ${props.tabChoosen === el.id && "text-primary border-l-4 !border-primary font-bold"}`} key={el.id} >
              <span className='text-2xl cursor-pointer' onClick={() => handleChageTab(el.id)}>{el.icon}</span>
              <span className='inline-block ml-4 cursor-pointer' onClick={() => handleChageTab(el.id)}>{el.title}</span>
            </li>
          )
        }
      </ul>

    </div>
  )
}
