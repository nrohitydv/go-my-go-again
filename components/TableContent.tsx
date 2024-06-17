import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";

type Vendor = {
  id: number;
  name: string;
  url: string;
  rating: number;
  ratingChange: number;
  lastAssessed: string;
  status: boolean;
  categories: string[];
};

const vendors: Vendor[] = [
  {
    id: 1,
    name: "Catalog",
    url: "catalogapp.io",
    rating: 60,
    ratingChange: 5,
    lastAssessed: "22 Jan 2022",
    categories: ["Customer data", "Admin", "+4"],
    status: true,
  },
  {
    id: 2,
    name: "Capsule",
    url: "getcapsule.com",
    rating: 72,
    ratingChange: -4,
    lastAssessed: "20 Jan 2022",
    categories: ["Business data", "Admin", "+4"],
    status: true,
  },
  {
    id: 3,
    name: "Command+R",
    url: "cmdr.ai",
    rating: 78,
    ratingChange: 6,
    lastAssessed: "24 Jan 2022",
    categories: ["Customer data", "Financials"],
    status: true,
  },
  {
    id: 4,
    name: "Hourglass",
    url: "hourglass.app",
    rating: 38,
    ratingChange: 8,
    lastAssessed: "26 Jan 2022",
    categories: ["Database access", "Admin"],
    status: true,
  },
  {
    id: 5,
    name: "Layers",
    url: "getlayers.io",
    rating: 42,
    ratingChange: -1,
    lastAssessed: "18 Jan 2022",
    categories: ["Salesforce", "Admin", "+4"],
    status: true,
  },
  {
    id: 6,
    name: "Quotient",
    url: "quotient.co",
    rating: 66,
    ratingChange: -6,
    lastAssessed: "28 Jan 2022",
    categories: ["Business data", "Admin", "+4"],
    status: true,
  },
  {
    id: 7,
    name: "Sisyphus",
    url: "sisyphus.com",
    rating: 91,
    ratingChange: 2,
    lastAssessed: "16 Jan 2022",
    categories: ["Customer data", "Financials"],
    status: false,
  },
];

export function TableDemo() {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Vendor</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Last accessed</TableHead>
            <TableHead className="text-right">categories</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {vendors.map((vendor) => (
            <tr key={vendor.id} className="border-b border-gray-200">
              <td className="px-4 py-2 flex items-center">
                <input type="checkbox" className="mr-2" />
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {vendor.name}
                    </div>
                    <div className="text-sm text-gray-500">{vendor.url}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <div className="h-2 w-24 bg-gray-200 rounded-full mr-2">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${vendor.rating}%` }}
                    ></div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {vendor.rating}
                  </div>
                  <div
                    className={`ml-2 text-sm ${
                      vendor.ratingChange > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {vendor.ratingChange > 0
                      ? `↑ ${vendor.ratingChange}%`
                      : `↓ ${vendor.ratingChange}%`}
                  </div>
                </div>
              </td>
              <td className="px-4 py-2 text-sm text-gray-500">
                {vendor.lastAssessed}
              </td>
              <td className="px-4 py-2">
                {vendor.categories.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-1"
                  >
                    {category}
                  </span>
                ))}
              </td>
              <td className="px-4 py-2">
                {vendor.status ? (
                  <span className="text-green-500">Active</span>
                ) : (
                  <span className="text-red-500">Inactive</span>
                )}
              </td>
              <td className="px-4 py-2 flex justify-end space-x-2">
                <button className="text-gray-500 hover:text-gray-700 h-[40px] w-[40px]">
                  <Trash2 />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <Pencil />
                </button>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center  border-t p-2">
        <Dialog>
          <DialogTrigger>
            <Button className="bg-white text-slate-600 hover:text-blue-800 hover:bg-white border rounded-md ml-3">
              Previous
            </Button>
          </DialogTrigger>
          <DialogContent>No previous page found!!!</DialogContent>
        </Dialog>

        <p className="text-sm text-slate-600">Page 1 of 1</p>
        <Dialog>
          <DialogTrigger>
            <Button className="bg-white text-slate-600 hover:text-blue-800 hover:bg-white border rounded-md mr-3">
              Next
            </Button>
          </DialogTrigger>
          <DialogContent>No next page found!!!</DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
