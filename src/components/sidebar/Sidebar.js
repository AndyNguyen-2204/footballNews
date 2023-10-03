import React from 'react'
import { BsGrid1X2 } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
export default function Sidebar(props) {
  const Tab = [
    {
      title: "Dashboard",
      id: "dashboard",
      icon: <BsGrid1X2 />
    },
    {
      title: "Club",
      id: "club",
      icon: <RiTeamLine />
    },
  ]
  const handleChageTab = (id) => {
    props.setTabChoosen(id)
  }
  return (
    <div className='w-full x-sc-900:w-2/12 bg-white x-sc-900:rounded-bl-3xl'>
      <span className='block x-sc-900:mt-10 text-textGray pl-8 pb-4 text-xl-medium'>MAIN MENU</span>
      <ul className='flex x-sc-900:block gap-6'>
        {
          Tab.map((el) =>
            <li className={`pl-8 py-4 flex items-center border-b-4 x-sc-900:border-l-4 x-sc-900:border-b-0 border-transparent xl-regular ${props.tabChoosen === el.id && "text-primary x-sc-900:border-l-4 !border-primary font-bold"}`} key={el.id} >
              <span className='text-2xl cursor-pointer' onClick={() => handleChageTab(el.id)}>{el.icon}</span>
              <span className='inline-block ml-4 cursor-pointer' onClick={() => handleChageTab(el.id)}>{el.title}</span>
            </li>
          )
        }
      </ul>

    </div>
  )
}
