import { GoDotFill } from "react-icons/go";

const ProjectDataHover = () => {
  return (
    <>
      <div style={{zIndex:1000}} className="relative card_hover_content bg-white w-[350px] py-2 px-3 rounded-lg">
        <div>
          <h2 className="text-lg">Navigation between pages is broken</h2>
          <div className="dev_member_wrapper flex gap-3">
            <p className="flex mt-1 w-28 justify-center rounded-lg text-sm px-2 py-1 items-center bg-[#F2F2F2]">
              <span>
                <GoDotFill className="text-sm text-pink-600" />
              </span>
              <span className="text-sm">Front-end</span>
            </p>
            <img width={30} src="images/member4.png" alt="Developer Member" />
          </div>
          <p className="text-sm my-2">
            Deadline: 24/04/2024{" "}
            <span className="text-red-500"> (11 days delayed)</span>
          </p>
          <span className="mt-1 font-bold w-30 rounded-lg text-sm px-2 py-1 text-center bg-[#F2F2F2]">
            SAP Analytics Cloud
          </span>
        </div>
        <hr className="my-3" />
        <div>
          <h2 className="text-lg">Navigation between pages is broken</h2>
          <div className="dev_member_wrapper flex gap-3">
            <p className="flex mt-1 w-28 justify-center rounded-lg text-sm px-2 py-1 items-center bg-[#F2F2F2]">
              <span>
                <GoDotFill className="text-sm text-pink-600" />
              </span>
              <span className="text-sm">Front-end</span>
            </p>
            <img width={30} src="images/member4.png" alt="Developer Member" />
          </div>
          <p className="text-sm my-2">
            Deadline: 24/04/2024{" "}
            <span className="text-red-500"> (11 days delayed)</span>
          </p>
          <span className="mt-1 font-bold w-30 rounded-lg text-sm px-2 py-1 text-center bg-[#F2F2F2]">
            SAP Analytics Cloud
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectDataHover;
