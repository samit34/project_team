import React from "react";

const providers = [
  {
    id: 1,
    name: "John Doe",
    profession: "Electrician",
    completedJobs: 25,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Plumber",
    completedJobs: 18,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    profession: "Carpenter",
    completedJobs: 30,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const ProviderList = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Providers Who Worked for Us</h2>
      
      {/* Grid layout for providers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <div key={provider.id} className="bg-white rounded-lg shadow-md p-4 text-center">
            {/* Avatar */}
            <img 
              src={provider.image} 
              alt={provider.name} 
              className="w-20 h-20 mx-auto rounded-full border-2 border-gray-300"
            />

            {/* Provider details */}
            <div className="mt-3">
              <h3 className="text-lg font-semibold">{provider.name}</h3>
              <p className="text-gray-500">{provider.profession}</p>

              {/* Badge for completed jobs */}
              <span className="inline-block mt-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                Completed Jobs: {provider.completedJobs}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
