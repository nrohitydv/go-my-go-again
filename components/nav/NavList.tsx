"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, navLinks2 } from "@/constants";
const NavList = () => {
  const pathname = usePathname();
  return (
    <div className="">
      <ul>
        {/* <div className="font-semibold space-y-2">
          <Link href="/">
            <li className="hover:bg-slate-200 rounded-md  hover:w-full p-2">
              <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                <Home /> Home
              </p>
            </li>
          </Link>

          <Link href="/dashboard">
            <li className="hover:bg-slate-200 rounded-md  hover:w-full p-2">
              <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                <BarChartBig />
                Dashboard
              </p>
            </li>
          </Link>

          <Link href="/projects">
            <li className="hover:bg-slate-200 rounded-md  hover:w-full  p-2">
              <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                <SquareGanttChart />
                Projects
              </p>
            </li>
          </Link>

          <Link href="/tasks">
            <li className="hover:bg-slate-200 rounded-md  hover:w-full  p-2">
              <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                <CalendarCheck2 /> Tasks
              </p>
            </li>
          </Link>

          <Link href="/reporting">
            <li className="hover:bg-slate-200 rounded-md  hover:w-full  p-2">
              <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                <PieChart /> Reporting
              </p>
            </li>
          </Link>

          <Link href="/users">
            <li className="hover:bg-slate-200 rounded-md  hover:w-full  p-2">
              <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                <UsersRound /> Users
              </p>
            </li>
          </Link>
        </div> */}
        <div className="font-semibold space-y-2">
          {navLinks.map((link) => {
            const isActive = link.route === pathname;
            return (
              <Link href={link.route} key={link.label}>
                <li
                  className={` rounded-md  hover:w-full p-2 ${
                    isActive ? "bg-blue-200" : "hover:bg-slate-200"
                  }`}
                >
                  <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                    {<link.icon />}
                    {link.label}
                  </p>
                </li>
              </Link>
            );
          })}
        </div>
      </ul>
      <ul className="mt-2">
        {/* <div className="font-semibold space-y-2">
          <Link href="/support">
            <li className="hover:bg-slate-200 rounded-md  hover:w-full  p-2">
              <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                <CircleArrowOutUpRight /> Support
              </p>
            </li>
          </Link>

          <Link href="/setting">
            <li className="hover:bg-slate-200 rounded-md  hover:w-full  p-2">
              <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                <Settings /> Settings
              </p>
            </li>
          </Link>
        </div> */}
        <div className="font-semibold space-y-2">
          {navLinks2.map((link) => {
            const isActive = link.route === pathname;
            return (
              <Link href={link.route} key={link.label}>
                <li
                  className={` rounded-md  hover:w-full p-2 ${
                    isActive ? "bg-blue-200" : "hover:bg-slate-200"
                  }`}
                >
                  <p className="inline-flex items-center text-slate-700 gap-[12px] text-md">
                    {<link.icon />}
                    {link.label}
                  </p>
                </li>
              </Link>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default NavList;
