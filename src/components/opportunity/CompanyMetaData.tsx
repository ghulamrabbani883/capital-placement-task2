import { Link } from "react-router-dom";
import CompanyTable from "./CompanyTable";
import { CiStickyNote, CiClock2 } from "react-icons/ci";
import { metaData } from "../../data/data";

const MetaDataBox = ({ data }: any) => {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-fit p-2 rounded-xl bg-white border shadow-sm border-gray-200">
      <p>{data.title}</p>
      <b>{data.quantity}</b>
    </div>
  );
};
const CompanyMetaData = () => {
  
  const google = 'google'
  return (
    <div className="w-full px-10">
      <div className="w-full p-5 flex flex-col gap-5 rounded-xl bg-white">
        <div className="w-full">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-semibold text-lg">Google</h3>
            <div className="flex gap-5">
              <Link to={`/opportunity/${google}`}>
                <CiClock2 className="cursor-pointer" size={28} />
              </Link>
              <CiStickyNote className="cursor-pointer" size={28} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            {metaData.map((meta, index) => (
              <MetaDataBox data={meta} key={index} />
            ))}
          </div>
        </div>
        <CompanyTable />
      </div>
    </div>
  );
};

export default CompanyMetaData;
