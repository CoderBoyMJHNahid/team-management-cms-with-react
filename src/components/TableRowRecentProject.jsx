import { Line } from "rc-progress";
import { GoDotFill } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const TableRowRecentProject = ({ elem }) => {
  const statusColor = () => {
    if (elem.status == 1) {
      return "#0A7767";
    } else if (elem.status == 2) {
      return "#FFB21E";
    } else {
      return "#C44343";
    }
  };

  const rowStatus = () => {
    if (elem.status == 1) {
      return (
        <>
          <div className="bg-[#E6F6F4] mt-1 w-2/3  p-1 flex justify-center items-center rounded-xl">
            <GoDotFill className="text-[#0A7767] text-xl" />
            <span className="text-[#0A7767]">Open</span>
          </div>
        </>
      );
    } else if (elem.status == 2) {
      return (
        <>
          <div className="bg-[#ffcc6a6b] font-bold mt-1 w-2/3 p-1 flex justify-center items-center rounded-xl">
            <GoDotFill className="text-[#FFB21E]" />
            <span className="text-[#FFB21E]">Delayed</span>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="bg-[#c443434d] mt-1 w-2/3 p-1 flex justify-center items-center rounded-xl">
            <GoDotFill className="text-[#C44343]" />
            <span className="text-[#C44343]">Blocked</span>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <tr className="bg-white py-6 px-3 rounded-lg">
        <td>
          <NavLink to={`/project-details`}>
            <div className="flex items-center ml-3">
              <img
                className="h-10 w-10 rounded-full"
                src={elem.image}
                alt="avatar"
              />
              <div className="ml-4 text-start">
                <h2 className="text-gray-800 font-semibold">{elem.name}</h2>
                <p className="text-gray-600 text-sm">{elem.type}</p>
              </div>
            </div>
          </NavLink>
        </td>
        <td className="flex justify-center">{rowStatus()}</td>
        <td>
          <Line
            percent={elem.progress}
            strokeWidth={4}
            strokeColor={statusColor()}
          />
        </td>
        <td>
          <div className="m-auto w-8 bg-[#60CEA7] py-2 rounded-full">
            <NavLink to={`/project-details`}>
              <FaEye className="m-auto text-white" />
            </NavLink>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRowRecentProject;
