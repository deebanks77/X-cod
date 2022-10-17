import React from "react";

function Note() {
  return (
    <div className="notepad absolute w-[189px] h-[175px] bg-white rounded-b-[20px] top-[0] left-[0] px-2 py-4">
      <div className="note w-8 h-2 bg-[#D9D9D9] rounded-md mb-2"></div>
      <div className="note w-28 h-2 bg-[#D9D9D9] rounded-md mb-2"></div>
      <div className="flex items-center gap-2">
        <div className="note w-14 h-2 bg-[#C88E49] rounded-md mb-2"></div>
        <div className="note w-5 h-2 bg-[#D9D9D9] rounded-md mb-2"></div>
      </div>

      <div className="note w-8 h-2 bg-[#D9D9D9] rounded-md mb-[11px]"></div>
      <div className="flex items-center gap-2">
        <div className="note w-4 h-4 bg-[#D9D9D9] rounded-[50%] mb-2"></div>
        <div className="note w-5 h-2 bg-[#D9D9D9] rounded-md mb-2"></div>
      </div>
    </div>
  );
}

export default Note;
