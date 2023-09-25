// type Candidate = {
//     name:string,
//     email:string,
//     phone:string,
//     education:string,
//     experience:string,
//     city:string,
//     country:string,
//     projects:string[]
// }
const Candidates = ({ candidate }: any) => {
  const experience = candidate.experience.split(",");
  const names = candidate.name.split(" ")
  return (
    <div className="w-full h-fit px-5 py-5 bg-white flex gap-6 items-center border-b border-b-gray-300">
      <input className="w-4 h-4 bg-green-600" type="checkbox" />
      <div className="w-10 h-10 rounded-full cursor-pointer bg-gray-300 flex justify-center items-center text-blue-300 font-medium text-xl">
        {names[0].charAt(0)}
        {names[1].charAt(0)}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl text-gray-800">{candidate?.name}</h3>
        <h4 className="font-medium text-lg text-gray-700">
          {candidate?.city} {candidate?.country}
        </h4>
        <p className="font-normal">{candidate?.education}</p>
        <div className="flex gap-3">
          {experience?.map((exp: string, index: number) => (
            <p
              className="font-medium text-sm w-fit h-fit py-1 px-2 bg-gray-50 text-green-600 rounded-md"
              key={index}
            >
              {exp}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidates;
