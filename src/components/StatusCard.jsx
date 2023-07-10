import { Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import LineGreen from "../assets/line-green.svg";
import LineRed from "../assets/line-red.svg";
import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";

const StatusCard = ({ title, employeesCount, up, stats, timeLine }) => {
  return (
    <Card className="border border-gray-300 shadow-lg w-full p-5">
      <Typography className="text-lg font-bold">{title}</Typography>
      <div className="mt-3 flex justify-between gap-2">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <Typography variant="h3" className="text-black">
            {employeesCount}
          </Typography>
          <div className="flex gap-2 mt-2">
            <img
              src={up ? ArrowUp : ArrowDown}
              alt="arrow"
              width={15}
              height={15}
            />
            <Typography
              className={`font-bold ${
                up ? "text-[#2bd45d]" : "text-[#e73030]"
              }`}
            >
              {stats}
            </Typography>
            <Typography className="font-bold text-gray-500">
              vs {timeLine}
            </Typography>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <img
            src={up ? LineGreen : LineRed}
            className={`${!up ? "scale-x-[-1]" : ""}`}
            width={140}
          />
        </motion.div>
      </div>
    </Card>
  );
};

export default StatusCard;
