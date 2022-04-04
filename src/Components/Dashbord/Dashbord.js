import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashbord = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div>
      <h1 className="text-lg text-center font-sans font-semibold text-emerald-600">
        Chart For Presentation
      </h1>
      <div className="grid md:grid-cols-2 ml-5 mt-8">
        <LineChart width={400} height={300} data={data}>
          <Line type="monotone" dataKey="investment" stroke="#8884d8" />
          <Line type="monotone" dataKey="revenue" stroke="#1663Be" />
          <CartesianGrid stroke="#ccc" />
          <XAxis className="text-xs" dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>

        <BarChart width={400} height={300} data={data}>
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="investment" fill="#1663Be" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashbord;
