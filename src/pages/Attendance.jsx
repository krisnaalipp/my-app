import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import GeneralHeader from "../components/schedule/GeneralHeader";
import ExportIcon from "../assets/export.svg";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import Filter from "../assets/filter.svg";
import AttendanceTable from "../components/AttendanceTable";
import StatusCard from "../components/StatusCard";

const AttendancePage = () => {
  const cardEmployeeContent = [
    {
      title: "Present Employees",
      employeesCount: 2410,
      stats: 450,
      up: true,
      timeLine: "yesterday",
    },
    {
      title: "Late Employees",
      employeesCount: 210,
      stats: 20,
      up: false,
      timeLine: "yesterday",
    },
    {
      title: "Employees on Leaves",
      employeesCount: 153,
      stats: 15,
      up: true,
      timeLine: "yesterday",
    },
  ];
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <Card className="rounded-xl mt-2 rounded-b-none rounded-r-none h-full p-5">
        <GeneralHeader />
        <div className="flex justify-between mt-5 items-center">
          <div>
            <Typography variant="h3" className="font-bold text-black">
              Welcome back, John
            </Typography>
            <Typography className="text-sm text-gray-600">
              You're working at JAVASCRIPT Company
            </Typography>
          </div>
          <div className="flex gap-2 cursor-pointer hover:scale-110 transition ease-in-out border border-gray-800 rounded-lg p-2">
            <img src={ExportIcon} alt="export" width={15} height={15} />
            <Typography variant="small" className="font-bold">
              Export
            </Typography>
          </div>
        </div>
        <div className="md:flex lg:flex-row flex-col gap-8 mt-4">
          {cardEmployeeContent.map((el, i) => (
            <StatusCard
              employeesCount={el.employeesCount}
              stats={el.stats}
              timeLine={el.timeLine}
              title={el.title}
              up={el.up}
            />
          ))}
        </div>
        <Card className="mt-4 p-5 border-gray-300 shadow-lg border">
          <div className="flex gap-4 justify-end mb-2">
            <div className="flex gap-4 items-center mx-auto">
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
            <div className="p-2 cursor-pointer hover:shadow-xl transition ease-in flex gap-2 border rounded-lg border-gray-300">
              <img src={Filter} alt="filter" width={20} />
              <Typography className="font-bold text-sm">
                More filters
              </Typography>
            </div>
          </div>
          <AttendanceTable />
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-3">
              <div className="p-2 border border-gray-400 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-md rounded-xl">
                <Typography className="font-bold">Previous</Typography>
              </div>
              <div className="p-2 px-3 border border-gray-400 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-md rounded-xl">
                <Typography className="font-bold">Next</Typography>
              </div>
            </div>
            <Typography className="font-bold">Page 1 of 10</Typography>
          </div>
        </Card>
      </Card>
    </motion.div>
  );
};

export default AttendancePage;
