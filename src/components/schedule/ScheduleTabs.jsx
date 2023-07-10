import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BiWeekly from "./BiWeekly";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import Daily from "./Daily";

const ScheduleTabs = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const data = [
    {
      label: "Monthly",
      value: "monthly",
      body: <Monthly />,
    },
    {
      label: "Biweekly",
      value: "biweekly",
      body: <BiWeekly />,
    },
    {
      label: "Weekly",
      value: "weekly",
      body: <Weekly />,
    },
    {
      label: "Daily",
      value: "daily",
      body: <Daily />,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <div className="border border-blue-gray-200 rounded-lg">
        <TabsHeader
          className="rounded-none  bg-transparent w-[15%] p-3"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-blue-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-blue-900 font-bold" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </div>
      <TabsBody>
        {data.map(({ value, body }) => (
          <TabPanel key={value} value={value}>
            {body}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default ScheduleTabs;
