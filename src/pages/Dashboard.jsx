import React from "react";
import Container from "../components/Container";
import { FaUser } from "react-icons/fa";
import FavTeams from "../components/FavTeams";
import RecentProjects from "../components/RecentProjects";
import { useContextValue } from "../context";
import RecentNotification from "../components/RecentNotification";
import HeaderTitle from "../components/Title/HeaderTitle";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  const { profileData } = useContextValue();

  return (
    <>
      <Container>
        <div className="heading flex items-center justify-between">
          <HeaderTitle title={`Dashboard`} subTitle={`Welcome back, Frank`} />
          <div className="icon_wrapper cursor-pointer bg-[#EDECF0] p-3 rounded-full">
            <NavLink to={`/profile`}>
              <FaUser className="text-xl" />
            </NavLink>
          </div>
        </div>
        {/* Dashboard content */}
        <div id="content" className="lg:flex gap-16 my-10">
          <div className={`w-100 lg:w-8/12`}>
            <FavTeams />
            <RecentProjects />
          </div>
          <div className={`w-100 mt-10 lg:w-4/12 lg:mt-0`}>
            <div className="profile_notification_wrapper h-full py-6 px-12 rounded-lg bg-[#FBFBFB]">
              <div className="profile_data_wrapper">
                <img
                  className="m-auto mb-4"
                  width={110}
                  src={profileData.profileImage}
                  alt="Profile Picture"
                />
                <div className="name_wrapper text-center">
                  <h2 className="text-2xl font-semibold">{profileData.name}</h2>
                  <p className="text-black">{profileData.profession}</p>
                  <p className="level_wrapper my-6">
                    <span className="bg-[#60CEA7] text-white px-6 py-1 rounded-xl">
                      {profileData.level}
                    </span>
                  </p>
                </div>
              </div>
              <RecentNotification />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
