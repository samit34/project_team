import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 1000, prevSales: 800 },
  { name: "Feb", sales: 2400, prevSales: 1800 },
  { name: "Mar", sales: 1500, prevSales: 1200 },
  { name: "Apr", sales: 2800, prevSales: 2000 },
  { name: "May", sales: 3000, prevSales: 2200 },
  { name: "Jun", sales: 2500, prevSales: 2100 },
  { name: "Jul", sales: 2700, prevSales: 2300 },
];

const Jobdone = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full xl:w-[32.3%]">
         {/* Header */}
         <div className="flex justify-between items-center">
           <h2 className="text-gray-800 font-semibold text-lg">JobDone</h2>
           <button className="text-gray-500 text-xl">⋮</button>
         </div>
   
         {/* Sales Info */}
         <p className="text-xs text-gray-400 mt-2 uppercase">Sales</p>
         <div className="flex items-center mt-1">
           <h1 className="text-3xl font-bold">$24,780</h1>
           <span className="ml-3 text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-lg">
             +49%
           </span>
         </div>
   
         {/* Responsive Chart */}
         <div className="mt-4 h-24 md:h-28 lg:h-32">
           <ResponsiveContainer width="100%" height="100%">
             <LineChart data={data}>
               <XAxis dataKey="name" hide />
               <YAxis hide />
               <Tooltip />
               {/* Light Gray Background Line */}
               <Line type="monotone" dataKey="prevSales" stroke="#d1d5db" strokeWidth={2} dot={false} />
               {/* Main Purple Line */}
               <Line type="monotone" dataKey="sales" stroke="#6366F1" strokeWidth={3} dot={false} />
             </LineChart>
           </ResponsiveContainer>
         </div>
       </div>
  )
}

export default Jobdone