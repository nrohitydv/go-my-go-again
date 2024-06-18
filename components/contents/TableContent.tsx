import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { vendors } from "@/constants";

export function TableChart() {
  return (
    <div className="border rounded-md sm:w-full w-[422px] overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Vendor</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Last accessed</TableHead>
            <TableHead className="text-right">categories</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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
              <td className="px-4 py-2 flex justify-end space-x-3">
                <Dialog>
                  <DialogTrigger className="text-slate-600">
                    <Pencil size={20} />
                  </DialogTrigger>
                  <DialogContent className="text-sm text-slate-500">
                    Can&apos;t edit this data!!!
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger className="text-slate-600">
                    <Trash2 size={20} />
                  </DialogTrigger>
                  <DialogContent className="text-sm text-slate-500">
                    Can&apos;t delete this data!!!
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          ))}{" "}
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
