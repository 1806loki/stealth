import { BarProps } from "@/models/models";

const Bar: React.FC<BarProps> = ({ progress }) => {
  let colorClass = "bg-red-500";

  if (progress >= 80) {
    colorClass = "bg-green-500";
  } else if (progress > 50) {
    colorClass = "bg-yellow-500";
  }

  return (
    <div className="w-full flex items-center gap-2">
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden ">
        <div
          className={"h-full " + colorClass}
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
