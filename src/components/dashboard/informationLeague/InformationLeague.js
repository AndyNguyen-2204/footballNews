import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDataLeagues } from '../../../redux/getLeagues/GetLeagues';
import { GetClub } from '../../../redux/getClub/GetClub';
import { FiRepeat } from "react-icons/fi";
import InnerHTML from 'dangerously-set-html-content'
import Loading from '../../loading/Loading'
import "./InformationLeague.css"
import WidgetComponent from '../widgetComponent/WidgetComponent';
export default function InformationLeague(props) {
  const listClub = useSelector((state) => state.listClubReducer.dataListClub)
  const loading = useSelector((state) => state.listClubReducer.loading)
  const dispatch = useDispatch()
  const dataLeagues = useSelector((state) => state.leagues.dataLeague)
  const dataLeaguesStandings = useSelector((state) => state.leagues.dataLeagueStandings)
  const year = new Date().getFullYear()
  const handelChangeView = () => {
    if (props.styleView !== "listClub") {
      props.setStyleView("listClub")
    } else {
      props.setStyleView("rank")
    }
  }
  const handleGetDataClub = (id) => {
    dispatch(GetClub({url:`/players?league=${listClub?.parameters?.league}&season=${year}&team=${id}`}))
    props.data.setTabChoosen("club")
  }
  useEffect(() => {
    if (listClub) {
      dispatch(GetDataLeagues({ url: `leagues?id=${listClub?.parameters?.league}` }))
    }
  }, [listClub])
  const renderData = useMemo(() => {
    if (dataLeagues) {
      return (
        <div>
          <h1 className='text-center text-h4 font-bold'>{dataLeagues?.response[0]?.league?.name}</h1>
          <div className='flex items-center gap-4 mt-10'>
            {dataLeagues?.response[0]?.country?.flag && 
            <>
            <span className='text-xl-medium'>Country :</span>
            <img className='h-24' src={dataLeagues?.response[0]?.country?.flag} alt="flag" />
            </>
            }
          </div>
          <div className='flex items-center gap-4 mt-10'>
            <span className='text-xl-medium'>Logo :</span>
            <img src={dataLeagues?.response[0]?.league?.logo} alt="flag" />
          </div>
         {dataLeagues?.response[0]?.country?.name !== "World" &&  <div className='flex mt-4 justify-end'>
            <button onClick={handelChangeView} className='p-2 border rounded border flex items-center gap-2 hover:text-primary'>
              <FiRepeat /> Change view
            </button>
          </div>}
          {props.styleView === "listClub" ? <div className="w-full mt-4 tableInformationLeague">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="border px-4 py-2">STT</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Logo</th>
                  <th className="border px-4 py-2">Code</th>
                  <th className="border px-4 py-2">City</th>
                  <th className="border px-4 py-2">Address</th>
                  <th className="border px-4 py-2">Stadium Name</th>
                  <th className="border px-4 py-2">View More</th>
                </tr>
              </thead>
              <tbody>
                {listClub?.response.map((item, index) => (
                  <tr key={item.team.id}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{item.team.name}</td>
                    <td className="border px-4 py-2"><img src={item.team.logo} /></td>
                    <td className="border px-4 py-2">{item.team.code}</td>
                    <td className="border px-4 py-2">{item.venue.city}</td>
                    <td className="border px-4 py-2">{item.venue.address}</td>
                    <td className="border px-4 py-2">{item.venue.name}</td>
                    <td onClick={() => handleGetDataClub(item.team.id)} className="border px-4 py-2 text-m-medium hover:text-primary cursor-pointer">View</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> : <WidgetComponent dataLeague={listClub?.parameters?.league} season={year}/>}
        </div>
      )
    } else {
      return null
    }
  }, [dataLeagues, props.styleView,dataLeaguesStandings])
  return (
    <div className='bg-white p-6 rounded-md w-full relative mt-5 min-h-[50vh]'>
      {loading ? <Loading/> :renderData}
    </div>
  )
}
