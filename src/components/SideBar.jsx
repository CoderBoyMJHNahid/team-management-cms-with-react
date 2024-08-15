import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TiLightbulb } from "react-icons/ti";
import { FaUsers, FaBars } from "react-icons/fa";

const SideBar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <nav
        className={`bg-[#fbfbfb] absolute lg:relative p-4 flex flex-col justify-between h-full  transition-all duration-300 ${
          isOpen ? "translate-x-0 left-0 w-[250px]" : "-translate-x-full w-[0px]"
        }`}
      >
        <div className={`top_content`}>
          <div className="logo flex gap-4 items-center justify-between ps-7 my-12">
            <h3 className={`text-xl font-bold uppercase ${
          isOpen ? "block" : "hidden"
        }`}>Logo</h3>
            <button
              onClick={toggleSidebar}
              className="z-50 p-2 bg-gray-800 text-white rounded"
            >
              <FaBars />
            </button>
          </div>
          <ul className={`ps-7 ${ isOpen ? "block" : "hidden"}`}>
            <li className="flex gap-2 my-5 items-center">
              <IoHomeOutline />
              <NavLink to={`/`} className="font-semibold">
                Dashboard
              </NavLink>
            </li>
            <li className="flex gap-2 my-5 items-center">
              <FaUsers />
              <NavLink to={`/teams`} className="font-semibold">
                Teams
              </NavLink>
            </li>
            <li className="flex gap-2 my-5 items-center">
              <TiLightbulb />
              <NavLink to={`/project`} className="font-semibold">
                Projects
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={`version_wrapper ${ isOpen ? "block" : "hidden"}`}>
          <hr />
          <p className="text-center font-semibold py-6">v.0.4.16</p>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
