import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { RiHome6Line } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { BiBarChartAlt } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";
import { CiSquareCheck, CiSettings } from "react-icons/ci";
import { MdOutlinePieChart } from "react-icons/md";
import { CgSupport } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";
import { RxCross1 } from "react-icons/rx";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const NavBar = () => {
  return (
    <aside className="flex flex-col justify-start w-[280px] space-y-2 ml-4">
      <h1 className="font-bold">Go My Go</h1>
      <Input type="text" placeholder="Search" className="" />
      <div className="font-bold ">
        <Link href="/">
          <p className="flex text-slate-700 gap-2">
            <RiHome6Line size={20} />
            Home
          </p>
        </Link>
        <Link href="/">
          <p className="flex text-slate-700 gap-2">
            <BiBarChartAlt size={20} />
            Dashboard
          </p>
        </Link>
        <Link href="/">
          <p className="flex text-slate-700 gap-2">
            <GoProjectRoadmap size={20} />
            Projects
          </p>
        </Link>
        <Link href="/">
          <p className="flex text-slate-700 gap-2">
            <CiSquareCheck size={20} />
            Tasks
          </p>
        </Link>
        <Link href="/">
          <p className="flex text-slate-700 gap-2">
            <MdOutlinePieChart size={20} />
            Reporting
          </p>
        </Link>
        <Link href="/">
          <p className="flex text-slate-700 gap-2">
            <TbUsers size={20} />
            Users
          </p>
        </Link>
      </div>
      <div className="font-bold">
        <Link href="/">
          <p className="flex text-slate-700 gap-2">
            <CgSupport size={20} />
            Support
          </p>
        </Link>
        <Link href="/">
          <p className="flex text-slate-700 gap-2">
            <CiSettings size={20} />
            Settings
          </p>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-md flex justify-between cursor-pointer">
            <h1>New Features available</h1>
            <p className="text-slate-700">
              <RxCross1 />
            </p>
          </CardTitle>
          <CardDescription>
            Checkout new dashboard view. Pages now load faster.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src="/nav-image.png" alt="" height={136} width={216} />
        </CardContent>
        <CardFooter>
          <div className="flex space-x-4">
            <p className="text-slate-700 font-bold">Dismiss</p>
            <p className="text-purple-600 font-bold">What&apos;s new?</p>
          </div>
        </CardFooter>
      </Card>
      <Separator orientation="horizontal" />
      <div className="flex items-center justify-center space-x-2">
        <div className="">
          <Avatar>
            <AvatarImage src="/Avatar.png" alt="@shadcn" />
          </Avatar>
        </div>
        <div className="">
          <h3 className="text-slate-600 font-bold">Olivia Rhye</h3>
          <p className="text-slate-600">olivai@untitledui.com</p>
        </div>
      </div>
    </aside>
  );
};

export default NavBar;
