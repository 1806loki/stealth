import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Home, Plus } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-[#F8F9FA] text-gray-700 ">
      <div className=" h-full flex flex-col px-4">
        <div className="p-4 flex items-center shadow">
          <Image
            src="/creative_tim_logo.jpeg"
            alt="logo"
            width={40}
            height={40}
            objectFit="contain"
          />
          <h1 className="text-sm font-bold">Hi, AltWorld</h1>
        </div>
        <div className="py-8 px-4">
          <div>
            <div className="flex group">
              <Link href="#" className="flex items-center gap-4 ">
                <Home
                  size={20}
                  className="group-hover:text-[#4FD1C5] group-focus:text-[#4FD1C5]"
                />
                <h3 className="text-sm font-bold  ">Dashboard</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative bg-[#4FD1C5] rounded-2xl text-white w-60 overflow-hidden">
          
          <div className="p-4 flex flex-col gap-2  ">
            <Plus className="text-gray-500 bg-white p-1 rounded-lg" size={30} />
            <h3 className="font-bold text-sm">New Assignment?</h3>
            <p className="text-xs">
              Select from pre-defined questions to have a quick turnaround
            </p>
            <button className="text-xs text-black p-2 bg-white font-bold rounded-xl">
              Create New Assignment
            </button>
          </div>
          <div className="absolute bottom-0 right-0   flex items-center justify-center   ">
            <div className="absolute w-[64px] h-[64px] border-[1px] rounded-full"></div>
            <div className="absolute w-[128px] h-[128px] border-[1px] rounded-full"></div>
            <div className="absolute w-[200px] h-[200px] border-[1px] rounded-full"></div>
            <div className="absolute w-[280px] h-[280px] border-[1px] rounded-full"></div>
            <div className="absolute w-[350px] h-[350px] border-[1px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
