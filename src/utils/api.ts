import { CandidateData } from "@/config/dummyData";
import { Candidate } from "@/models/models";


export const fetchCandidateData = async (): Promise<Candidate[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return CandidateData;
};
