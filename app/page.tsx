import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  ArrowRightLeft,
  CloudDownload,
  ListFilter,
  Search,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import React from "react";
import VendorChart from "@/components/VendorChart";
import AverageVendorRatingChart from "@/components/VendorRating";
import SearchField from "@/components/SearchField";
import { TableDemo } from "@/components/TableContent";

const Home = () => {
  return (
    <main className="space-y-5 ">
      <div className="flex sm:flex-row flex-col justify-between">
        <h1 className="font-bold text-[32px]">Organizational overview</h1>
        <div className="flex gap-[12px]">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input className="pl-10 pr-2 py-1 w-0 focus:w-48 transition-all duration-300 ease-in-out rounded-md border-0 focus:border" />
          </div>
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
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-slate-700">Vendor moments</h2>
          <p className="text-slate-600">
            Keep tracks of vendors and their security ratings.
          </p>
        </div>

        <SearchField />
      </div>

      <TableDemo />
    </main>
  );
};

export default Home;
