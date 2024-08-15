import React from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";
import AllProject from "../components/Projects/AllProject";

const Project = () => {
  return (
    <Container>
      <div className="heading_wrapper flex items-center justify-between">
        <div className="lg:flex gap-12 items-center">
          <h2 className="font-semibold text-4xl mb-3 lg:mb-0">
            My Projects
          </h2>
          <span>
            <NavLink
              onClick={() => setOpenModel(true)}
              className={`text-sm bg-[#60cea73d] text-[#60CEA7] px-3 py-1 rounded`}
            >
              Add New Project
            </NavLink>
          </span>
        </div>
      </div>
      {/* Project List */}
      <AllProject title={`My Favorite Projects`}/>
      <AllProject title={`All Projects`}/>
    </Container>
  );
};

export default Project;
