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
export interface memberProps {
  name: string;
  memberSince: string;
  profilePic: string;
  description: string;
}
export const members: memberProps[] = [
  {
    name: "Phoenix Baker",
    memberSince: "Feb 2022",
    profilePic: "/Avatar 2.png",
    description:
      "Phoenix Baker joined our community in February 2022. With a knack for creativity and innovation, Phoenix quickly became known for their ability to think outside the box. They are an active participant in discussions, often providing unique perspectives that inspire and challenge the group. Outside of our community, Phoenix enjoys painting and exploring new art forms.",
  },
  {
    name: "Lana Steiner",
    memberSince: "Jan 2022",
    profilePic: "/Avatar (1).png",
    description:
      "Lana Steiner has been a member since January 2022. Lana brings a wealth of knowledge to our community, with a background in both science and literature. Her friendly demeanor and willingness to share insights make her a beloved member. In her free time, Lana enjoys reading historical novels and hiking in the mountains.",
  },
  {
    name: "Demi Wilkinson",
    memberSince: "Mar 2022",
    profilePic: "/Avatar (2).png",
    description:
      "Demi Wilkinson became part of our group in March 2022. Demi is known for their analytical mind and problem-solving abilities. They have a talent for breaking down complex issues and presenting clear, actionable solutions. Demi is also an avid chess player and enjoys participating in local tournaments.",
  },
  {
    name: "Candice Wu",
    memberSince: "Feb 2022",
    profilePic: "/Avatar (3).png",
    description:
      "Candice Wu joined us in February 2022. She is renowned for her creative ideas and supportive nature, always ready to assist fellow members with her extensive knowledge in digital marketing. Candice has a passion for baking and often brings her delicious homemade treats to community events.",
  },
  {
    name: "Natali Craig",
    memberSince: "Mar 2022",
    profilePic: "/Avatar (4).png",
    description:
      "Natali Craig has been with us since March 2022. Her enthusiasm and expertise in project management have significantly benefited our community. Natali is known for her ability to keep projects on track and motivate team members. She enjoys traveling and has visited over 20 countries, always bringing back interesting stories and souvenirs.",
  },
  {
    name: "Orlando Diggs",
    memberSince: "Apr 2022",
    profilePic: "/Avatar (5).png",
    description:
      "Orlando Diggs joined in April 2022. Orlando's problem-solving skills and positive attitude are well appreciated in our community. He has a background in software development and often shares his technical knowledge with others. In his spare time, Orlando enjoys playing basketball and volunteering at local coding workshops.",
  },
  {
    name: "Drew Cano",
    memberSince: "Apr 2022",
    profilePic: "/Avatar (6).png",
    description:
      "Drew Cano has been a member since April 2022. Known for their analytical mind and engaging personality, Drew is a valuable asset to our community. They excel in data analysis and are always ready to lend a helping hand. Drew enjoys writing poetry and has a collection of poems published in various literary magazines.",
  },
  {
    name: "Kate Morrison",
    memberSince: "Jan 2022",
    profilePic: "/Avatar (7).png",
    description:
      "Kate Morrison, who joined in January 2022, is dedicated and thoughtful, consistently enriching our community's experience. With a background in education, Kate is adept at facilitating learning and growth among members. She loves gardening and has a beautiful collection of rare plants at home.",
  },
  {
    name: "Koray Okumus",
    memberSince: "Feb 2022",
    profilePic: "/Avatar (8).png",
    description:
      "Koray Okumus has been with us since February 2022. Admired for their innovative thinking and collaborative efforts, Koray often brings fresh ideas to the table. They have a background in engineering and enjoy working on DIY projects during weekends. Koray is also a passionate cyclist and participates in long-distance rides.",
  },
  {
    name: "Ava Wright",
    memberSince: "Mar 2022",
    profilePic: "/Avatar (9).png",
    description:
      "Ava Wright joined our ranks in March 2022. Her enthusiasm and insightful input have quickly made her a favorite among members. Ava has a background in graphic design and often helps with visual projects. She loves photography and frequently organizes photo walks for the community.",
  },
];

export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: 250,
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: 150,
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: 350,
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: 450,
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: 550,
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: 200,
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: 300,
    paymentMethod: "Credit Card",
  },
];
