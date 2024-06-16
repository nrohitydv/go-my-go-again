import Link from "next/link";
import {
  BarChartBig,
  CalendarCheck2,
  CircleArrowOutUpRight,
  Home,
  LogOut,
  PieChart,
  Settings,
  SquareGanttChart,
  UsersRound,
} from "lucide-react";

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
import SearchField from "./SearchField";

const NavBar = () => {
  return (
    <aside className="w-[300px] ml-4 block sm:hidden border-r">
      <div className="flex flex-col justify-start gap-[20px] mt-4">
        <div className="inline-flex gap-1">
          <div className="">
            <Link href="/">
              <Image src="/logo.png" alt="logo" height={31.15} width={50} />
            </Link>
          </div>
          <Link href="/">
            <h1 className="font-bold">Go My Go</h1>
          </Link>
        </div>

        <SearchField />
        <ul>
          <div className="font-semibold space-y-2">
            <li>
              <Link href="/" className="">
                <p className="inline-flex items-center text-slate-700 gap-[12px] text-md hover:bg-slate-200 rounded-md p-2 hover:w-[250px]">
                  <Home /> Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <p className="inline-flex items-center text-slate-700 gap-[12px] text-md hover:bg-slate-200 rounded-md p-2 hover:w-[250px]">
                  <BarChartBig />
                  Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <p className="inline-flex items-center text-slate-700 gap-[12px] text-md hover:bg-slate-200 rounded-md p-2 hover:w-[250px]">
                  <SquareGanttChart />
                  Projects
                </p>
              </Link>
            </li>
            <li>
              <Link href="/tasks">
                <p className="inline-flex items-center text-slate-700 gap-[12px] text-md hover:bg-slate-200 rounded-md p-2 hover:w-[250px]">
                  <CalendarCheck2 /> Tasks
                </p>
              </Link>
            </li>
            <li>
              <Link href="/reporting">
                <p className="inline-flex items-center text-slate-700 gap-[12px] text-md hover:bg-slate-200 rounded-md p-2 hover:w-[250px]">
                  <PieChart /> Reporting
                </p>
              </Link>
            </li>
            <li>
              <Link href="/users">
                <p className="inline-flex items-center text-slate-700 gap-[12px] text-md hover:bg-slate-200 rounded-md p-2 hover:w-[250px]">
                  <UsersRound /> Users
                </p>
              </Link>
            </li>
          </div>
        </ul>
        <ul>
          <div className="font-semibold space-y-2">
            <li>
              <Link href="/support">
                <p className="inline-flex items-center text-slate-700 gap-[12px] text-md hover:bg-slate-200 rounded-md p-2 hover:w-[250px]">
                  <CircleArrowOutUpRight /> Support
                </p>
              </Link>
            </li>
            <li>
              <Link href="/setting">
                <p className="inline-flex items-center text-slate-700 gap-[12px] text-md hover:bg-slate-200 rounded-md p-2 hover:w-[250px]">
                  <Settings /> Settings
                </p>
              </Link>
            </li>
          </div>
        </ul>

        <Card className="w-[280px]">
          <CardHeader>
            <CardTitle className="text-md flex justify-between cursor-pointer">
              <h2>New Features available</h2>
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
        <div className="flex justify-around">
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
          <div className="cursor-pointer">
            <LogOut />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NavBar;
