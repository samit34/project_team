import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
 import './Ratingcharts.css'
const data = [
  { name: "Week 1", monthlyRating: 4.2, weeklyRating: 3.8 },
  { name: "Week 2", monthlyRating: 4.3, weeklyRating: 4.1 },
  { name: "Week 3", monthlyRating: 4.5, weeklyRating: 4.2 },
  { name: "Week 4", monthlyRating: 4.4, weeklyRating: 4.0 },
  { name: "Week 5", monthlyRating: 4.6, weeklyRating: 4.3 },
];

const Ratingchart = () => {
  return (

    <div   className="w-full xl:w-[49%]"  >
    <AreaChart width={520} height={400} data={data}
      >
      <defs>
        <linearGradient id="colorMonthly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorWeekly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FF9800" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#FF9800" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis domain={[3, 5]} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="monthlyRating" stroke="#4CAF50" fillOpacity={1} fill="url(#colorMonthly)" />
      <Area type="monotone" dataKey="weeklyRating" stroke="#FF9800" fillOpacity={1} fill="url(#colorWeekly)" />
    </AreaChart>
    </div>
  );
};

export default Ratingchart;
