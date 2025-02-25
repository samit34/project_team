import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Dec 22", direct: 1000, indirect: 5000 },
  { name: "Jan 23", direct: 2000, indirect: 3000 },
  { name: "Feb 23", direct: 1500, indirect: 5500 },
  { name: "Mar 23", direct: 1800, indirect: 4800 },
  { name: "Apr 23", direct: 2500, indirect: 5200 },
  { name: "May 23", direct: 2300, indirect: 4700 },
];

const Overallgrowth = () => {
  return (
    <div style={{ width: "100%", maxWidth: "750px", margin: "auto" }}>
    <h3>Direct VS Indirect</h3>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ color: "#3b82f6", fontSize: "20px", fontWeight: "bold" }}>
        $8.25K
      </span>
      <span>Direct</span>
      <span style={{ color: "#8b5cf6", fontSize: "20px", fontWeight: "bold" }}>
        $27.7K
      </span>
      <span>Indirect</span>
    </div>
    <BarChart width={730} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="direct" fill="#3b82f6" />
      <Bar dataKey="indirect" fill="#8b5cf6" />
    </BarChart>
  </div>
  )
}

export default Overallgrowth