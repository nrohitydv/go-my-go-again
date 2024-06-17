import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRightLeft,
  CloudDownload,
  ListFilter,
  Search,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import VendorChart from "@/components/VendorChart";
import AverageVendorRatingChart from "@/components/VendorRating";
import SearchField from "@/components/SearchField";
import { TableDemo } from "@/components/TableContent";

const Home = () => {
  return (
    <main className="space-y-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-[32px]">Organizational overview</h1>
        <div className="flex gap-[12px]">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input className="pl-10 pr-2 py-1 w-0 focus:w-48 transition-all duration-300 ease-in-out rounded-md border-0 focus:border" />
          </div>

          <Button className="bg-white text-slate-800 hover:text-blue-900 hover:bg-blue-200 rounded-md gap-2">
            <ListFilter />
            Filter
          </Button>
          <Button className="bg-white text-slate-800 hover:text-blue-900 hover:bg-blue-200 rounded-md gap-2">
            <ArrowRightLeft />
            Customize
          </Button>
          <Button className="bg-white text-slate-800 hover:text-blue-900 hover:bg-blue-200 rounded-md gap-2">
            <CloudDownload />
            Exports
          </Button>
        </div>
      </div>
      <div className="flex justify-stretch gap-[24px] sm:flex-col">
        <div className="">
          <Card>
            <CardContent>
              <VendorChart />
            </CardContent>
          </Card>
        </div>
        <div className="w-[650px] h-[369px]">
          <Card>
            <CardContent>
              <AverageVendorRatingChart />
            </CardContent>
          </Card>
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
