import { useEffect, useState } from "react";
import Candidates from "../components/Home/Candidates";
import Filter from "../components/Home/Filter";
import HomeHeader from "../components/Home/HomeHeader";
import Search from "../components/Search";
import candidates from "../data/candidates.json";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<{}[]>([]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const data = candidates.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.experience.toLowerCase().includes(search.toLowerCase()) ||
        item.city.toLowerCase().includes(search.toLowerCase()) ||
        item.country.toLowerCase().includes(search.toLowerCase()) ||
        item.education.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFiltered(data);
  };
  const handleSearch = () => {
    setSearch("");
    setFiltered(candidates);
  };
  useEffect(() => {
    setFiltered(candidates);
  }, []);
  return (
    <main className="w-full min-h-screen flex">
      <div className="w-1/4 flex flex-col gap-5 py-8 px-8">
        <div className="">
          <h2 className="font-medium text-blue-500 ">
            London Intership program
          </h2>
          <p className="text-gray-600">London</p>
        </div>
        <Search
          search={search}
          handleSearchChange={handleSearchChange}
          handleSearch={handleSearch}
        />
        <Filter />
      </div>
      <div className="w-3/4 py-8 pr-10 flex flex-col gap-5">
        <HomeHeader />
        <div className="bg-white rounded-full">
          <div className="flex justify-between items-center h-14 px-5 rounded-t-lg border-b border-b-gray-400 bg-white">
            <div className="flex gap-5 items-center">
              <input className="w-4 h-4" type="checkbox" />
              <p className="text-blue-600 font-medium text-md">
                {filtered?.length} Candidates
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 bg-gray-50 w-fit h-fit px-3 py-1 rounded-full">
                <p className="font-normal text-blue-600">Qualified:</p>
                <b>115</b>
              </div>
              <div className="flex gap-2 bg-gray-50 w-fit h-fit px-3 py-1 rounded-full">
                <p className="font-normal text-gray-600">Task:</p>
                <b>50</b>
              </div>
              <div className="flex gap-2 bg-gray-50 w-fit h-fit px-3 py-1 rounded-full">
                <p className="font-normal text-gray-600">Disqualified:</p>
                <b>100</b>
              </div>
            </div>
          </div>
          {filtered.length > 0 ? (
            <div className="bg-white w-full min-h-fit">
              {filtered?.map((candidate, index) => (
                <Candidates candidate={candidate} key={index} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center py-10">
              <h2 className="text-red-400">No data found on search</h2>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
