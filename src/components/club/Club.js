import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../loading/Loading'
import { GetClub } from '../../redux/getClub/GetClub'
import Modal from '../modal/Modal'

export default function Club() {
  const dataClub = useSelector((state) => state.club.dataClub)
  const loading = useSelector((state) => state.club.loading)
  const dispatch = useDispatch()
  const year = new Date().getFullYear()
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [dataPlayer, setDataPlayer] = useState(null)
  const handleChangePage = () => {
    if (page === 1) {
      dispatch(GetClub({ url: `/players?league=${dataClub?.parameters?.league}&season=${year}&team=${dataClub?.parameters?.team}&page=${page + 1}` }))
      setPage(2)
    } else if (page === 2) {
      dispatch(GetClub({ url: `/players?league=${dataClub?.parameters?.league}&season=${year}&team=${dataClub?.parameters?.team}&page=${page - 1}` }))
      setPage(1)
    }
  }
  const handelShow = (item) => {
    setDataPlayer(item)
    setShowModal(true)
    
  }
  return (
    <div className='bg-white p-6 rounded-md w-full relative mt-5 min-h-[84vh]'>
      {loading ? <Loading /> : dataClub ? <div className="w-full mt-4 tableInformationLeague">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="border px-4 py-2">STT</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Birth</th>
              <th className="border px-4 py-2">Country</th>
              <th className="border px-4 py-2">Avatar</th>
              <th className="border px-4 py-2">Team</th>
              <th className="border px-4 py-2">Position</th>
              <th className="border px-4 py-2">Captain</th>
              <th className="border px-4 py-2">View More</th>
            </tr>
          </thead>
          <tbody>
            {dataClub?.response.map((item, index) => (
              <tr key={item.player.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.player.name}</td>
                <td className="border px-4 py-2">{item.player.age}</td>
                <td className="border px-4 py-2">{item.player.birth.date}</td>
                <td className="border px-4 py-2">{item.player.birth.country}</td>
                <td className="border px-4 py-2"><img src={item.player.photo} /></td>
                <td className="border px-4 py-2">{item.statistics[0].team.name}</td>
                <td className="border px-4 py-2">{item.statistics[0].games.position}</td>
                <td className="border px-4 py-2">{`${item.statistics[0].games.captain}`}</td>
                <td onClick={()=>handelShow(item)} className="border px-4 py-2 text-m-medium hover:text-primary cursor-pointer">View</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleChangePage} className='p-2 mt-3 border rounded hover:text-primary'>
          {page === 1 ? "Next Page" : "Prev Page"}
        </button>
      </div> : <div className='h-full flex items-center justify-center text-2xl-medium'>
        <p className=''>Data not found.Please click in club on tab dashboard to get data.Thanks you</p>
      </div>}
      {showModal && <Modal dataPlayer={dataPlayer} setShowModal={setShowModal}/>}
    </div>
  )
}
