import { BarProps } from "@/models/models";

const Bar: React.FC<BarProps> = ({ progress }) => {
  let colorClass = progress >= 80 ? "green" : progress > 50 ? "yellow" : "red";

  return (
    <div className="w-full flex items-center gap-4">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex items-center">
        <div
          className={`h-full bg-${colorClass}-500`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <h1
        className={
          progress >= 80
            ? "text-[#41BF8A] text-sm font-semibold"
            : progress >= 50
            ? "text-yellow-500 text-sm font-semibold"
            : "text-red-500 text-sm font-semibold"
        }
      >
        {progress}/100
      </h1>
    </div>
  );
};

export default Bar;
