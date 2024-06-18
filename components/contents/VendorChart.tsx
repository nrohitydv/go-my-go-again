"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const data = [
  { name: "0-20", value: 20 },
  { name: "21-40", value: 30 },
  { name: "41-60", value: 25 },
  { name: "61-80", value: 15 },
  { name: "81-100", value: 10 },
];

const COLORS = ["#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0"];

const VendorChart: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-2 h-[369px]  sm:w-[360px] w-[410px] overflow-hidden">
      <div className="flex justify-between w-full relative">
        <h2 className="text-lg font-bold mb-4">Vendor breakdown</h2>

        <Dialog>
          <DialogTrigger>
            <BsThreeDotsVertical />
          </DialogTrigger>
          <DialogContent>Edit chart!!</DialogContent>
        </Dialog>
      </div>

      <div className="flex">
        <div className="flex-shrink-0">
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx={125}
              cy={125}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col justify-center ml-2">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
              <div
                className="w-4 h-4 mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
      <Separator orientation="horizontal" />
      <Popover>
        <PopoverTrigger>
          <Button className="mt-5 ml-[200px] bg-white text-slate-700 text-sm border border-slate-200 rounded hover:bg-purple-300">
            View full report
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          {data.map((entry, id) => (
            <ul key={id}>
              <li className="flex items-center justify-center">
                <span>{entry.name}</span>
              </li>
            </ul>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default VendorChart;
