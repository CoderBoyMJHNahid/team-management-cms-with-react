import React from "react";
import Container from "../components/Container";
import { GoDotFill } from "react-icons/go";
import { Line } from "rc-progress";
import { NavLink } from "react-router-dom";
import ProjectContent from "../components/ProjectContent";

const ProjectDetails = () => {
  return (
    <>
      <Container>
        <div className="top_content_wrapper lg:flex items-center justify-between w-full lg:w-10/12 xl:w-8/12">
          <div className="company_name_wrapper flex items-center gap-5 w-4/8">
            <img width={100} src="images/cocacola.png" alt="Company Logo" />
            <h2 className="font-semibold text-2xl">
              Coca-Cola <br />
              Corporate Dashboard
            </h2>
          </div>
          <div className="company_work_status mt-5 lg:mt-0 flex gap-10 lg:gap-32 w-4/8">
            <div>
              <div className="bg-[#E6F6F4] mt-1 w-[100px]  p-1 flex justify-center items-center rounded-xl">
                <GoDotFill className="text-[#0A7767] text-xl" />
                <span className="text-[#0A7767] font-semibold">Open</span>
              </div>
            </div>
            <div className="progress_bar_wrapper w-[200px]">
              <span className="text-sm font-medium">ETC: 48%</span>
              <Line percent={48} strokeWidth={5} strokeColor="#60CEA7" />
            </div>
          </div>
        </div>
        <div className="management_member_wrapper mt-10 flex flex-col lg:flex-row items-center gap-8">
          <div>
            <NavLink
              className={`text-white text-sm bg-[#60CEA7] px-3 py-1 rounded`}
            >
              Manage Members
            </NavLink>
          </div>
          <div className="management_member_list_wrapper items-center flex gap-3">
            <img width={40} src="images/member1.png" alt="Member Image" />
            <img width={40} src="images/member2.png" alt="Member Image" />
            <img width={40} src="images/member3.png" alt="Member Image" />
            <img width={40} src="images/member4.png" alt="Member Image" />
            <div className="more_icon h-[30px] cursor-pointer">
              <img
                width={30}
                src="images/moremembers.png"
                alt="More Icon"
              />
            </div>
          </div>
          
        </div>
        <div className="dash_content mt-10">
            <ProjectContent />
          </div>
      </Container>
    </>
  );
};

export default ProjectDetails;
