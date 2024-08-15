import { useContextValue } from "../../context";
import { CiSearch } from "react-icons/ci";
import TableRowRecentProject from "../TableRowRecentProject";

const AllProject = ({title}) => {
  const { recProject } = useContextValue();

  return (
    <>
      <div className="project_wrapper pt-4 mt-6 pb-12 px-12 rounded-lg bg-[#FBFBFB]">
        <div className="project_wrapper flex flex-col items-center justify-center gap-5">
          {/* Recent project will be displayed here */}
          <div className="w-full text-start">
            <h3 className="font-semibold text-xl">{title}</h3>
          </div>
          <div className="border w-full border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center">
            <CiSearch className="font-xl" />
            <input
              type="text"
              className="focus:outline-none px-5"
              placeholder="Search a Project"
            />
          </div>
          <div className="w-full overflow-x-auto">
            <table cellPadding={10} className="w-full text-center">
              <thead>
                <tr className="text-[#868686] text-sm">
                  <td>Client / Project</td>
                  <td>Status</td>
                  <td>Progress</td>
                  <td>View</td>
                </tr>
              </thead>
              <tbody>
                {recProject.map((elem, index) => (
                  <TableRowRecentProject key={index} elem={elem} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProject;
