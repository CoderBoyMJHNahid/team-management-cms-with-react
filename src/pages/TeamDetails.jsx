import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { FaPen } from "react-icons/fa";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ProjectCard from "../components/Teams/ProjectCard";
import AddProject from "../components/Teams/AddProject";
import Reminder from "../components/Teams/Reminder";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const TeamDetails = () => {
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <Container>
        <div className="top_content_wrapper sm:flex items-center justify-between w-full">
          <div className="team_name_wrapper flex items-center gap-5 w-4/8">
            <img width={100} src="images/cocacola.png" alt="team Logo" />
            <h2 className="font-semibold text-2xl">Coca-Cola</h2>
          </div>
          <div className="team_edit_wrapper mt-5 lg:mt-0 flex gap-6">
            <span className="bg-[#EDECF0] rounded-full p-3 cursor-pointer">
              <FaPen />
            </span>
            <span className="bg-[#EDECF0] rounded-full p-3 cursor-pointer">
              <RiDeleteBin6Fill />
            </span>
          </div>
        </div>
        <div className="management_member_wrapper mt-10">
          <div className="mb-5">
            <div className="lg:flex gap-12">
              <h2 className="font-semibold text-2xl mb-3 lg:mb-0">Team members</h2>
              <span>
                <NavLink
                  className={`text-sm bg-[#60cea73d] text-[#60CEA7] px-3 py-1 rounded`}
                >
                  Manage Members
                </NavLink>
              </span>
            </div>
          </div>
          <div className="management_member_list_wrapper items-center flex gap-3">
            <img width={40} src="images/member1.png" alt="Member Image" />
            <img width={40} src="images/member2.png" alt="Member Image" />
            <img width={40} src="images/member3.png" alt="Member Image" />
            <img width={40} src="images/member4.png" alt="Member Image" />
            <div className="more_icon h-[30px] cursor-pointer">
              <img width={30} src="images/moremembers.png" alt="More Icon" />
            </div>
          </div>
        </div>
        <div className="dash_content mt-10">
          <div className="heading flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Recent project</h2>
            <NavLink to={`/project`} className={`text-[#7D7D7D]`}>
              View all
            </NavLink>
          </div>
          <div className="project_wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <ProjectCard />
            <ProjectCard />

            <span className="cursor-pointer" onClick={() => setOpen(true)}>
              <AddProject />
            </span>
          </div>

          {/* team reminders */}
          <div className="team_reminder_wrapper lg:w-6/12 mt-10 mb-5">
            <div className="heading_wrapper flex items-center justify-between">
              <div className="lg:flex gap-12 items-center">
                <h2 className="font-semibold text-2xl mb-3 lg:mb-0">Team reminders</h2>
                <span>
                  <NavLink
                    onClick={() => setOpenModel(true)}
                    className={`text-sm bg-[#60cea73d] text-[#60CEA7] px-3 py-1 rounded`}
                  >
                    Add reminder
                  </NavLink>
                </span>
              </div>
              <NavLink className={`text-gray-400`}>View All</NavLink>
            </div>
            <div className="reminder_wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              <Reminder />
              <Reminder />
              <Reminder />
            </div>
          </div>
        </div>

        <Dialog
          open={openModel}
          onClose={setOpenModel}
          className="relative z-10"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl pb-5 transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="close_btn_modal border-b-2">
                    <IoClose
                      className="cursor-pointer text-xl ml-auto mb-2"
                      onClick={() => setOpenModel(false)}
                    />
                  </div>
                  <div className="mt-3 px-8">
                    <DialogTitle
                      as="h3"
                      className="text-xl font-semibold leading-6 text-gray-900"
                    ></DialogTitle>
                    <div className="form_wrapper">
                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3 mb-3">
                          <label className="text-lg font-semibold" htmlFor="">
                            Reminder name
                          </label>
                          <input
                            type="text"
                            className="focus:outline-none border border-gray-400 border-1 px-5 py-2 rounded-lg"
                            placeholder="Add a title for the reminder"
                          />
                        </div>
                        <div className="flex flex-col gap-3 mb-3">
                          <label className="text-lg font-semibold" htmlFor="">
                            Description
                          </label>
                          <textarea
                            type="text"
                            className="focus:outline-none border border-gray-400 border-1 px-5 py-2 rounded-lg"
                            placeholder="Add a description for the reminder"
                            rows="3"
                          ></textarea>
                        </div>
                        <div className="flex flex-col gap-3 mb-4">
                          <label className="text-lg font-semibold" htmlFor="">
                            Priority
                          </label>
                          <select
                            className="border bg-[#EFEFEF] border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center text-[#5E5E5E]"
                            name=""
                            id=""
                          >
                            {/* <option value="" selected>
                              <GoDotFill className="text-red-500" /> High
                            </option> */}
                            <option value="" selected>
                              High
                            </option>
                            <option value="">Medium</option>
                            <option value="">Low</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-3 mb-3">
                          <label className="text-lg font-semibold" htmlFor="">
                            Deadline
                          </label>
                          <input
                            className="w-full border bg-[#EFEFEF] border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center text-[#5E5E5E]"
                            type="date"
                          />
                        </div>
                        <button className="mt-4 bg-[#37354C] text-white w-full  px-4 py-2 rounded-lg">
                          Add reminder
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl pb-5 transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="close_btn_modal border-b-2">
                    <IoClose
                      className="cursor-pointer text-xl ml-auto mb-2"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <div className="mt-3 px-8">
                    <DialogTitle
                      as="h3"
                      className="text-xl font-semibold leading-6 text-gray-900"
                    ></DialogTitle>
                    <div className="form_wrapper">
                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3 mb-3">
                          <label className="text-lg font-semibold" htmlFor="">
                            Project Name
                          </label>
                          <input
                            type="text"
                            className="focus:outline-none border border-gray-400 border-1 px-5 py-2 rounded-lg"
                            placeholder="Add a title for the project"
                          />
                        </div>
                        <div className="flex flex-col gap-3 mb-3">
                          <label className="text-lg font-semibold" htmlFor="">
                            Description
                          </label>
                          <textarea
                            type="text"
                            className="focus:outline-none border border-gray-400 border-1 px-5 py-2 rounded-lg"
                            placeholder="Add a description for the project"
                            rows="3"
                          ></textarea>
                        </div>
                        <div className="flex flex-col gap-3 mb-4">
                          <label className="text-lg font-semibold" htmlFor="">
                            Tech Stack
                          </label>
                          <select
                            className="border bg-[#EFEFEF] border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center text-[#5E5E5E]"
                            name=""
                            id=""
                          >
                            <option value="" selected>
                              SAP BW4/HANA, SAP Analytics Cloud...
                            </option>
                            <option value="">
                              SAP BW4/HANA, SAP Analytics Cloud...
                            </option>
                          </select>
                        </div>
                        <div className="flex gap-3 mb-3">
                          <div className="w-6/12 flex flex-col">
                            <label className="text-lg font-semibold" htmlFor="">
                              Deadline
                            </label>
                            <input
                              className="border bg-[#EFEFEF] border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center text-[#5E5E5E]"
                              type="date"
                            />
                          </div>
                          <div className="w-6/12 flex flex-col">
                            <label className="text-lg font-semibold" htmlFor="">
                              Status
                            </label>
                            <select
                              className="border border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center w-100"
                              name=""
                              id=""
                            >
                              <option value="" selected>
                                Open
                              </option>
                              <option value="">Delayed</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 mb-3">
                          <label className="text-lg font-semibold" htmlFor="">
                            Add members
                          </label>
                          <div className="border border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center">
                            <CiSearch className="font-xl" />
                            <input
                              type="text"
                              className="focus:outline-none px-5"
                              placeholder="Search and invite members"
                            />
                          </div>
                        </div>
                        <button className="mt-4 bg-[#37354C] text-white w-full  px-4 py-2 rounded-lg">
                          Create project
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Container>
    </>
  );
};

export default TeamDetails;
