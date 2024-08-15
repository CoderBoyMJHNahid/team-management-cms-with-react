import { Line } from "rc-progress";
import React from "react";
import { GoDotFill } from "react-icons/go";

const ProjectCard = () => {
  return (
    <div className="bg-[#FBFBFB] p-8 rounded-xl mt-8">
      <div className="member_wrapper flex gap-2">
        <div className="border text-xl border-black w-[40px] flex items-center rounded-full justify-center border-dashed">
          <span>+2</span>
        </div>
        <img width={40} src="images/member1.png" alt="Member Image" />
        <img width={40} src="images/member2.png" alt="Member Image" />
      </div>
      <div className="title_wrapper my-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-2xl">CM Sedes</h3>
          <div className="bg-[#E6F6F4] mt-1 w-24 p-1 flex justify-center items-center rounded-xl">
            <GoDotFill className="text-[#0A7767] text-xl" />
            <span className="text-[#0A7767]">Open</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">Deadline: 30/04/2024</p>
      </div>
      <div className="progress_bar_wrapper">
        <span className="text-sm font-medium">ETC: 48%</span>
        <Line className="mt-2 w-full" percent={48} strokeWidth={2} strokeColor="#60CEA7" />
      </div>
    </div>
  );
};

export default ProjectCard;
