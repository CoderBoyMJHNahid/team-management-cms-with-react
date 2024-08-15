import React from "react";
import { NavLink } from "react-router-dom";

const CardFavTeam = ({elem}) => {

  return (
    <>
      <div className="card w-100 mt-10 text-center rounded-xl bg-[#F5F4F6] p-4">
        <img
          src={elem.image}
          className="m-auto mt-[-50px]"
          alt="Team Logo"
        />
        <h4 className="text-xl font-semibold">{elem.name}</h4>
        <p className="text-[#7D7D7D]">{elem.subtitle}</p>
        <p className="mt-3">
          <NavLink
            className="bg-[#37354C] w-full py-1 text-white text-lg font-semibold px-12 rounded-xl"
            to={elem.link}
          >
            Go
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default CardFavTeam;
