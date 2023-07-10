import SelectComponent from "./SelectComponent";
import WeekTable from "./WeekTable";
import AvatarImg from "../../assets/avatar.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import { Typography } from "@material-tailwind/react";

const BiWeekly = () => {
  const TABLE_HEAD = [
    "Employees",
    "MON 1",
    "MON 1",
    "MON 1",
    "MON 1",
    "MON 1",
    "MON 1",
    ,
    "MON 1",
    ,
    "TUE 2",
    ,
    "WED 3",
    "THU 4",
    "FRI 5",
    "SAT 6",
    "SUN 7",
  ];

  const TABLE_ROWS = [
    {
      name: "John Michael",
      img: AvatarImg,
      worktime: "7am - 3pm",
    },
    {
      name: "Alexa Liras",
      img: AvatarImg,
    },
    {
      name: "Laurent Perrier",
      img: AvatarImg,
    },
    {
      name: "Michael Levi",
      img: AvatarImg,
    },
    {
      name: "Richard Gran",
      img: AvatarImg,
    },
  ];
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
        <WeekTable tableHead={TABLE_HEAD} tableRows={TABLE_ROWS} />
      </div>
    </div>
  );
};

export default BiWeekly;
