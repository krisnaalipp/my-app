import { Avatar, Typography } from "@material-tailwind/react";

const WeekTable = ({ tableHead, tableRows }) => {
  return (
    <table className="border table-auto">
      <thead>
        <tr>
          {tableHead.map((head, index) => (
            <th
              key={index}
              className="border border-blue-gray-100 bg-blue-50  p-4"
            >
              <Typography variant="small" className="font-bold">
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map(({ name, img, worktime }) => {
          const classes = "p-4 border border-blue-gray-100 text-sm";

          return (
            <tr key={name}>
              <th scope="row" className={classes}>
                <div className="flex gap-2 items-center">
                  <Avatar src={img} alt="avatar" className="w-6 h-6" />
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {name}
                  </Typography>
                </div>
              </th>
              {tableHead.slice(1).map((_, index) => (
                <td key={index} className={classes}>
                  {worktime ? worktime : "+"}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WeekTable;
