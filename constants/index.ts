import {
  BarChartBig,
  CalendarCheck2,
  CircleArrowOutUpRight,
  Home,
  LucideIcon,
  PieChart,
  Settings,
  SquareGanttChart,
  UsersRound,
} from "lucide-react";

interface Props {
  label: string;
  route: string;
  icon: LucideIcon;
}
export const navLinks: Props[] = [
  {
    label: "Home",
    route: "/",
    icon: Home,
  },
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: BarChartBig,
  },
  {
    label: "Projects",
    route: "/projects",
    icon: SquareGanttChart,
  },
  {
    label: "Tasks",
    route: "/tasks",
    icon: CalendarCheck2,
  },
  {
    label: "Reporting",
    route: "/reporting",
    icon: PieChart,
  },
  {
    label: "Users",
    route: "/users",
    icon: UsersRound,
  },
];

export const navLinks2: Props[] = [
  { label: "Support", route: "/support", icon: CircleArrowOutUpRight },
  {
    label: "Setting",
    route: "/setting",
    icon: Settings,
  },
];

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

export const vendors: Vendor[] = [
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

export const data = [
  { name: "Jan", yourRating: 65, industryAverage: 50 },
  { name: "Feb", yourRating: 66, industryAverage: 51 },
  { name: "Mar", yourRating: 67, industryAverage: 52 },
  { name: "Apr", yourRating: 66, industryAverage: 53 },
  { name: "May", yourRating: 68, industryAverage: 54 },
  { name: "Jun", yourRating: 69, industryAverage: 55 },
  { name: "Jul", yourRating: 70, industryAverage: 56 },
  { name: "Aug", yourRating: 71, industryAverage: 57 },
  { name: "Sep", yourRating: 72, industryAverage: 58 },
  { name: "Oct", yourRating: 73, industryAverage: 59 },
  { name: "Nov", yourRating: 74, industryAverage: 60 },
  { name: "Dec", yourRating: 75, industryAverage: 61 },
];

export const members = [
  {
    name: "Phoenix Baker",
    memberSince: "Feb 2022",
    profilePic: "/Avatar 2.png",
  },
  {
    name: "Lana Steiner",
    memberSince: "Jan 2022",
    profilePic: "/Avatar (1).png",
  },
  {
    name: "Demi Wilkinson",
    memberSince: "Mar 2022",
    profilePic: "/Avatar (2).png",
  },
  {
    name: "Candice Wu",
    memberSince: "Feb 2022",
    profilePic: "/Avatar (3).png",
  },
  {
    name: "Natali Craig",
    memberSince: "Mar 2022",
    profilePic: "/Avatar (4).png",
  },
  {
    name: "Orlando Diggs",
    memberSince: "Apr 2022",
    profilePic: "/Avatar (5).png",
  },
  {
    name: "Drew Cano",
    memberSince: "Apr 2022",
    profilePic: "/Avatar (6).png",
  },
  {
    name: "Kate Morrison",
    memberSince: "Jan 2022",
    profilePic: "/Avatar (7).png",
  },
  {
    name: "Koray Okumus",
    memberSince: "Feb 2022",
    profilePic: "/Avatar (8).png",
  },
  {
    name: "Ava Wright",
    memberSince: "Mar 2022",
    profilePic: "/Avatar (9).png",
  },
];
