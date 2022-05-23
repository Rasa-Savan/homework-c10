import React from "react";

function CovidCard({ title, number, color }) {
  return (
    <div className="bg-gray-200 w-48 flex flex-col items-center py-5 shadow-xl rounded-lg">
      <p className={`text-[${color}] text-xl boonhome`}>{title}</p>

      <p className={`text-[${color}] font-extrabold text-3xl boonhome`}>
        {number?.toLocaleString("en-US")} <span className="text-lg"> ຄົນ</span>
      </p>
    </div>
  );
}

export default CovidCard;
