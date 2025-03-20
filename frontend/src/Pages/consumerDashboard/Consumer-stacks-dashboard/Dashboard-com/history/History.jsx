import React from "react";

const historyData = [
  {
    provider: "John Doe",
    service: "Plumbing",
    tasksCompleted: "Pipe Fixing, Leak Repair",
    date: "2025-03-15",
    amountPaid: "$150",
    status: "Completed",
  },
  {
    provider: "Sarah Smith",
    service: "Electrician",
    tasksCompleted: "Wiring, Light Installation",
    date: "2025-03-14",
    amountPaid: "$200",
    status: "Completed",
  },
  {
    provider: "Mike Johnson",
    service: "Cleaning",
    tasksCompleted: "House Cleaning, Carpet Wash",
    date: "2025-03-13",
    amountPaid: "$100",
    status: "Pending",
  },
  {
    provider: "Emma Brown",
    service: "Painting",
    tasksCompleted: "Wall Painting, Wood Coating",
    date: "2025-03-12",
    amountPaid: "$250",
    status: "Completed",
  },
  {
    provider: "James Wilson",
    service: "Carpentry",
    tasksCompleted: "Furniture Repair, Wood Polishing",
    date: "2025-03-11",
    amountPaid: "$180",
    status: "Cancelled",
  },
];

const History = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 xl:w-[100%] w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Service History</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-gray-500 uppercase text-xs">Provider</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Service</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Tasks Completed</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Date</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Amount Paid</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Status</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2 text-gray-700">{entry.provider}</td>
                <td className="p-2 text-gray-700">{entry.service}</td>
                <td className="p-2 text-gray-700">{entry.tasksCompleted}</td>
                <td className="p-2 text-gray-700">{entry.date}</td>
                <td className="p-2 text-gray-700 font-medium">{entry.amountPaid}</td>
                <td
                  className={`p-2 font-medium ${
                    entry.status === "Completed"
                      ? "text-green-600"
                      : entry.status === "Pending"
                      ? "text-orange-500"
                      : "text-red-500"
                  }`}
                >
                  {entry.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
