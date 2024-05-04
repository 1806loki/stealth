"use client";

import CandidateDetailsCard from "@/components/Candidate-Details-Card";
import CandidateScoreCard from "@/components/Candidate-Score-Card";
import { Candidate } from "@/models/models";
import { fetchCandidateData } from "@/utils/api";
import { useEffect, useState } from "react";

const Home = () => {
  const [candidatesData, setCandidatesData] = useState<Candidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCandidateData();
      if (data) {
        setCandidatesData(data);
        console.log(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" w-screen h-screen bg-[#F8F9FA]">
      <div className="p-4">
        <div>
          <h1 className="text-gray-400 text-sm font-semibold">
            Pages / <span className="text-gray-900">Assignment</span>
          </h1>
          <h1 className="font-bold text-sm">Frontend Developer</h1>
        </div>
      </div>
      <div className="flex gap-2">
        <CandidateScoreCard
          candidates={candidatesData}
          onSelectCandidate={setSelectedCandidate}
        />
        <CandidateDetailsCard candidate={selectedCandidate} />
      </div>
    </div>
  );
};

export default Home;
