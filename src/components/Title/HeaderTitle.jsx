import React from "react";

const HeaderTitle = ({title,subTitle}) => {
  return (
    <>
      <div className="text_wrapper">
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="text-[#7D7D7D]">{subTitle}</p>
      </div>
    </>
  );
};

export default HeaderTitle;
