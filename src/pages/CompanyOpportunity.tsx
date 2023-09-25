import OpportunityOverview from "../components/opportunity/OpportunityOverview";

const CompanyOpportunity = () => {
  const arr = [1, 2, 3];
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="px-10 pt-5 flex justify-between">
        <p className="text-lg font-medium text-blue-500">
          Opportunity Overview
        </p>
        <p className="">London Intership Program</p>
      </div>
      {arr.map((ar) => (
        <div className="w-full h-full" key={ar}>
          <h2 className="font-medium text-lg px-10 py-5">UX Interships</h2>
          <OpportunityOverview />
        </div>
      ))}
    </div>
  );
};

export default CompanyOpportunity;
