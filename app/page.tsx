"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  ArrowRightLeft,
  CloudDownload,
  ListFilter,
  Search,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import React, { useState } from "react";
import VendorChart from "@/components/contents/VendorChart";
import AverageVendorRatingChart from "@/components/contents/VendorRating";
import SearchField from "@/components/SearchField";
import { TableChart } from "@/components/contents/TableContent";
import { CiSearch } from "react-icons/ci";
import SearchPopUp from "@/components/SearchPopUp";

const Home = () => {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const handleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // };
  return (
    <main className="space-y-5 ">
      <div className="flex sm:flex-row flex-col justify-between items-center">
        <h1 className="font-bold text-[32px]">Organizational overview</h1>
        <div className="flex gap-[12px]">
          {/* <div className="relative hidden sm:block">
            <button
              onClick={handleExpand}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              <Search />
            </button>
            <Input
              className={`pl-10 pr-2 py-1 w-0 rounded-md border-0 focus:border transition-all duration-300 ease-in-out ${
                isExpanded ? "w-48 border" : "w-0"
              }`}
            />
          </div> */}
          {/* <div className="relative hidden sm:block ">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 " />
            <Input className="pl-10 pr-2 py-1 w-0 rounded-md border-0 focus:border focus:w-48 transition-all duration-300 ease-in-out" />
          </div> */}
          <SearchPopUp />
          <div className="hidden sm:block">
            <Dialog>
              <DialogTrigger>
                <Button className="bg-white text-slate-800 hover:text-blue-900 hover:bg-blue-200 rounded-md gap-2 ">
                  <ListFilter />
                  Filter
                </Button>
              </DialogTrigger>
              <DialogContent>Want to filter content!!</DialogContent>
            </Dialog>
          </div>
          <div className="">
            <Dialog>
              <DialogTrigger>
                <Button className="bg-white text-slate-800 hover:text-blue-900 hover:bg-blue-200 rounded-md gap-2">
                  <ArrowRightLeft />
                  Customize
                </Button>
              </DialogTrigger>
              <DialogContent>Customize content here!!</DialogContent>
            </Dialog>
          </div>
          <div className="">
            <Dialog>
              <DialogTrigger>
                <Button className="bg-white text-slate-800 hover:text-blue-900 hover:bg-blue-200 rounded-md gap-2">
                  <CloudDownload />
                  Exports
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label htmlFor="picture">Choose the file</label>
                  <Input id="picture" type="file" />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-stretch gap-[24px] ">
        <div className="border p-2 rounded-md">
          <VendorChart />
        </div>
        <div className="border p-2 rounded-md ">
          <AverageVendorRatingChart />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between space-y-2">
        <div className="">
          <h2 className="text-slate-700">Vendor moments</h2>
          <p className="text-slate-600">
            Keep tracks of vendors and their security ratings.
          </p>
        </div>
        <div className="sm:block hidden">
          <SearchField />
        </div>
        <div className="relative w-full block sm:hidden">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch size={20} />
            </span>
            <Input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 border rounded "
            />
          </div>
        </div>

        <div className="block sm:hidden">
          <Dialog>
            <DialogTrigger className="w-full">
              <Button className="bg-white text-slate-800 hover:text-blue-900 hover:bg-blue-200 rounded-md gap-2 border w-full">
                <ListFilter />
                Edit Filters
              </Button>
            </DialogTrigger>
            <DialogContent>Filter content here!!</DialogContent>
          </Dialog>
        </div>
      </div>

      <TableChart />
    </main>
  );
};

export default Home;
