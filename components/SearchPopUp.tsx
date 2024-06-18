import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const SearchPopUp = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <p className="text-slate-600 mt-2">
          <Search />
        </p>
      </HoverCardTrigger>
      <HoverCardContent className="border-none">
        <div className="relative hidden sm:block ">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 " />
          <Input className="pl-10 pr-2 py-1  rounded-md border " />
        </div>
      </HoverCardContent>
    </HoverCard>

    // <DropdownMenu>
    //   <DropdownMenuTrigger>
    //     <p className="text-slate-600">
    //       <Search />
    //     </p>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent>
    //     <div className="relative hidden sm:block ">
    //       <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 " />
    //       <Input className="pl-10 pr-2 py-1  rounded-md border-0 " />
    //     </div>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
};

export default SearchPopUp;
