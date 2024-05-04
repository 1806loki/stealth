import { Candidate } from "@/models/models";
import { Pen, Box, FileOutput } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  candidates: Candidate[];
  onSelectCandidate: (candidate: Candidate) => void;
};

const CandidateScoreCard = ({ candidates, onSelectCandidate }: Props) => {
  if (!candidates?.length) {
    return <div>Loading.....</div>;
  }
  const handleCandidateDetails = (candidate: Candidate) => {
    onSelectCandidate(candidate);
  };
  return (
    <div className="rounded-lg w-1/3 bg-white">
      <div className="p-2 flex flex-col gap-3">
        <div className="flex justify-between text-lg font-bold items-center ">
          <h1 className=" ">Frontend Developer</h1>
          <h1 className="flex text-[#41BF8A] items-center gap-1">
            Active{" "}
            <Pen className=" text-gray-900 p-[2px] rounded  shadow" size={20} />
          </h1>
        </div>
        <div className="flex text-sm font-semibold text-gray-400 justify-between">
          <h1>Assignment Link</h1>
          <Link href="#" className="text-blue-500">
            https://tiny.url/asknakdna/
          </Link>
        </div>
        <div className="flex text-sm font-semibold text-gray-400 justify-between">
          <h1>Assignment Hour</h1>
          <h1>3 hours</h1>
        </div>
        <div className="flex text-sm font-semibold text-gray-400 justify-between">
          <h1>Assignment Ends at</h1>
          <h1>11 March 2024</h1>
        </div>
        <div className="flex mt-4 gap-2 text-xs font-bold    ">
          <button className="flex gap-2 items-center px-6 py-3 rounded-lg   hover:shadow focus:shadow active:shadow">
            <Box size={15} />
            <h1>TO REVIEW</h1>
          </button>
          <button className="flex gap-2 items-center px-4 py-3 rounded-lg  hover:shadow focus:shadow active:shadow">
            <FileOutput size={15} /> <h1>SHORTLISTED</h1>
          </button>
        </div>

        <table>
          <thead className="text-xs font-thin text-gray-400 text-left">
            <tr>
              <th>CANDIDATE</th>
              <th>SCORE</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => {
              return (
                <tr
                  className=" hover:bg-[#F0F0F0] active:bg-[#F0F0F0] focus:bg-[#F0F0F0]"
                  key={candidate.id}
                  onClick={() => handleCandidateDetails(candidate)}
                >
                  <td className="py-2  ">
                    <div className=" text-xs flex gap-2  ">
                      <Image
                        src={candidate.image}
                        alt={candidate.name}
                        width={30}
                        height={30}
                        objectFit="contain"
                        className="rounded-lg"
                      />
                      <div className="flex flex-col ">
                        <h1 className="font-bold   ">{candidate.name}</h1>
                        <h1 className="  text-gray-500  ">
                          {candidate.email}{" "}
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1
                      className={
                        candidate.testScores.totalScore >= 80
                          ? "text-[#41BF8A] font-bold"
                          : candidate.testScores.totalScore >= 50
                          ? "text-yellow-500 font-bold"
                          : "text-red-500 font-bold"
                      }
                    >
                      {candidate.testScores.totalScore} %
                    </h1>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateScoreCard;
