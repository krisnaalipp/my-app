import { Avatar, Typography } from "@material-tailwind/react";
import AvatarImg from "../assets/avatar.svg";
import ArrowDownBlack from "../assets/arrow-down-black.svg";
import UpDown from "../assets/up-down.svg";

const TABLE_ROWS = [
  {
    name: "John Michael",
    img: AvatarImg,
    checkinTime: "9:00 AM",
    checkinLocation: "Office",
    checkoutTime: "5:00 PM",
    checkoutLocation: "Office",
    status: "Early Checkin",
  },
  {
    name: "Alexa Liras",
    img: AvatarImg,
    checkinTime: "8:30 AM",
    checkinLocation: "Home",
    checkoutTime: "4:30 PM",
    checkoutLocation: "Office",
    status: "On Time",
  },
  {
    name: "Alexa Liras",
    img: AvatarImg,
    checkinTime: "8:30 AM",
    checkinLocation: "Home",
    checkoutTime: "4:30 PM",
    checkoutLocation: "Office",
    status: "Absent",
  },
  {
    name: "Alexa Liras",
    img: AvatarImg,
    checkinTime: "8:30 AM",
    checkinLocation: "Home",
    checkoutTime: "4:30 PM",
    checkoutLocation: "Office",
    status: "Absent",
  },
];
const AttendanceTable = () => {
  return (
    <table className="table-auto  text-left">
      <thead>
        <tr>
          <th
            rowSpan="2"
            className="border-b border-t border-blue-gray-100 bg-blue-gray-50 p-2 text-center"
          >
            <div className="flex justify-end">
              <Typography variant="small" className="font-bold mx-auto">
                Employees
              </Typography>
              <img src={UpDown} alt="UpDown" width={15} />
            </div>
          </th>
          <th
            colSpan="2"
            className="border-b border-t border-blue-gray-100 bg-blue-gray-50 p-2 text-center"
          >
            <Typography variant="small" className="font-bold">
              Checkin
            </Typography>
          </th>
          <th
            colSpan="2"
            className="border-b border-t border-blue-gray-100 bg-blue-gray-50 p-2 text-center"
          >
            <Typography variant="small" className="font-bold">
              Checkout
            </Typography>
          </th>
          <th
            rowSpan="2"
            className="border-b border-t border-blue-gray-100 bg-blue-gray-50 p-2 text-center"
          >
            <div className="flex justify-end">
              <Typography variant="small" className="font-bold mx-auto">
                Status
              </Typography>
              <img src={UpDown} alt="UpDown" width={15} />
            </div>
          </th>
          <th
            rowSpan="2"
            className="border-b border-t border-blue-gray-100 bg-blue-gray-50 p-2 text-center"
          >
            <Typography variant="small" className="font-bold">
              Action
            </Typography>
          </th>
        </tr>
        <tr>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 text-center">
            <Typography variant="caption" className="font-bold">
              Time
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 text-center">
            <Typography variant="caption" className="font-bold">
              Location
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 text-center">
            <Typography variant="caption" className="font-bold">
              Time
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-2 text-center">
            <Typography variant="caption" className="font-bold">
              Location
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody className="h-2">
        {TABLE_ROWS.map(
          ({
            name,
            img,
            checkinTime,
            checkinLocation,
            checkoutTime,
            checkoutLocation,
            status,
          }) => {
            const classes = "p-4 border border-blue-gray-100";
            return (
              <tr key={name}>
                <td className={classes}>
                  <div className="flex items-center gap-2">
                    <Avatar src={img} alt="avatar" className="w-10 h-10" />
                    <Typography color="blue-gray" className="font-normal">
                      {name}
                    </Typography>
                  </div>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="caption"
                    className="font-normal text-center"
                  >
                    {checkinTime}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="caption"
                    className="font-normal text-center"
                  >
                    {checkinLocation}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="caption"
                    className="font-normal text-center"
                  >
                    {checkoutTime}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="caption"
                    className="font-normal text-center"
                  >
                    {checkoutLocation}
                  </Typography>
                </td>
                <td className={`${classes}`}>
                  <div className="flex justify-center">
                    <Typography
                      variant="small"
                      className={`${
                        status === "Early Checkin"
                          ? "bg-green-100 text-green-500"
                          : status === "On Time"
                          ? "bg-blue-100 text-blue-500"
                          : status === "Absent"
                          ? "bg-red-100 text-red-500"
                          : ""
                      } py-1 px-2 font-bold rounded-full`}
                    >
                      {status}
                    </Typography>
                  </div>
                </td>
                <td className={`${classes}`}>
                  <div className="flex justify-between">
                    <Typography className="text-blue-500 hover:underline cursor-pointer">
                      Details
                    </Typography>
                    <img src={ArrowDownBlack} alt="updown" width={20} />
                  </div>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
