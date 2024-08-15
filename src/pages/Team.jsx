import { useCallback, useState } from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";
import HeaderTitle from "../components/Title/HeaderTitle";
import { useContextValue } from "../context";
import CardFavTeam from "../components/CardFavTeam";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import { CiSearch } from "react-icons/ci";

const Team = () => {
  const { teamData } = useContextValue();
  const [open, setOpen] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit =(e)=> e.preventDefault();
  return (
    <>
      <Container>
        <div className="heading flex items-center gap-10">
          <HeaderTitle title={`My Teams`} subTitle={`Teams`} />
          <button
            onClick={() => setOpen(true)}
            className="bg-[#60cea747] mr-3 my-3 px-4 text-sm lg:mr-8 lg:px-6 rounded py-1 text-[#60CEA7] hover:bg-[#60cea747]"
          >
            Add new team
          </button>
        </div>
        <div className="content_wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
          {teamData.map((elem, index) => {
            return <CardFavTeam elem={elem} key={index} />;
          })}
        </div>
      </Container>

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
                          Team name
                        </label>
                        <input
                          type="text"
                          className="focus:outline-none border border-gray-400 border-1 px-5 py-2 rounded-lg"
                          placeholder="Add a name for your team"
                        />
                      </div>
                      <div className="flex flex-col gap-3 mb-3">
                        <label className="text-lg font-semibold" htmlFor="">
                          Sector
                        </label>
                        <input
                          type="text"
                          className="focus:outline-none border border-gray-400 border-1 px-5 py-2 rounded-lg"
                          placeholder="Add a sector for your team"
                        />
                      </div>
                      <div className="flex flex-col gap-3 mb-3">
                        <label className="text-lg font-semibold" htmlFor="">
                          Logo
                        </label>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here ...</p>
                          ) : (
                            <div className="text-center border border-gray-400 rounded-lg py-3">
                              <img
                                className="m-auto"
                                src="images/agregar.svg"
                                alt="Image Icon"
                              />
                              <p>Drop an image or click to choose</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 mb-3">
                        <label className="text-lg font-semibold" htmlFor="">
                          Members
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
                      <button className="mt-4 bg-[#37354C] text-white w-full  px-4 py-2 rounded-lg">Create team</button>
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

export default Team;
