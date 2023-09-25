import { useState } from "react";
import Search from "../Search";

const TableNavbar = () => {
  const opportunityFilter = [
    "Applied",
    "Recommended",
    "Interview",
    "Offer",
    "Hire",
    "Rejected",
  ];
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    setSearch("");
  };

  return (
    <div className="w-full px-10">
      <h3 className="">Detailed opportunity overview</h3>
      <div className="w-full flex justify-between items-center">
        <div className="w-[40%]">
          <Search
            search={search}
            handleSearchChange={handleSearchChange}
            handleSearch={handleSearch}
          />
        </div>

        <select className="w-[20%] h-10 outline-none rounded px-2 pr-2 text-gray-600 font-medium border border-gray-500 cursor-pointer">
          {opportunityFilter.map((opp, index) => (
            <option value={opp} key={index}>
              {opp}
            </option>
          ))}
        </select>
        <button className="w-[20%] h-10 outline-none bg-white rounded px-2 pr-2 text-blue-400 font-medium border border-gray-500 cursor-pointer">
          Export all as CSV
        </button>
      </div>
    </div>
  );
};

export default TableNavbar;
