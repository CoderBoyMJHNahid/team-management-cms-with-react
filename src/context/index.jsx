import { createContext, useContext, useEffect, useState } from "react";
import { FavTeam } from "../data/favTeam";
import { recentProject } from "../data/recentProject";
import { ProfileData } from "../data/profileData";
import { Notifications } from "../data/notification";
import { TeamData } from "../data/allTeamData";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [favTeam, setFavTeam] = useState([]);
  const [recProject, setRecProject] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    setFavTeam(FavTeam);
    setRecProject(recentProject);
    setProfileData(ProfileData);
    setNotifications(Notifications);
    setTeamData(TeamData);
  }, []);

  return (
    <Context.Provider
      value={{ favTeam, recProject, profileData, notifications,teamData }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextValue = () => useContext(Context);
