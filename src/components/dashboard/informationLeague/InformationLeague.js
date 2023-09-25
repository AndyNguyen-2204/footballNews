import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDataLeagues } from '../../../redux/getLeagues/GetLeagues';
export default function InformationLeague() {
  const listClub = useSelector((state) => state.listClubReducer.dataListClub)
  const dispatch = useDispatch()
  const dataLeagues = useSelector((state) => state.leagues.dataLeague)
  console.log("🚀 ~ file: InformationLeague.js:6 ~ InformationLeague ~ listClub:", listClub)
  useEffect(() => {
     if(listClub){
      dispatch(GetDataLeagues({url:`leagues?id=${listClub}`}))
     }
  }, [listClub])
  return (
    <div className='bg-white p-6 rounded-md w-full relative mt-5'>
      <p>fhajfhasjhfjsahf</p>
    </div>
  )
}
