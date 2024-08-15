import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar";
import { ContextProvider } from "./context";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleResize = () => {
    if (window.innerWidth < 1550) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className="flex">
      <ContextProvider>
        <Router>
          <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <div className={`transition-all duration-300 flex-grow`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/project" element={<Project />} />
              <Route path="/project-details" element={<ProjectDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/teams" element={<Team />} />
              <Route path="/team-details" element={<TeamDetails />} />

            </Routes>
          </div>
        </Router>
      </ContextProvider>
    </main>
  );
}

export default App;
