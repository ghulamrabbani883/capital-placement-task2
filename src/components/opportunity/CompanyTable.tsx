const CompanyTable = () => {
  return (
    <table className="w-full">
      <thead className=" ">
        <tr className="bg-gray-100 h-12 rounded-xl mb-3">
          <th className="px-3 text-start">Opportunity Name</th>
          <th className="px-3 text-start">Status</th>
          <th className="px-3 text-start">Applied</th>
          <th className="px-3 text-start">Recommended</th>
          <th className="px-3 text-start">Interview</th>
          <th className="px-3 text-start">Offere</th>
          <th className="px-3 text-start">Hired</th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-12 border-b border-gray-100" aria-rowspan={3}>
          <td className="px-3" rowSpan={3}>
            UX Internship
          </td>
          <td className="px-3">
            <p className="bg-green-400 rounded-full px-2 py-0 opacity-50 text-black font-medium w-fit ">
              Active
            </p>
          </td>
          <td className="px-3">20</td>
          <td className="px-3">17</td>
          <td className="px-3">4</td>
          <td className="px-3">3</td>
          <td className="px-3">1</td>
        </tr>
        <tr className="h-12 border-b border-gray-100">
          <td className="px-3">
            <p className="bg-pink-400 rounded-full px-2 py-0 opacity-50 text-black font-medium w-fit ">
              Disqualified
            </p>
          </td>
          <td className="px-3">7</td>
          <td className="px-3">4</td>
          <td className="px-3">1</td>
          <td className="px-3">1</td>
          <td className="px-3">1</td>
        </tr>
        <tr className="h-12 bg-back">
          <td className="px-3 font-medium ">Subtotal</td>
          <td className="px-3 font-medium">27</td>
          <td className="px-3 font-medium">21</td>
          <td className="px-3 font-medium">5</td>
          <td className="px-3 font-medium">4</td>
          <td className="px-3 font-medium">2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CompanyTable;
