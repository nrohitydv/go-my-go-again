import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  BarChartBig,
  CalendarCheck2,
  CircleArrowOutUpRight,
  Home,
  PieChart,
  Settings,
  SquareGanttChart,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  return (
    <div className="block sm:hidden m-3">
      <div className="flex justify-between ">
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
        <Sheet>
          <SheetTrigger>
            <RxHamburgerMenu size={20} />
          </SheetTrigger>
          <SheetContent>
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
