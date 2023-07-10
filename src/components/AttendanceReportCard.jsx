import { Card, Typography } from "@material-tailwind/react";
import ProgressBarChart from "./StackedBarChart";
import BarChart from "./BarChart";
import AttendanceIcon from "../assets/attendance-fill.svg";
import UpIcon from "../assets/arrow-up.svg";
import CheckListBlue from "../assets/checklistblue.svg";
import CrossPurple from "../assets/crosspurple.svg";
import ProhibitedRed from "../assets/prohibitedred.svg";

const AttendanceReport = () => {
  return (
    <Card className="mt-4 p-5">
      <div className="flex gap-2 items-center">
        <img src={AttendanceIcon} alt="attendacne" width={25} />
        <Typography className="font-bold text-xl">Attendance Report</Typography>
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
                  src={CheckListBlue}
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
                  src={CrossPurple}
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
                  src={ProhibitedRed}
                  alt="checkIcon"
                  className="p-2 bg-red-100 rounded-lg"
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
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-4">
              <Typography className="font-bold text-gray-500 text-xl">
                All Users Statistics
              </Typography>
              <Typography className="font-bold text-xl flex gap-2 items-end">
                <b>25,256</b>{" "}
                <Typography className="font-semibold text-gray-500">
                  Users
                </Typography>
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Typography className="font-bold text-gray-500 text-xl">
                All Visit Time
              </Typography>
              <Typography className="font-bold text-xl flex gap-1 items-end">
                <b>2</b>{" "}
                <Typography className="font-semibold text text-gray-600">
                  Hours
                </Typography>
                <b>35</b>{" "}
                <Typography className="font-semibold text text-gray-600">
                  Minutes
                </Typography>
              </Typography>
            </div>
          </div>
          <div className="mt-10">
            <Typography className="mb-3 font-bold text-gray-500 ">
              Top Visited Area
            </Typography>
            <ProgressBarChart />
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex gap-2 items-center">
                <div className="bg-blue-800 w-4 h-4"></div>
                <Typography>Kebayoran</Typography>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-deep-purple-500 w-4 h-4"></div>
                <Typography>Cakung</Typography>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-red-800 w-4 h-4"></div>
                <Typography>Sawangan Lama</Typography>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default AttendanceReport;
