import React from 'react'
import "./Modal.css"
export default function Modal(props) {
  const dataPlayer = props.dataPlayer
  const handelCloseModal = () => {
    props.setShowModal(false)
  }
  return (
    <div className='wrap_modal'>
      <div className='backgroundModal'></div>
      <div id="dialog">
        <h1 className='text-2xl-medium pb-2 text-center'>Information Player</h1>
        <div className='flex justify-center'>
          <img className='w-auto' src={dataPlayer?.player.photo}></img>
        </div>
        <div className='flex mt-10'>
          <div className='w-1/2 pr-3'>
            <p><span className='text-xl-medium'>Name :</span> {dataPlayer?.player.name}</p>
            <p><span className='text-xl-medium'>Firstname :</span> {dataPlayer?.player.firstname}</p>
            <p><span className='text-xl-medium'>Lastname :</span> {dataPlayer?.player.lastname}</p>
            <p><span className='text-xl-medium'>Birth :</span> {dataPlayer?.player?.birth?.date}</p>
            <p><span className='text-xl-medium'>Age :</span> {dataPlayer?.player.age}</p>
            <p><span className='text-xl-medium'>Nationality :</span> {dataPlayer?.player.nationality}</p>
            <p><span className='text-xl-medium'>Place :</span> {dataPlayer?.player?.birth?.place}</p>
            <p><span className='text-xl-medium'>Height:</span> {dataPlayer?.player.height}</p>
            <p><span className='text-xl-medium'>Weight :</span> {dataPlayer?.player.weight}</p>
            <p><span className='text-xl-medium'>Rating :</span> {Number(dataPlayer?.statistics[0].games.rating).toFixed(1)}</p>
          </div>
          <div className='w-1/2 pl-3'>
            <p><span className='text-xl-medium'>Team :</span> {dataPlayer?.statistics[0].team.name}</p>
            <p><span className='text-xl-medium'>League :</span> {dataPlayer?.statistics[0].league.name}</p>
            <p><span className='text-xl-medium'>Position :</span> {dataPlayer?.statistics[0].games.position}</p>
            <p className='capitalize'><span className='text-xl-medium'>Captain :</span> {`${dataPlayer?.statistics[0].games.captain}`}</p>
            <p><span className='text-xl-medium'>Appearences :</span> {dataPlayer?.statistics[0].games.appearences}</p>
            <p><span className='text-xl-medium'>Minutes :</span> {dataPlayer?.statistics[0].games.minutes}</p>
            <p><span className='text-xl-medium'>Passes :</span> {dataPlayer?.statistics[0].passes.total}</p>
            <p><span className='text-xl-medium'>Passes Accuracy :</span> {dataPlayer?.statistics[0].passes.accuracy}</p>
            <p><span className='text-xl-medium'>Passes Key :</span> {dataPlayer?.statistics[0].passes.key}</p>
              <p><span className='text-xl-medium'>Shots :</span> {dataPlayer?.statistics[0].shots.total}</p>
              <p><span className='text-xl-medium'>Goals :</span> {dataPlayer?.statistics[0].goals.total}</p>
              <p><span className='text-xl-medium'>Assists :</span> {dataPlayer?.statistics[0].goals.assists}</p>
                <p><span className='text-xl-medium'>Duels :</span> {dataPlayer?.statistics[0].duels.total}</p>
                <p><span className='text-xl-medium'>Duels won :</span> {dataPlayer?.statistics[0].duels.won}</p>
                <p><span className='text-xl-medium'>Interceptions :</span> {dataPlayer?.statistics[0].tackles.interceptions}</p>
          </div>
        </div>

        <button onClick={handelCloseModal} aria-label="close" class="x">❌</button>
      </div>
    </div>
  )
}
