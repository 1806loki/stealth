//Candidate DummyData Interface

export interface Candidate {
    id: number;
    name: string;
    email: string;
    image: string;
    about: string;
    experience: string;
    hobbies: string[];
    introduction: string;
    testScores: {
        totalScore: number;
        individualScores: {
            programming: number;
            problemSolving: number;
            communication: number;
        };
        questions: {
            question: string;
            answer: string;
        }[];
    };
}

//Bar Component Interface
export interface BarProps {
    progress: number;
}