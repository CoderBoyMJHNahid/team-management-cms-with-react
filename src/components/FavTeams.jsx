import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useContextValue } from '../context'
import CardFavTeam from './CardFavTeam';
import { FavTeam } from '../data/favTeam';
import DashboardHeader from './DashboardHeader';

const FavTeams = () => {

  const {favTeam} = useContextValue();


  return (
    <>
        <div className="team_content_wrapper py-6 px-12 rounded-lg bg-[#FBFBFB]">
          <DashboardHeader title="My favorites teams" page="All teams"/>
          <div className="team_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10">
              {/* Teams will be displayed here */}
              {
                favTeam.map((elem,index) =>{
                  
                  return <CardFavTeam key={index} elem={elem}/>
                })
              }
          </div>
        </div>
    </>
  )
}

export default FavTeams
