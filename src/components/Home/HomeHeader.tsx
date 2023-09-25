import {IoIosArrowDown, IoIosCheckboxOutline} from 'react-icons/io'
import {BiUserX, BiUserVoice, BiUserCheck} from 'react-icons/bi'
import {CiMail} from 'react-icons/ci'
const HomeHeader = () => {
  const opportunities: string[] = [
    "Applied",
    "Shortlisted",
    "Technical interview",
    "Opportunity browsing",
    "Video interview I",
    "Video interview II",
    "Video interview III",
    "Offer",
    "Withdrawn",
  ];
  return (
    <header className="w-full h-fit flex justify-between items-center">
      <div className="">
        <select className="w-80 h-10 outline-none rounded-xl px-2 pr-2 text-blue-600 font-medium">
          <option>Opportunity browsing</option>
          {opportunities.map((opportunity, index) => (
            <option className='font-normal text-gray-800 border-b' key={index} value={opportunity}>
              {opportunity}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-5">
            <ul className="flex gap-3 list-none">
                <li className='w-fit h-fit p-2 bg-white rounded cursor-pointer'>
                    <IoIosCheckboxOutline size={24} />
                </li>
                <li className='w-fit h-fit p-2 bg-white rounded  cursor-pointer'>
                    <BiUserX size={24} />
                </li>
                <li className='w-fit h-fit p-2 bg-white rounded cursor-pointer'>
                    <BiUserCheck size={24} />
                </li>
                <li className='w-fit h-fit p-2 bg-white rounded cursor-pointer'>
                    <BiUserVoice size={24} />
                </li>
                <li className='w-fit h-fit p-2 bg-white rounded cursor-pointer'>
                    <CiMail size={24} />
                </li>
            </ul>
            <div className="flex bg-blue-600 h-10 w-48 text-white">
                <p className='border-r border-r-white w-full flex justify-center items-center cursor-pointer'>Move to interview</p>
                <IoIosArrowDown className="w-fit h-fit p-2 cursor-pointer" size={20} />
            </div>
      </div>
    </header>
  );
};

export default HomeHeader;
