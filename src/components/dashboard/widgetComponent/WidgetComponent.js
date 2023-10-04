import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDataLeagueStandings } from '../../../redux/getLeagues/GetLeagues';
import Loading from '../../loading/Loading';
import { useMemo } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillMinusCircle } from "react-icons/ai";
const WidgetComponent = ({ dataLeague, season }) => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.leagues.loading)
  const dataLeaguesStandings = useSelector((state) => state.leagues.dataLeagueStandings)
  useEffect(()=>{
    if(dataLeague && season){
        dispatch(GetDataLeagueStandings({ url: `/standings?league=${dataLeague}&season=${season}` }))
    }
},[])
  const renderData = useMemo(() => {
    if (dataLeaguesStandings) {
      return (
        <div>
          <div className='border rounded p-4 mb-4 mt-4 max-w-fit float-right'>
            <div className='flex items-center gap-4'><span className='text-a00FF00 text-xl'><AiFillCheckCircle /></span> <span>Win</span></div>
            <div className='flex items-center gap-4 mt-4'><span className='text-gray text-xl'><AiFillMinusCircle /></span> <span>Draw</span></div>
            <div className='flex items-center gap-4 mt-4'><span className='text-red text-xl'><AiFillCloseCircle /></span> <span>Lose</span></div>
          </div>
          <div className="w-full mt-4 tableInformationLeagueStandings">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Rank</th>
                  <th className="border px-4 py-2">Logo</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Kicked</th>
                  <th className="border px-4 py-2">Win</th>
                  <th className="border px-4 py-2">Draw</th>
                  <th className="border px-4 py-2">Lose</th>
                  <th className="border px-4 py-2">Goal</th>
                  <th className="border px-4 py-2">Lost Goal</th>
                  <th className="border px-4 py-2">Difference</th>
                  <th className="border px-4 py-2">Point</th>
                  <th className="border px-4 py-2">Last 5 Matches</th>
                </tr>
              </thead>
              <tbody>
                {dataLeaguesStandings?.response[0]?.league.standings[0].map((item, index) => (
                  <tr key={item.rank}>
                    <td className="border px-4 py-2">{item.rank}</td>
                    <td className="border px-4 py-2"><img className='h-14' src={item.team.logo} /></td>
                    <td className="border px-4 py-2">{item.team.name}</td>
                    <td className="border px-4 py-2">{item.all.played}</td>
                    <td className="border px-4 py-2">{item.all.win}</td>
                    <td className="border px-4 py-2">{item.all.draw}</td>
                    <td className="border px-4 py-2">{item.all.lose}</td>
                    <td className="border px-4 py-2">{item.all.goals.for}</td>
                    <td className="border px-4 py-2">{item.all.goals.against}</td>
                    <td className="border px-4 py-2">{item.all.goals.for - item.all.goals.against}</td>
                    <td className="border px-4 py-2">{item.points}</td>
                    <td className="border px-4 py-2">
                      <div className='flex flex-wrap gap-0.5'>
                        {item.form.split("").map((el) => (
                          el === "L" ? <span className='text-red text-xl'><AiFillCloseCircle /></span> : el === "W" ? <span className='text-a00FF00 text-xl'><AiFillCheckCircle /></span> : <span className='text-gray text-xl'><AiFillMinusCircle /></span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    } else {
      return null
    }
  }, [dataLeaguesStandings])
  return (
    <div>
      {loading ? <Loading /> : renderData}
    </div>
  );
};

export default WidgetComponent;
