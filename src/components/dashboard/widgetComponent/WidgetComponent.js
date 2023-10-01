import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDataLeagueStandings } from '../../../redux/getLeagues/GetLeagues';
const WidgetComponent = ({dataLeague,season}) => {
    const dispatch =useDispatch()
    const htmlContent=`
    < div  id = " wg-api-football-standings "
     data-host = " v3.football.api-sports.io "
     data-key="52b1c6870dc5e37a304c58fddff4bd4b"
     data-league = " 39 "
     data-team = " "
     data-season = "2023"
     data-theme = " "
     data-show-errors = " false "
     data-show-logos = " true "
     class = " wg_loader" > 
</ div > 
< script 
    type = " module "
     src = " https://widgets.api-sports.io/2.0.3/widgets.js " > 
</ script >
`;
useEffect(()=>{
    if(dataLeague && season){
        const formData = new FormData();
        formData.append('html', htmlContent);
        dispatch(GetDataLeagueStandings({ url: `/widgets/standings`,formData }))
    }
},[])
const dataLeaguesStandings = useSelector((state) => state.leagues.dataLeagueStandings)
console.log(dataLeaguesStandings)
  return (
    <div>
        
    </div>
  );
};

export default WidgetComponent;
