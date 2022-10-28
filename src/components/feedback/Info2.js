import React from "react";

function Info2({ data }) {
  return (
    <div className="flex flex-col items-center font-[poppins] mb-4">
      <div className="w-[100px] h-[100px]">
        <img
          src={`https://www.freeiconspng.com/thumbs/face-icon-png/blank-face-person-icon-7.png`}
          alt=""
          className="w-[100%] h-[100%] object-contain mb-2"
        />
      </div>

      <p className="text-[crimson] uppercase">{data.name}</p>
      <p className="text-[14px]">{data.job}</p>
    </div>
  );
}

export default Info2;
