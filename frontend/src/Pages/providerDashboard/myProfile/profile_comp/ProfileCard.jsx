import React, { useState } from 'react'
// import { FaEdit } from "react-icons/fa";
import { Pencil } from "lucide-react";
import { PencilSquareIcon } from '@heroicons/react/24/outline';

import ProfilePopup from './ProfilePopup.jsx';

const ProfileCard = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex flex-col gap-6">

            {/* Personal Information Card */}
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold">Personal Information</h2>
                    </div>

                    <div className="p-6">
                        {/* Pencil Button */}
                        <button onClick={() => setOpen(true)} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                            <PencilSquareIcon className="w-6 h-6 text-gray-600" />
                        </button>
                        <ProfilePopup open={open} setOpen={setOpen} />

                    </div>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <p className="text-sm text-gray-500">First Name</p>
                        <p className="font-medium">Chowdury</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Last Name</p>
                        <p className="font-medium">Musharof</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="font-medium">randomuser@pimjo.com</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">+09 363 398 46</p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-500">Bio</p>
                        <p className="font-medium">Team Manager</p>
                    </div>
                </div>
            </div>

            {/* Address Card */}
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold">Address</h2>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                        <Pencil size={16} />
                        Edit
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <p className="text-sm text-gray-500">Country</p>
                        <p className="font-medium">United States</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">City/State</p>
                        <p className="font-medium">Arizona, United States</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Postal Code</p>
                        <p className="font-medium">ERT 2489</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">TAX ID</p>
                        <p className="font-medium">AS4568384</p>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default ProfileCard;





 {/* <div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 " onClick={() => setOpen(true)}>
              
                <Pencil size={16} />
                Edit
              </button>
                
      <ProfilePopup open={open} setOpen={setOpen} />
              </div> */}


// import React, { useState } from 'react';
// import ProfilePopup from './ProfilePopup'; // Import the modal component

// const ParentComponent = () => {
//   const [open, setOpen] = useState(false); // State to control modal visibility

//   return (
//     <div className="p-6">
//       {/* Pencil Button */}
//       <button onClick={() => setOpen(true)} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
//         <PencilSquareIcon className="w-6 h-6 text-gray-600" />
//       </button>

   
//     </div>
//   );
// };

// export default ParentComponent;


// return (
//     <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex flex-col gap-6">
//       {/* Personal Information Card */}
//       <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
//         <div className="flex justify-between items-start mb-4">
//           <h2 className="text-xl font-semibold">Personal Information</h2>
//           <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
//             <FaEdit /> Edit
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           <div>
//             <p className="text-gray-500 text-sm">First Name</p>
//             <p className="font-medium">Chowdury</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Last Name</p>
//             <p className="font-medium">Musharof</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Email Address</p>
//             <p className="font-medium">randomuser@pimjo.com</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Phone</p>
//             <p className="font-medium">+09 363 398 46</p>
//           </div>
//           <div className="col-span-2">
//             <p className="text-gray-500 text-sm">Bio</p>
//             <p className="font-medium">Team Manager</p>
//           </div>
//         </div>
//       </div>

//       {/* Address Card */}
//       <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
//         <div className="flex justify-between items-start mb-4">
//           <h2 className="text-xl font-semibold">Address</h2>
//           <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
//             <FaEdit /> Edit
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <p className="text-gray-500 text-sm">Country</p>
//             <p className="font-medium">United States</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">City/State</p>
//             <p className="font-medium">Arizona, United States</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Postal Code</p>
//             <p className="font-medium">ERT 2489</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">TAX ID</p>
//             <p className="font-medium">AS4568384</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
