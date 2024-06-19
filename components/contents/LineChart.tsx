"use client";
import React from "react";
import { LineChart, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import { XAxis, YAxis } from "recharts";
import { data } from "@/constants";

const LineChartComponent = () => {
  return (
    <div className="flex">
      <LineChart width={552} height={240} data={data} className="flex-1">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="yourRating"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="industryAverage" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
