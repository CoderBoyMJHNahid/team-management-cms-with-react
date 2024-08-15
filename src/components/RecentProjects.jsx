import DashboardHeader from "./DashboardHeader";
import { useContextValue } from "../context";
import TableRowRecentProject from "./TableRowRecentProject";

const RecentProjects = () => {
  const { recProject } = useContextValue();

  return (
    <>
      <div className="recent_project_wrapper pt-10 pb-12 px-12 rounded-lg bg-[#FBFBFB]">
        <DashboardHeader title="My recent projects" page="All projects" />
        <div className="project_wrapper flex items-center justify-center gap-10">
          {/* Recent project will be displayed here */}
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

export default RecentProjects;
