
import React from "react";

const ProfileTwo = () => {
    return (
        <div className="p-4 md:p-8  ">
            <div className=" mx-auto max-w-6xl 2xl:max-w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Profile Section */}
               

                {/* Projects Section */}
                <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-md">
                    <div className="flex border-b mb-4">
                        <button className="px-4 py-2 font-semibold text-blue-600 border-b-2 border-blue-600">Client</button>
                        <button className="px-4 py-2 text-gray-500">Settings</button>
                    </div>
                    <h3 className="text-lg font-semibold mb-4">Projects</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border rounded-lg">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3 text-left">#</th>
                                    <th className="p-3 text-left">Clients</th>
                                    <th className="p-3 text-left">To Do</th>
                                    <th className="p-3 text-left">Start Date</th>
                                    <th className="p-3 text-left">Due Date</th>
                                    <th className="p-3 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-3">1</td>
                                    <td className="p-3">Halette Boivin</td>
                                    <td className="p-3">doing tap work</td>
                                    <td className="p-3">01/01/2022</td>
                                    <td className="p-3">02/2/2022</td>
                                    <td className="p-3"><span className="bg-gray-400 text-white px-2 py-1 rounded-lg text-xs">Done</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileTwo;

// <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
// <img
//     src="https://via.placeholder.com/100"
//     alt="Profile"
//     className="w-24 h-24 rounded-full border"
// />
// <h2 className="text-xl font-semibold mt-4">Tosha Minner</h2>
// <p className="text-gray-500">Founder</p>
// <div className="mt-4 flex gap-2">
//     <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Follow</button>
//     <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Message</button>
// </div>
// <div className="text-left w-full mt-6">
//     <p className="text-gray-700 text-sm">
//         Hi, I'm Tosha Minner, has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type.
//     </p>
//     <p className="mt-2"><strong>Full Name:</strong> Tosha K. Minner</p>
//     <p><strong>Mobile:</strong> (123) 123 1234</p>
//     <p><strong>Email:</strong> user@email.domain</p>
//     <p><strong>Location:</strong> USA</p>
// </div>
// </div>

// {/* Replacement for Charts */}
// <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-md">
// <h3 className="text-lg font-semibold mb-4">Orders & Revenue</h3>
// <div className="grid grid-cols-2 gap-2">
//     <div className="bg-gray-200 p-6 rounded-lg flex justify-center items-center">Container 1</div>
//     <div className="bg-gray-200 p-6 rounded-lg flex justify-center items-center">Container 2</div>
// </div>
// </div>