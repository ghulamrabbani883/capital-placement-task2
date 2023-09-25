import { GrLineChart } from "react-icons/gr";
import OpportunityChart from "./OpportunityChart";
import CandidatesFlow from "./CandidatesFlow";
import { boxData } from "../../data/data";

const OpportunityBox = ({ data, displayType }: any) => {
  const keys = Object.keys(data);
  const values: number[] = Object.values(data);
  return (
    <div
      className={`flex-1 bg-white h-fit p-3 rounded-lg flex flex-col ${
        displayType === "column" ? "gap-3" : "gap-2"
      }`}
    >
      <div
        className={`flex ${
          displayType === "column"
            ? "flex-col gap-3"
            : "flex-row justify-between gap-2"
        } `}
      >
        <p className="font-semibold text-lg">{keys[0]}</p>
        <b className="text-xl">{values[0]}</b>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg">{keys[1]}</p>
        <div className="flex gap-3">
          <span className="w-fit text-base">{values[1]}</span>
          <div className="w-fit h-fit px-3 py-1 bg-gray-300 opacity-70 flex gap-2 rounded-full items-center justify-center">
            <GrLineChart size={10} />
            <p className="text-xs">{values[2]}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const OpportunityOverview = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex-1 flex flex-col gap-4 px-10 pb-5 ">
        <div className="w-full flex gap-5">
          {boxData.slice(0, 3).map((data, index) => (
            <OpportunityBox data={data} displayType={"column"} key={index} />
          ))}
        </div>
        <OpportunityChart />
      </div>
      <div className="flex-1 flex flex-col gap-4 px-10 pb-5">
        <CandidatesFlow />
        <div className="w-full flex gap-5">
          {boxData.slice(3, boxData.length).map((data, index) => (
            <OpportunityBox data={data} displayType={"row"} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunityOverview;
