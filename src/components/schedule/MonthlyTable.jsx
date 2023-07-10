import { Avatar, Card, Typography } from "@material-tailwind/react";

const MonthlyTable = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const tableHead = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tableRows = [];

  let currentDay = 1;

  for (let row = 0; row < 6; row++) {
    const rowData = [];

    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDayOfMonth) {
        rowData.push(null);
      } else if (currentDay > daysInMonth) {
        rowData.push(null);
      } else {
        rowData.push(currentDay);
        currentDay++;
      }
    }

    tableRows.push(rowData);
    if (currentDay > daysInMonth) break;
  }

  return (
    <table className="border table-auto w-full">
      <thead>
        <tr>
          {tableHead.map((day) => (
            <th key={day} className="py-3">
              <Typography variant="small" className="font-bold text-end">
                {day}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, colIndex) => (
              <td
                key={colIndex}
                className={`border-y  border-blue-gray-100 ${
                  cellData === null ? "bg-gray-200" : ""
                }`}
              >
                {cellData && (
                  <div className="py-2">
                    <div className="flex justify-end items-center">
                      <Typography variant="body2">{cellData}</Typography>
                    </div>
                    <div className="p-1">
                      <Card className="bg-gray-200 w-full p-1 shadow-lg border">
                        Lorem ipsum
                      </Card>
                    </div>
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MonthlyTable;
