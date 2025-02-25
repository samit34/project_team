import React from "react";

const channels = [
  {
    name: "Github.com",
    visitors: "2.4K",
    revenues: "$3,877",
    sales: 267,
    conversion: "4.7%",
    icon: "github",
    color: "text-black",
  },
  {
    name: "Facebook",
    visitors: "2.2K",
    revenues: "$3,426",
    sales: 249,
    conversion: "4.4%",
    icon: "facebook",
    color: "text-blue-600",
  },
  {
    name: "Google (organic)",
    visitors: "2.0K",
    revenues: "$2,444",
    sales: 224,
    conversion: "4.2%",
    icon: "google",
    color: "text-red-500",
  },
  {
    name: "Vimeo.com",
    visitors: "1.9K",
    revenues: "$2,236",
    sales: 220,
    conversion: "4.2%",
    icon: "vimeo",
    color: "text-blue-400",
  },
  {
    name: "Indiehackers.com",
    visitors: "1.7K",
    revenues: "$2,034",
    sales: 204,
    conversion: "3.9%",
    icon: "indie-hackers",
    color: "text-gray-700",
  },
];

const Socialmedia = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 lg:w-[64%] w-full " >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Channels</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-gray-500 uppercase text-xs">Source</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Visitors</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Revenues</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Sales</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Conversion</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((channel, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2 flex items-center gap-2">
                  <span className={`text-lg ${channel.color}`}>
                    <i className={`fab fa-${channel.icon}`}></i>
                  </span>
                  <span className="text-gray-700">{channel.name}</span>
                </td>
                <td className="p-2 text-gray-700">{channel.visitors}</td>
                <td className="p-2 text-green-600 font-medium">{channel.revenues}</td>
                <td className="p-2 text-gray-700">{channel.sales}</td>
                <td className="p-2 text-blue-500">{channel.conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Socialmedia;
