const CustomEdgeLabel = ({ data }) => {
  return (
    <div className="px-2 py-1 rounded-lg border-1 text-white text-sm">
      {data.text || "Custom Label"}
    </div>
  );
};

export default CustomEdgeLabel;
