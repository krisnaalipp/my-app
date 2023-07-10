const Table = ({ tableHead, tableData }) => {
  const getSquareColor = (typeOfLeaves) => {
    switch (typeOfLeaves) {
      case "medical leave":
        return "bg-purple-500";
      case "sick leave":
        return "bg-red-500";
      case "vacation":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {tableHead.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3  border bg-blue-gray-200 font-medium text-black"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={row.img}
                      alt={row.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {row.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div
                    className={`h-4 w-4 ${getSquareColor(
                      row.typeofleaves
                    )} rounded-full`}
                  ></div>
                  <div className="ml-2 text-sm text-gray-500">
                    {row.typeofleaves}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.totalDays}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
