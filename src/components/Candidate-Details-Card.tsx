import Image from "next/image";
import Bar from "./Bar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Candidate } from "@/models/models";

type Props = {
  candidate: Candidate | null;
};

const CandidateDetailsCard = ({ candidate }: Props) => {
  if (!candidate) {
    return (
      <div className="w-2/3 h-full bg-white">
        <div className="w-full h-full flex items-center justify-center   ">
          <h1>No Candidate is Selected</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-2/3 h-full bg-white">
      <div className="p-2 flex ">
        <div className="w-1/2 ">
          <div className="p-2">
            <div className="flex  items-center justify-between ">
              <div className="flex gap-4 items-center">
                <Image
                  src={candidate.image}
                  alt={candidate.name}
                  width={50}
                  height={50}
                  objectFit="contain"
                  className="rounded-lg"
                />
                <div className="flex flex-col ">
                  <h1 className="font-bold font-sm  ">{candidate?.name}</h1>
                  <h1 className="  text-gray-500 text-xs  ">
                    {candidate.email}
                  </h1>
                </div>
              </div>
              <h1
                className={`${
                  candidate.testScores.totalScore >= 80
                    ? "text-[#41BF8A]"
                    : candidate.testScores.totalScore >= 50
                    ? "text-yellow-500"
                    : "text-red-500"
                } text-xl font-bold`}
              >
                {candidate.testScores.totalScore}%
              </h1>
            </div>
            <div className="my-6">
              <div className="flex gap-4 my-2">
                <h1 className="text-sm text-gray-400 text-left">programming</h1>
                <Bar
                  progress={candidate.testScores.individualScores.programming}
                />
              </div>
              <div className="flex gap-4 my-2">
                <h1 className="text-sm text-gray-400 text-left">
                  problemSolving{" "}
                </h1>
                <Bar
                  progress={
                    candidate.testScores.individualScores.problemSolving
                  }
                />
              </div>
              <div className="flex gap-4 my-2">
                <h1 className="text-sm text-gray-400 text-left">
                  communication
                </h1>
                <Bar
                  progress={candidate.testScores.individualScores.communication}
                />
              </div>
            </div>
            <div>
              <div className="py-3">
                <h1 className="font-bold ">About</h1>
                <p className="text-xs">{candidate.about}</p>
              </div>
              <div className="py-3">
                <h1 className="font-bold ">Experience</h1>
                <p className="text-xs">{candidate.experience}</p>
              </div>{" "}
              <div className="py-3">
                <h1 className="font-bold "> Hobbies</h1>
                <p className="text-xs">{candidate.hobbies.join(", ")}</p>
              </div>
              <div className="py-3">
                <h1 className="font-bold ">Introduction</h1>
                <p className="text-xs">{candidate.introduction}</p>
              </div>
              <div className="py-3 flex justify-center">
                <button className="bg-[#1EC3B3]  hover:bg-[#1ec3b3a9]  text-sm  px-16 py-1 text-white font-bold rounded-lg">
                  SHORTLIST
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2  bg-[#718096] rounded-lg">
          <div className="w-full">
            <Image
              src={candidate.image}
              alt={candidate.name}
              height={600}
              width={600}
              objectFit="contain"
              className="mt-14"
            />
            <div className="bg-black text-white w-full   ">
              <div className="flex justify-evenly items-center py-2">
                <ArrowLeft className="bg-[#718096] p-2 rounded-lg" size={40} />
                <div className="flex flex-col items-center">
                  <h1>Tell me about yourself</h1>
                  <h1>Questions 1/11</h1>
                </div>
                <ArrowRight className="bg-[#718096] p-2 rounded-lg" size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsCard;



