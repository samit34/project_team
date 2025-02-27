import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "United States", value: 35 },
  { name: "Italy", value: 30 },
  { name: "Other", value: 35 },
];

const COLORS = ["#A085FF", "#6EC4FF", "#322A7D"];

const Areajobs = () => {
  return (
    <div     className="xl:w-[35%] w-full "  style={{  height: 300, background: "white", borderRadius:"10px" }}>
      <h3 style={{ textAlign: "left", marginLeft: "10px" }}>Top Countries</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Areajobs;
