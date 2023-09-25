import { useState } from "react";
import { RiArrowDownSLine, RiArticleLine } from "react-icons/ri";

const Filter = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const fills = [
    "Personal Information",
    "Education",
    "Work Experience",
    "Activity Filter",
    "Advance Filter",
  ];
  const handleSetFilter = (filter:string)=>{
    if(!filters.includes(filter)){
      setFilters((prev)=>{
        return [...prev, filter]
      })
    }
  }
  return (
    <div className="bg-white w-full h-fit pt-3 rounded">
      <div className="w-full h-fit flex justify-between items-center border-b border-b-gray-400 pb-2 px-3">
        <p className="font-medium text-normal">Filters</p>
        <span className="text-sm font-light text-gray-500 ">
          {filters?.length} selected
        </span>
      </div>
      <div className="">
        {fills.map((fill, index) => (
          <div
            className="w-full h-fit py-3 cursor-pointer flex justify-between items-center border-b border-b-gray-300 pb-2 px-2"
            key={index}
          >
            <div
              className="flex gap-3 items-center"
              onClick={()=>handleSetFilter(fill)
              }
            >
              <RiArticleLine className="text-gray-600" size={18} />
              <p className="font-normal text-gray-800">{fill}</p>
            </div>
            <span className="text-sm font-light text-gray-500 ">
              <RiArrowDownSLine />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
