"use client";
import { DatePicker } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  ArrowUpRight,
  EllipsisVertical,
  ListFilter,
  Pencil,
  UserPlus,
} from "lucide-react";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LineChartComponent from "@/components/contents/LineChart";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { members } from "@/constants";
import ButtonGroup from "@/components/dashboard_content/ButtonGroup";

const DashboardPage = () => {
  return (
    <main className="space-y-[16px] overflow-hidden">
      <h1 className=" h-[28px] font-semibold text-[#101828]">Dashboard</h1>
      <div className="flex sm:justify-between gap-[12px] ">
        <ButtonGroup />
        <div className="inline-flex gap-[12px]">
          <div className="hidden sm:block">
            <DatePicker />
          </div>

          <Dialog>
            <DialogTrigger>
              <Button className="bg-white text-slate-800 hover:bg-slate-200 rounded-md border">
                <ListFilter />
                <p className="hidden sm:block"> Filter</p>
              </Button>
            </DialogTrigger>
            <DialogContent>Want to filter content!!</DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex sm:flex-row justify-between flex-col items-start space-y-2">
        <div className="">
          <p className="text-slate-600 text-sm">MRR</p>
          <h2 className="inline-flex font-bold text-[36px]">
            <span className="text-[20px] font-normal">$</span>18,880
            <p className=" text-slate-500 text-sm ml-3">
              <span className="bg-green-100 inline-flex rounded-lg mt-5">
                <ArrowUp size={17} />
                7.4%
              </span>
            </p>
          </h2>
        </div>
        <div className="">
          <LineChartComponent />
        </div>
        <div className="w-[240px] h-[244px]">
          <div className="">
            <p className="text-slate-600 text-[14px]">Total members</p>
            <h2 className="inline-flex font-bold text-[32px]">
              4862
              <p className=" text-slate-500 text-sm ml-5">
                <span className="bg-green-100 inline-flex rounded-lg mt-5">
                  <ArrowUp size={17} />
                  9.2%
                </span>
              </p>
            </h2>
          </div>
          <div className="">
            <p className="text-slate-600 text-[14px]">Paid members</p>
            <h2 className="inline-flex font-bold text-[32px]">
              2671
              <p className=" text-slate-500 text-sm ml-5">
                <span className="bg-green-100 inline-flex rounded-lg mt-5">
                  <ArrowUp size={17} />
                  6.6%
                </span>
              </p>
            </h2>
          </div>

          <div className="">
            <p className="text-slate-600 text-[14px]">Email open rate</p>
            <h2 className="inline-flex font-bold text-[32px]">
              82%
              <p className=" text-slate-500 text-sm ml-5">
                <span className="bg-green-100 inline-flex rounded-lg mt-5">
                  <ArrowUp size={17} />
                  8.1%
                </span>
              </p>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-b p-2">
        <h5 className="text-slate-800 font-bold ">Start creating content</h5>
        <p className="text-slate-400 cursor-pointer">
          <EllipsisVertical size={20} />
        </p>
      </div>

      <div className="flex sm:flex-row flex-col">
        <div className="space-y-[20px]">
          <div className="flex sm:flex-row flex-col gap-[24px]">
            <div className="flex gap-2 border rounded-md w-[400px] h-[86px] items-center p-[24px] cursor-pointer">
              <div className="">
                <p className="bg-[#F4EBFF] rounded-full p-1">
                  <UserPlus color="#6659a6" />
                </p>
              </div>

              <div className="">
                <p className="text-slate-700">Create your first member</p>
                <p className="text-sm text-slate-600">
                  Add yourself or import from csv
                </p>
              </div>
            </div>
            <div className="flex gap-2 border rounded-md w-[400px] h-[86px] items-center p-[24px] cursor-pointer">
              <div className="">
                <p className="bg-[#F4EBFF] rounded-full p-1">
                  <Pencil color="#6659a6" />
                </p>
              </div>

              <div className="">
                <p className="text-slate-700">Create a new post</p>
                <p className="text-sm text-slate-600">
                  Dive into the editor and start creating
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="border-b sm:w-[824px] w-[400px] flex justify-between ">
              <h6 className="text-slate-800 font-bold mb-[20px]">
                Start creating content
              </h6>
              <EllipsisVertical size={20} />
            </div>
            <div className="flex sm:flex-row flex-col gap-[24px] mt-[24px]">
              <div className="">
                <Image src="/blog1.png" alt="" width={400} height={240} />
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-[#6941C6]">
                    Olivia Rhye • 20 Jan 2022{" "}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[#101828]">UX review presentations</p>
                    <ArrowUpRight size={24} />
                  </div>
                  <p className="text-[#475467] text-sm w-[400px]">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                  <div className="gap-[8px]">
                    <Badge className="text-sm bg-violet-200 text-violet-600 hover:bg-violet-200 cursor-pointer">
                      Design
                    </Badge>
                    <Badge className="text-sm bg-blue-200 text-blue-600 hover:bg-blue-200 cursor-pointer">
                      Research
                    </Badge>
                    <Badge className="text-sm bg-red-200 text-red-600 hover:bg-red-200 cursor-pointer">
                      Presentation
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="">
                <Image src="/blog2.png" alt="" width={400} height={240} />
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-[#6941C6]">
                    Phoenix Baker • 19 Jan 2022{" "}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[#101828]">Migrating to Linear 101</p>
                    <ArrowUpRight size={24} />
                  </div>
                  <p className="text-[#475467] text-sm w-[400px]">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get...
                  </p>
                  <div className="gap-[8px]">
                    <Badge className="text-sm bg-violet-200 text-violet-600 hover:bg-violet-200 cursor-pointer">
                      Design
                    </Badge>
                    <Badge className="text-sm bg-blue-200 text-blue-600 hover:bg-blue-200 cursor-pointer">
                      Research
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="ml-[32px] sm:mt-0 mt-[32px]">
          <p className="text-sm/medium text-[#475467]">Top members</p>
          <div className="mt-[24px] ">
            {members.map((member) => (
              <li
                key={member.name}
                className="flex mt-[24px] gap-[12px] cursor-pointer"
              >
                <div className="">
                  <Image
                    src={member.profilePic}
                    alt=""
                    width={32}
                    height={32}
                  />
                </div>
                <div className="">
                  <p className="text-[#344054] text-sm/md">{member.name}</p>
                  <p className="text-[#475467] text-sm">{member.memberSince}</p>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </main>
  );
};

export default DashboardPage;
