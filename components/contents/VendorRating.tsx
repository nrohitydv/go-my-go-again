"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LineChart, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import { XAxis, YAxis } from "recharts";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { data } from "@/constants";

const AverageVendorRatingChart: React.FC = () => {
  return (
    <div className="flex flex-col  sm:w-[680px] h-[369px] w-[410px] overflow-hidden ">
      <div className="flex justify-between mt-2">
        <h2 className="text-lg font-bold mb-4 items-start ml-[24px] ">
          Average vendor rating
        </h2>
        <Dialog>
          <DialogTrigger>
            <BsThreeDotsVertical />
          </DialogTrigger>
          <DialogContent>Edit chart!!</DialogContent>
        </Dialog>
      </div>

      <p className="text-sm text-gray-500 mb-6 ml-[24px]">
        Track how your rating compares to your industry average.
      </p>
      <div className="flex">
        <LineChart width={670} height={249} data={data} className="flex-1">
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
    </div>
  );
};

export default AverageVendorRatingChart;
