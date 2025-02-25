import React from "react";
import { FaComment, FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import { MdPublishedWithChanges } from "react-icons/md";

const activities = [
  {
    id: 1,
    date: "Today",
    icon: <FaComment className="text-purple-500" />,
    text: (
      <>
        <span className="font-medium text-gray-800">Nick Mark</span> mentioned{" "}
        <span className="font-medium text-gray-900">Sara Smith</span> in a new
        post
      </>
    ),
  },
  {
    id: 2,
    date: "Today",
    icon: <FaTrashAlt className="text-red-500" />,
    text: (
      <>
        The post <span className="font-medium text-gray-900">Post Name</span>{" "}
        was removed by <span className="font-medium text-gray-800">Nick Mark</span>
      </>
    ),
  },
  {
    id: 3,
    date: "Today",
    icon: <MdPublishedWithChanges className="text-green-500" />,
    text: (
      <>
        <span className="font-medium text-gray-800">Patrick Sullivan</span>{" "}
        published a new <span className="font-medium text-gray-900">post</span>
      </>
    ),
  },
  {
    id: 4,
    date: "Yesterday",
    icon: <FaSyncAlt className="text-blue-500" />,
    text: (
      <>
        <span className="font-medium text-gray-900">240+</span> users have
        subscribed to <span className="font-medium text-gray-900">Newsletter #1</span>
      </>
    ),
  },
  {
    id: 5,
    date: "Yesterday",
    icon: <FaComment className="text-purple-500" />,
    text: (
      <>
        The post <span className="font-medium text-gray-900">Post Name</span>{" "}
        was suspended by <span className="font-medium text-gray-800">Nick Mark</span>
      </>
    ),
  },
];

const Recentactivity = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-[50%]">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Activity
      </h2>
      <div>
        {["Today", "Yesterday"].map((date) => (
          <div key={date}>
            <div className="uppercase text-xs text-gray-500 font-semibold py-2">
              {date}
            </div>
            {activities
              .filter((activity) => activity.date === date)
              .map(({ id, icon, text }) => (
                <div
                  key={id}
                  className="flex items-center justify-between py-2 border-b last:border-none"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-lg">
                      {icon}
                    </span>
                    <p className="text-gray-700">{text}</p>
                  </div>
                  <a
                    href="#"
                    className="text-purple-500 hover:underline flex items-center"
                  >
                    View →
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recentactivity;
