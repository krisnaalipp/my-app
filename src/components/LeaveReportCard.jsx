import { Card, Typography } from "@material-tailwind/react";
import ProgressBarChart from "./StackedBarChart";
import BarChart from "./BarChart";
import LeaveIcon from "../assets/leave.svg";
import UpIcon from "../assets/arrow-up.svg";
import CalendarBlue from "../assets/calendar.svg";
import SadEmot from "../assets/sad-emot.svg";
import Other from "../assets/other.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import AvatarImg from "../assets/avatar.svg";
import Table from "./Table";

const LeaveReport = () => {
  const tableHead = ["Employees", "Type of Leaves", "Total Days"];

  const tableData = [
    {
      name: "John",
      img: AvatarImg,
      typeofleaves: "medical leave",
      totalDays: 20,
    },
    {
      name: "Alice",
      img: AvatarImg,
      typeofleaves: "sick leave",
      totalDays: 15,
    },
    {
      name: "Bob",
      img: AvatarImg,
      typeofleaves: "vacation",
      totalDays: 10,
    },
    {
      name: "Bob",
      img: AvatarImg,
      typeofleaves: "vacation",
      totalDays: 10,
    },
    {
      name: "Bob",
      img: AvatarImg,
      typeofleaves: "vacation",
      totalDays: 10,
    },
    {
      name: "Bob",
      img: AvatarImg,
      typeofleaves: "vacation",
      totalDays: 10,
    },
    {
      name: "Bob",
      img: AvatarImg,
      typeofleaves: "vacation",
      totalDays: 10,
    },
    {
      name: "Bob",
      img: AvatarImg,
      typeofleaves: "vacation",
      totalDays: 10,
    },
  ];

  // Inside your main component
  <Table tableHead={tableHead} tableData={tableData} />;

  return (
    <Card className="mt-4 p-5">
      <div className="flex gap-2 items-center">
        <img src={LeaveIcon} alt="attendacne" width={25} />
        <Typography className="font-bold text-xl">Leave Report</Typography>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="flex justify-between items-end gap-2">
            <div className="flex flex-col gap-2 p-3">
              <Typography className="font-bold text-4xl text-black font-body">
                2,420
              </Typography>
              <div className="flex gap-2">
                <img src={UpIcon} alt="up-icon" width={15} />
                <Typography className="text-lg text-gray-400 font-bold">
                  vs yesterday
                </Typography>
              </div>
            </div>
            <div className="w-1/2 h-full">
              <BarChart />
            </div>
          </div>
          <Card className="p-2 border border-gray-300">
            <div className="flex justify-between px-3">
              <div className="flex items-center gap-2 my-3">
                <img
                  src={CalendarBlue}
                  alt="checkIcon"
                  className="p-2 bg-blue-100 rounded-lg"
                  width={35}
                />
                <Typography className="font-bold text-gray-600 text-sm">
                  Present
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={SadEmot}
                  alt="checkIcon"
                  className="p-2 bg-purple-100 rounded-lg"
                  width={35}
                />
                <Typography className="font-bold text-gray-600 text-sm">
                  Late
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={Other}
                  alt="checkIcon"
                  className="p-2 bg-yellow-800 rounded-lg"
                  width={35}
                />
                <Typography className="font-bold text-gray-600 text-sm">
                  Absent
                </Typography>
              </div>
            </div>
            <div className="flex justify-between px-5 my-3">
              <Typography className="font-bold text-black text-2xl">
                2,100
              </Typography>
              <Typography className="font-bold text-black text-2xl">
                250
              </Typography>
              <Typography className="font-bold text-black text-2xl">
                100
              </Typography>
            </div>
            <div className="px-5">
              <ProgressBarChart />
            </div>
          </Card>
        </div>
        <div className="bg-gray-200 w-1 rounded-full"></div>
        <Card className="border-none p-8 w-1/2">
          <div className="flex gap-4 items-center mx-auto mb-4">
            <img
              src={ArrowLeft}
              alt="arrow-left"
              className="bg-gray-200 rounded-full p-1"
              width={25}
            />
            <Typography className="font-bold">Tue, 16 Aug 2021</Typography>
            <img
              src={ArrowRight}
              alt="arrow-right"
              className="bg-gray-200 rounded-full p-1"
              width={25}
            />
          </div>
          <div className="overflow-y-auto h-[250px]">
            <Table tableData={tableData} tableHead={tableHead} />
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default LeaveReport;
