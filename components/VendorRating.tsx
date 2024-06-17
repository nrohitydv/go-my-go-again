"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LineChart, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import { XAxis, YAxis } from "recharts";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const data = [
  { name: "Jan", yourRating: 65, industryAverage: 50 },
  { name: "Feb", yourRating: 66, industryAverage: 51 },
  { name: "Mar", yourRating: 67, industryAverage: 52 },
  { name: "Apr", yourRating: 66, industryAverage: 53 },
  { name: "May", yourRating: 68, industryAverage: 54 },
  { name: "Jun", yourRating: 69, industryAverage: 55 },
  { name: "Jul", yourRating: 70, industryAverage: 56 },
  { name: "Aug", yourRating: 71, industryAverage: 57 },
  { name: "Sep", yourRating: 72, industryAverage: 58 },
  { name: "Oct", yourRating: 73, industryAverage: 59 },
  { name: "Nov", yourRating: 74, industryAverage: 60 },
  { name: "Dec", yourRating: 75, industryAverage: 61 },
];
const AverageVendorRatingChart: React.FC = () => {
  return (
    <div className="flex flex-col  sm:w-[680px] h-[369px] w-[420px] ">
      <div className="flex justify-between mt-2">
        <h2 className="text-lg font-bold mb-4 items-start ml-[24px] ">
          Average vendor rating
        </h2>
        <Dialog>
          <DialogTrigger>
            <BsThreeDotsVertical />
          </DialogTrigger>
          <DialogContent>Edit chart!!</DialogContent>
        </Dialog>{" "}
      </div>

      <p className="text-sm text-gray-500 mb-6 ml-[24px]">
        Track how your rating compares to your industry average.
      </p>
      <LineChart width={670} height={249} data={data} className="">
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

export default AverageVendorRatingChart;
