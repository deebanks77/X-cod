import React from "react";

function Info2({ data }) {
  return (
    <div className="flex flex-col items-center font-[poppins] mb-3">
      <div className="w-[70px] h-[70px] mb-2">
        <img
          src={data.icon}
          alt=""
          className="w-[100%] h-[100%] object-contain"
        />
      </div>

      <p className="text-[crimson] uppercase font-[600]">{data.name}</p>
      <p className="text-[14px] text-gray-800">{data.job}</p>
    </div>
  );
}

export default Info2;
