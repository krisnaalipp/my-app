import { Avatar, Card, Typography } from "@material-tailwind/react";
import AvatarImg from "../../assets/avatar.svg";

const TABLE_HEAD = ["6am", "7am", "8am", "9am", "10am", "12pm"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    img: AvatarImg,
    workingTimes: [false, true, true, true, true, false],
  },
  {
    name: "Alexa Liras",
    img: AvatarImg,
    workingTimes: [true, true, false, true, false, true],
  },
  {
    name: "Laurent Perrier",
    img: AvatarImg,
    workingTimes: [true, true, true, true, true, true],
  },
  {
    name: "Michael Levi",
    img: AvatarImg,
    workingTimes: [false, false, false, true, false, false],
  },
  {
    name: "Richard Gran",
    img: AvatarImg,
    workingTimes: [true, true, true, false, true, true],
  },
];

const DailyTable = () => {
  return (
    <table className="table-auto text-left">
      <thead>
        <tr>
          <th className="border border-blue-gray-100  bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
            >
              Employees
            </Typography>
          </th>
          {TABLE_HEAD.map((head, index) => (
            <th
              key={index}
              className="border-b border-t border-blue-gray-100 bg-blue-gray-50 p-4"
            >
              <Typography variant="small" className="font-normal text-center">
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map(({ name, img, workingTimes }) => {
          const classes = "p-4 border-b border-blue-gray-50";
          return (
            <tr key={name}>
              <td className={classes}>
                <div className="flex items-center gap-2">
                  <Avatar src={img} alt="avatar" className="w-6 h-6" />
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </div>
              </td>
              {TABLE_HEAD.map((_, index) => (
                <td key={index} className={`${classes} bg-blue-gray-50/50`}>
                  {workingTimes[index] ? (
                    <Card className="bg-green-500 p-1 text-center text-white font-medium">
                      <Typography variant="small">Working</Typography>
                    </Card>
                  ) : (
                    <Card className="bg-red-500 p-1 text-center text-white font-medium">
                      <Typography variant="small">Not Working</Typography>
                    </Card>
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DailyTable;
