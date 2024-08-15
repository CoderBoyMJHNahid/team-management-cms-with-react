import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { IoClose } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { useContextValue } from "../context";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const RecentNotification = () => {
  const [open, setOpen] = useState(false);
  const { notifications } = useContextValue();
  return (
    <>
      <div className="notification_wrapper p-4 bg-white rounded-xl">
        <h3 className="flex justify-center items-center">
          <BsBellFill className="mr-2 text-xl" />
          <span className="text-xl font-semibold">Recent Notifications</span>
        </h3>

        <div className="notification_list_wrapper mt-12 text-center">
          <ul className="text-start mb-10">
            {notifications.map((elem, index) => (
              <li key={index} className="flex items-center gap-3 my-2">
                <img
                  src={elem.image}
                  className="h-8 w-8 rounded-lg"
                  alt="notification icon"
                />
                <span>{elem.title}</span>
              </li>
            ))}
          </ul>

          <hr />
          <button onClick={() => setOpen(true)} className="hover:bg-transparent text-gray-500 mt-3">
            See All
          </button>
        </div>

        {/* modal */}
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
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
                    >
                      Recent notifications
                    </DialogTitle>
                    <div className="mt-2">
                      <ul className="text-start mb-10">
                        {notifications.map((elem, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 my-2"
                          >
                            <img
                              src={elem.image}
                              className="h-8 w-8 rounded-lg"
                              alt="notification icon"
                            />
                            <span>{elem.title}</span>
                            <span>
                              {elem.type == 2 ? (
                                <div className="m-auto w-6 bg-[#60CEA7] py-1 rounded-full">
                                  <NavLink to={`/`}>
                                    <FaEye className="m-auto text-sm text-white" />
                                  </NavLink>
                                </div>
                              ) : (
                                <div className="flex gap-2">
                                  <div className="m-auto w-7 bg-[#60CEA7] py-[7px] rounded-full">
                                    <NavLink to={`/`}>
                                      <FaCheck className="m-auto text-sm text-white" />
                                    </NavLink>
                                  </div>
                                  <div className="m-auto w-7 bg-red-500 py-[7px] rounded-full">
                                    <NavLink to={`/`}>
                                      <IoClose className="m-auto text-sm text-white" />
                                    </NavLink>
                                  </div>
                                </div>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default RecentNotification;
