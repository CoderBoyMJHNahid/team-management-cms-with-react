import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Dependency from "./Dependency";
import { GoDotFill } from "react-icons/go";
import TaskBoard from "./Projects/TaskBoard";
import Calendal from "./Projects/Calendal";
const ProjectContent = () => {
  const [heading, setHeading] = useState("Dependency View");

  return (
    <>
      <TabGroup>
        <div className="flex flex-col gap-3 lg:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <TabList>
            <Tab className="bg-[#60cea747] mr-3 my-3 px-4 text-sm lg:text-base lg:mr-8 lg:px-6 rounded py-1 text-[#60CEA7] hover:bg-[#60cea747]">
              Tasks board
            </Tab>
            <Tab className="bg-[#60cea747] mr-3 my-3 px-4 text-sm lg:text-base lg:mr-8 lg:px-6 rounded py-1 text-[#60CEA7] hover:bg-[#60cea747]">
              Calendar View
            </Tab>
            <Tab className="bg-[#60cea747] text-sm lg:text-base px-4 lg:px-6 rounded py-1 text-[#60CEA7] hover:bg-[#60cea747]">
              Dependency View
            </Tab>
          </TabList>
        </div>
        <TabPanels className={`mt-10`}>
          <TabPanel>
            <h1 className="font-bold text-2xl">Tasks Board</h1>
            <TaskBoard/>
          </TabPanel>
          <TabPanel>
            <Calendal/>
          </TabPanel>
          <TabPanel>
            <Dependency />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default ProjectContent;
