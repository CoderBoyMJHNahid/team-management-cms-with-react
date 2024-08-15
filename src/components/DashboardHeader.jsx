import React from "react";
import { NavLink } from "react-router-dom";

const DashboardHeader = ({title,page}) => {
  return (
    <>
      <div className="heading flex justify-between mb-20">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p>
          <NavLink to={`/`} className="text-[#7D7D7D]">
            {page}
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default DashboardHeader;
