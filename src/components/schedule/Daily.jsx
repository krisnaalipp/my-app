import { Typography } from "@material-tailwind/react";
import SelectComponent from "./SelectComponent";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import DailyTable from "./DailyTable";

const Daily = () => {
  return (
    <div className="flex gap-8">
      <SelectComponent />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-end">
          <div className="flex w-fit items-center border border-gray-400 rounded-lg">
            <img src={ArrowLeft} alt="arrow-left" width={15} height={15} />
            <Typography className="font-bold">3 Mar - 9 Mar</Typography>
            <img src={ArrowRight} alt="" width={15} height={15} />
          </div>
        </div>
        <DailyTable />
      </div>
    </div>
  );
};

export default Daily;
