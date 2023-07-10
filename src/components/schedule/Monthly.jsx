import { Button, Option, Select } from "@material-tailwind/react";
import MonthlyTable from "./MonthlyTable";

const Monthly = () => {
  return (
    <div>
      <div className="flex mb-5 justify-between">
        <div className="flex gap-2">
          <Select label="2022" color="gray" className="text-black">
            <Option>2021</Option>
            <Option>2021</Option>
          </Select>
          <Select label="January" color="gray" className="text-black">
            <Option>February</Option>
            <Option>Maret</Option>
          </Select>
        </div>
        <Button color="blue">Set Schedule</Button>
      </div>
      <MonthlyTable />
    </div>
  );
};

export default Monthly;
