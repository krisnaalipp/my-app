import { Card } from "@material-tailwind/react";

import { motion } from "framer-motion";
import GeneralHeader from "../components/schedule/GeneralHeader";
import ScheduleTabs from "../components/schedule/ScheduleTabs";

const SchedulePage = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <Card className="rounded-xl mt-2 rounded-b-none rounded-r-none p-5">
        <GeneralHeader />
        <div className="p-5 min-h-screen flex flex-col">
          <ScheduleTabs />
        </div>
      </Card>
    </motion.div>
  );
};

export default SchedulePage;
