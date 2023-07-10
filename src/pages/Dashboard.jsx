import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import GeneralHeader from "../components/schedule/GeneralHeader";
import StatusCard from "../components/StatusCard";
import DoughnutChart from "../components/DoughnutChart";

import AttendanceReport from "../components/AttendanceReportCard";
import LeaveReport from "../components/LeaveReportCard";

const DashboardPage = () => {
  const dataEmployeesandDepartment = [
    {
      title: "Total Employees",
      totalCount: 2433,
      up: true,
      stats: 343,
      timeLine: "last month",
    },
    {
      title: "Total Department",
      totalCount: 100,
      up: false,
      stats: 13,
      timeLine: "last month",
    },
  ];

  const chartData = {
    labels: ["Male", "Female"], // Adjust the labels array to match the length of the data array
    datasets: [
      {
        label: "",
        data: [20, 10],
        backgroundColor: ["#0a5ff5", "#e0a4d3"], // Adjust the backgroundColor array to match the length of the data array
      },
    ],
  };
  const status = {
    labels: ["Married", "Not Married"], // Adjust the labels array to match the length of the data array
    datasets: [
      {
        label: "",
        data: [20, 10],
        backgroundColor: ["#ae38c7", "#4099bf"], // Adjust the backgroundColor array to match the length of the data array
      },
    ],
  };
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <Card className="rounded-xl mt-2 rounded-b-none rounded-r-none  p-5">
        <GeneralHeader />
        <div className="flex gap-2 flex-col mt-4">
          <Typography className="text-2xl font-bold text-black">
            Welcome, John
          </Typography>
          <Typography>You're working at JAVASCRIPT Company</Typography>
        </div>
        <Card className="p-5 border border-gray-300">
          <Typography className="text-2xl my-3  font-bold">
            Company Overview
          </Typography>
          <div className="flex gap-8">
            <div className="flex flex-col w-1/3 gap-8">
              {dataEmployeesandDepartment.map(
                ({ title, totalCount, up, stats, timeLine }, index) => (
                  <StatusCard
                    key={index}
                    employeesCount={totalCount}
                    title={title}
                    stats={stats}
                    up={up}
                    timeLine={timeLine}
                  />
                )
              )}
            </div>
            <Card className="p-5 w-2/3">
              <Typography className="font-bold text-2xl my-3">
                Diversity
              </Typography>
              <div className="flex gap-5 items-center justify-center">
                <Card className="border border-gray-300">
                  <Typography className="text-center font-bold py-2 text-lg">
                    Gender
                  </Typography>
                  <div className="lg:w-[25rem] lg:h-[12rem] flex  py-2 justify-center">
                    <DoughnutChart data={chartData} />
                  </div>
                </Card>
                <Card className="border border-gray-300">
                  <Typography className="text-center font-bold py-2 text-lg">
                    Status
                  </Typography>
                  <div className="lg:w-[25rem] lg:h-[12rem] py-2 flex justify-center">
                    <DoughnutChart data={status} />
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </Card>
        <AttendanceReport />
        <LeaveReport />
      </Card>
    </motion.div>
  );
};

export default DashboardPage;
