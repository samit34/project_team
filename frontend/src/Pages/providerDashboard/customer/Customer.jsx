import React from "react";

const customers = [
  {
    name: "Alex Shatov",
    email: "alexshatov@gmail.com",
    spent: "$2,890.66",
    country: "US",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Philip Harbach",
    email: "philip.h@gmail.com",
    spent: "$2,767.04",
    country: "DE",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Mirko Fisuk",
    email: "mirkofisuk@gmail.com",
    spent: "$2,996.00",
    country: "FR",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Olga Semklo",
    email: "olga.s@cool.design",
    spent: "$1,220.66",
    country: "IT",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Burak Long",
    email: "longburak@gmail.com",
    spent: "$1,890.66",
    country: "GB",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const Customer = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 xl:w-[50%] w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Customers</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-gray-500 uppercase text-xs">Name</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Email</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Spent</th>
              <th className="p-2 text-gray-500 uppercase text-xs">Country</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2 flex items-center gap-3">
                  <img
                    src={customer.img}
                    alt={customer.name}
                    className="" style={{borderRadius:"50%", width:"20%" }}
                  />
                  <span className="text-gray-700">{customer.name}</span>
                </td>
                <td className="p-2 text-gray-700">{customer.email}</td>
                <td className="p-2 text-green-600 font-medium">{customer.spent}</td>
                <td className="p-2 text-gray-700">{customer.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
