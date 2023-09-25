import { RxCross2 } from "react-icons/rx";

const Search = ({ search, handleSearchChange, handleSearch }: any) => {
  return (
    <div className="bg-white w-full h-10 p-1 flex justify-between items-center rounded border border-gray-400">
      <input
        className="w-full h-full outline-none p-2"
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="search here"
      />
      {search.length > 0 && (
        <RxCross2
          onClick={handleSearch}
          className="w-10 text-gray-600 cursor-pointer"
          size={24}
        />
      )}
    </div>
  );
};

export default Search;
