import React, { useState } from "react";
import { Pencil } from "lucide-react";
import ProfilePopup from "./ProfilePopup.jsx";
// import { personalFields, addressFields } from "./fields";
import { useAuth } from "../../../../Auth/Authcontext.jsx";

const ProfileCard = () => {

  const [open, setOpen] = useState(false);
 
  const { profile } = useAuth()
   
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex flex-col gap-6">
      {/* Personal Information Card */}
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <button
            onClick={() => setOpen(true)}
            className="py-2 px-3 flex gap-2 items-center bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <Pencil size={16} />
            <span className="max-sm:hidden md:flex">Edit</span>
          </button>
          <ProfilePopup open={open} setOpen={setOpen} />
        </div>

        <div className="w-20 h-20 my-5">
          <img
            src={profile.avatarUrl}
            alt="Avatar"
            className="w-20 h-20 object-cover rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {profile.map(({ label, key }) => (
            <div key={key}>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="font-medium">{profile[key]}</p>
            </div>
          ))}

          {/* If you have one “about” field spanning two columns: */}
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">About</p>
            <p className="font-medium">{profile.about}</p>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">Address</h2>
          <button
            onClick={() => setOpen(true)}
            className="py-2 px-3 flex gap-2 items-center bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <Pencil size={16} />
            <span className="max-sm:hidden md:flex">Edit</span>
          </button>
          <ProfilePopup open={open} setOpen={setOpen} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {profilee.map(({ label, key }) => (
            <div key={key}>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="font-medium">{profile[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
