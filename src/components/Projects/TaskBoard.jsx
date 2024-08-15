import { FaPlus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const TaskBoard = () => {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => e.preventDefault();
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-8">
        <div className="todo_wrapper h-[460px] overflow-hidden overflow-y-auto bg-[#FBFBFB] rounded-xl px-4 py-3">
          <div className="header pb-3 border-b-2 border-b-white flex justify-between gap-10 items-center">
            <h1 className="font-semibold text-xl w-9/12 text-center">To Do</h1>
            <div className="flex gap-3 text-gray-500">
              <FaPlus
                className="cursor-pointer"
                onClick={() => setOpen(true)}
              />
              <PiDotsThreeOutlineVerticalBold className="cursor-pointer" />
            </div>
          </div>
          <div className="content_wrapper mt-4">
            {/* TODO cards */}
            <div className="bg-white w-[350px] py-3 px-4 rounded-lg">
              <div>
                <div className="flex gap-2 items-baseline">
                  <h2 className="text-lg">
                    Navigation between pages is broken
                  </h2>
                  <PiDotsThreeOutlineVerticalBold className="text-gray-400 cursor-pointer" />
                </div>
                <div className="dev_member_wrapper flex gap-3">
                  <p className="flex mt-1 w-28 justify-center rounded-lg text-sm px-2 py-1 items-center bg-[#F2F2F2]">
                    <span>
                      <GoDotFill className="text-sm text-pink-600" />
                    </span>
                    <span className="text-sm">Front-end</span>
                  </p>
                </div>
                <p className="text-sm my-2">Deadline: 24/04/2024</p>
                <img
                  width={30}
                  src="images/member4.png"
                  alt="Developer Member"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="progress_wrapper h-[460px] overflow-hidden overflow-y-auto bg-[#FBFBFB] rounded-xl px-4 py-3">
          <div className="header pb-3 border-b-2 border-b-white flex justify-between gap-10 items-center">
            <h1 className="font-semibold text-xl w-9/12 text-center">
              In-progress
            </h1>
            <div className="flex gap-3 text-gray-500">
              <FaPlus
                className="cursor-pointer"
                onClick={() => setOpen(true)}
              />
              <PiDotsThreeOutlineVerticalBold className="cursor-pointer" />
            </div>
          </div>
          <div className="content_wrapper mt-4">
            {/* progress cards */}
            <div className="bg-white w-[350px] py-3 px-4 rounded-lg my-2">
              <div>
                <div className="flex gap-2 items-baseline">
                  <h2 className="text-lg">
                    Navigation between pages is broken
                  </h2>
                  <PiDotsThreeOutlineVerticalBold className="text-gray-400 cursor-pointer" />
                </div>
                <div className="dev_member_wrapper flex gap-3">
                  <p className="flex mt-1 w-28 justify-center rounded-lg text-sm px-2 py-1 items-center bg-[#F2F2F2]">
                    <span>
                      <GoDotFill className="text-sm text-pink-600" />
                    </span>
                    <span className="text-sm">Front-end</span>
                  </p>
                </div>
                <p className="text-sm my-2">Deadline: 24/04/2024</p>
                <img
                  width={30}
                  src="images/member4.png"
                  alt="Developer Member"
                />
              </div>
            </div>
            <div className="bg-white w-[350px] py-3 px-4 rounded-lg my-2">
              <div>
                <div className="flex gap-2 items-baseline">
                  <h2 className="text-lg">
                    Navigation between pages is broken
                  </h2>
                  <PiDotsThreeOutlineVerticalBold className="text-gray-400 cursor-pointer" />
                </div>
                <div className="dev_member_wrapper flex gap-3">
                  <p className="flex mt-1 w-28 justify-center rounded-lg text-sm px-2 py-1 items-center bg-[#F2F2F2]">
                    <span>
                      <GoDotFill className="text-sm text-pink-600" />
                    </span>
                    <span className="text-sm">Front-end</span>
                  </p>
                </div>
                <p className="text-sm my-2">Deadline: 24/04/2024</p>
                <img
                  width={30}
                  src="images/member4.png"
                  alt="Developer Member"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="done_wrapper h-[460px] overflow-hidden overflow-y-auto bg-[#FBFBFB] rounded-xl px-4 py-3">
          <div className="header pb-3 border-b-2 border-b-white flex justify-between gap-10 items-center">
            <h1 className="font-semibold text-xl w-9/12 text-center">Done</h1>
            <div className="flex gap-3 text-gray-500">
              <FaPlus
                className="cursor-pointer"
                onClick={() => setOpen(true)}
              />
              <PiDotsThreeOutlineVerticalBold className="cursor-pointer" />
            </div>
          </div>
          <div className="content_wrapper mt-4"></div>
        </div>

        <div
          onClick={() => setOpen(true)}
          className="addMore_wrapper cursor-pointer h-[460px] overflow-hidden overflow-y-auto bg-transparent border-2 border-dashed border-green-300 rounded-xl px-4 py-3"
        >
          <h2 className="text-center text-green-300">+ Add Panel</h2>
        </div>
      </div>

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
                          Title
                        </label>
                        <input
                          type="text"
                          className="focus:outline-none border border-gray-400 border-1 px-5 py-2 rounded-lg"
                          placeholder="Add a title for this task"
                        />
                      </div>
                      <div className="flex flex-col gap-3 mb-3">
                        <label className="text-lg font-semibold" htmlFor="">
                          Description
                        </label>
                        <textarea
                          type="text"
                          className="focus:outline-none border border-gray-400 border-1 px-5 py-2 rounded-lg"
                          placeholder="Add a description for this task"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="flex flex-col gap-3 mb-4">
                        <label className="text-lg font-semibold" htmlFor="">
                          Technology
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
                      <div className="flex flex-col gap-3 mb-4">
                        <label className="text-lg font-semibold" htmlFor="">
                          Category
                        </label>
                        <select
                          className="border bg-[#EFEFEF] border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center text-[#5E5E5E]"
                          name=""
                          id=""
                        >
                          <option value="" selected>
                            Front-end
                          </option>
                          <option value="">Back-end</option>
                        </select>
                      </div>
                      <div className="flex gap-3 mb-3">
                        <div className="w-6/12 flex flex-col">
                          <label className="text-lg font-semibold" htmlFor="">
                            Assigned to
                          </label>
                          <select
                          style={{padding:"10px 16px"}}
                            className="border bg-[#EFEFEF] border-gray-400 border-1 rounded-lg flex items-center w-100"
                            name=""
                            id=""
                          >
                            <option value="" selected>
                              Frank Allen
                            </option>
                            <option value="">Enrey Frank </option>
                          </select>
                        </div>
                        <div className="w-6/12 flex flex-col">
                          <label className="text-lg font-semibold" htmlFor="">
                            Deadline
                          </label>
                          <input
                            className="border bg-[#EFEFEF] border-gray-400 border-1 px-4 py-2 rounded-lg flex items-center text-[#5E5E5E]"
                            type="date"
                          />
                        </div>
                      </div>
                      <button className="mt-4 bg-[#37354C] text-white w-full  px-4 py-2 rounded-lg">
                        Create task
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default TaskBoard;
