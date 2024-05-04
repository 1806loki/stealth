import { BarProps } from "@/models/models";

 
const Bar: React.FC<BarProps> = ({ progress }) => {
  const getColorClass = (progress: number): string => {
    if (progress >= 80) return "green";
    if (progress >= 50) return "yellow";
    return "red";
  };

  const colorClass = getColorClass(progress);

  return (
    <div className="w-full flex items-center gap-4">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex items-center">
        <div
          className={`h-full bg-${colorClass}-500`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <h1 className={`text-${colorClass}-900 text-sm font-semibold`}>
        {progress}/100
      </h1>
    </div>
  );
};

export default Bar;
