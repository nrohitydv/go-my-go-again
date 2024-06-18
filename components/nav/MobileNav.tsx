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
import MobileNavList from "./MobileNavList";

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
          <SheetTrigger className="mr-2">
            <RxHamburgerMenu size={20} />
          </SheetTrigger>
          <SheetContent>
            <MobileNavList />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
