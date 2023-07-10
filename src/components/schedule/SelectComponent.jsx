import { Option, Select, Typography } from "@material-tailwind/react";
import PlusIcon from "../../assets/plus.svg";
import PencilIcon from "../../assets/pencil.svg";
import TrashIcon from "../../assets/trash.svg";

const SelectComponent = () => {
  const times = [
    "7.30 am - 3.25 pm",
    "7.30 am - 3.25 pm",
    "7.30 am - 3.25 pm",
    ,
    "7.30 am - 3.25 pm",
    ,
    "7.30 am - 3.25 pm",
    ,
    "7.30 am - 3.25 pm",
    ,
    "7.30 am - 3.25 pm",
    ,
    "7.30 am - 3.25 pm",
  ];

  return (
    <div className="flex flex-col gap-3 w-1/4">
      <div>
        <Select label="Select Departement" color="gray">
          <Option>Lorem Ipsum</Option>
        </Select>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between rounded-b-none items-center p-2 border border-gray-800 rounded-lg">
          <Typography className="text-gray-800 text-sm font-bold">
            Add Schedule
          </Typography>
          <img src={PlusIcon} alt="plus" width={20} height={20} />
        </div>
        <div className="overflow-y-auto h-64 flex flex-col gap-4">
          {times.map((el) => {
            return (
              <div className="p-2 border border-gray-500 w-[90%] rounded-md flex justify-between">
                <Typography variant="md">{el}</Typography>
                <div className="flex gap-2">
                  <img src={PencilIcon} alt="pencil" width={20} height={20} />
                  <img src={TrashIcon} alt="trash" width={20} height={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
