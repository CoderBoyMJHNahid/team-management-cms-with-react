import { Handle, Position } from "@xyflow/react";
import { GoDotFill } from "react-icons/go";

const CustomNode = ({ data }) => {
  return (
    <div style={{zIndex:-100}} className="card_wrapper w-[200px] p-2 relative rounded-xl bg-white shadow-md">
      <h2 className="text-sm">
        <b>Task:</b> {data.label || "Title Project"}
      </h2>
      <p className="flex mt-1 w-28 justify-center rounded-lg text-sm px-2 py-1 items-center bg-[#F2F2F2]">
        <span>
          <GoDotFill className="text-xl text-pink-600" />
        </span>
        <span className="text-sm">{data.subLabel || "Front-end"}</span>
      </p>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default CustomNode;
