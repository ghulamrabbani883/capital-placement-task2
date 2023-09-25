import { flowData } from "../../data/data";

const CandidatesFlow = () => {
  return (
    <div className="bg-white w-full h-fit p-5 rounded-lg flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium text-gray-800">
          Total Candidate Flow
        </h3>
        <b className="text-2xl">4,567</b>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full flex items-center justify-center">
        <div className="w-[78%] h-3 bg-green-300 rounded-full flex items-center justify-center text-xs">
          78%
        </div>
        <div className="w-[22%] h-3 bg-red-300 rounded-full flex items-center justify-center text-xs">
          22%
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="h-10">
            <th className="text-start w-[50%]">Stage</th>
            <th className="text-start">Qualified</th>
            <th className="text-start">Disqualified</th>
          </tr>
        </thead>
        <tbody>
          {flowData.map((flow, index) => (
            <tr className="h-10" key={index}>
              <td className="text-start">{flow.stage}</td>
              <td className="text-start">{flow.qualified}</td>
              <td className="text-start">{flow.disqualified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesFlow;
