import React from "react";
import { FiPlus } from "react-icons/fi";

const AddProject = () => {
  return (
    <div className="flex flex-col h-[244px] mt-8 rounded-lg items-center justify-center border-dash border border-[#60CEA7]">
      <FiPlus className="text-8xl text-[#60CEA7]" />
      <p className="text-[#60CEA7]">Add new project</p>
    </div>
  );
};

export default AddProject;
