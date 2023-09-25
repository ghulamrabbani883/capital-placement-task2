import CompanyMetaData from "../components/opportunity/CompanyMetaData";
import OpportunityOverview from "../components/opportunity/OpportunityOverview";
import TableNavbar from "../components/opportunity/TableNavbar";

const Opportunity = () => {

    return (
    <div className="w-full min-h-screen flex flex-col gap-8">
      <div className="">
        <div className="px-10 py-5 flex justify-between">
          <p className="text-lg font-medium text-blue-500">Opportunity Overview </p>
          <p className="">London Intership Program</p>
        </div>
        <OpportunityOverview />
      </div>{" "}
      <TableNavbar />
      <CompanyMetaData />
      <CompanyMetaData />
      <CompanyMetaData />
    </div>
  );
};

export default Opportunity;
